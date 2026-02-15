import {
  form1DUnits,
  form1DValues,
  form1D,
  form2D,
  form2DUnits,
  form2DValues,
} from './utils.js';

// Funciones para los cálculos en 1D
function excludingHolding() {
  const lengthMaterialUnit = form1DUnits.materialLengthUnit.value;
  const holdingWasteUnit = form1DUnits.holdingWasteUnit.value;
  const materialLength = Number(form1DValues.materialLengthValue.value);
  const holdingLength = Number(form1DValues.holdingWasteValue.value);

  const materialInches =
    lengthMaterialUnit === 'ft' ? materialLength * 12 : materialLength;

  const wasteInches =
    holdingWasteUnit === 'cm' ? holdingLength / 2.54 : holdingLength;

  const resultLength = materialInches - wasteInches;
  return resultLength;
}

function excludingKnots() {
  const knotWaste = form1DUnits.knotWasteUnit.value;
  const knotLength = Number(form1DValues.knotWasteValue.value);
  const lengthInches = knotWaste === 'cm' ? knotLength / 2.54 : knotLength;
  const withoutHolding = excludingHolding();
  const finalLength = withoutHolding - lengthInches;
  return finalLength;
}

function round(num) {
  return Math.round(num * 100) / 100;
}

function cutArea() {
  const cutterUnit = form1DUnits.cutterWidthUnit.value;
  const cutUnit = form1DUnits.cutWidthUnit.value;
  const cutter = Number(form1DValues.cutterWidthValue.value);
  const cut = Number(form1DValues.cutWidthValue.value);

  const cutterInches = cutterUnit === 'mm' ? cutter / 25.4 : cutter;
  const cutInches = cutUnit === 'mm' ? cut / 25.4 : cut;

  const sum = cutterInches + cutInches;
  const freeArea = excludingKnots();
  const cutsQty = freeArea / sum;

  const result = form1DValues.result;
  result.value = round(cutsQty);
}

form1D.addEventListener('submit', (e) => {
  e.preventDefault();
  cutArea();
});

// Funciones para los cálculos en 2D

function getLength() {
  const totalLengthUnits = form2DUnits.lengthUnit.value;
  const totalLengthValue = Number(form2DValues.lengthValue.value);
  const totalLength =
    totalLengthUnits === 'cm' ? totalLengthValue / 2.54 : totalLengthValue;

  const noCutUnitsX = form2DUnits.noCutXUnit.value;
  const noCutValueX = Number(form2DValues.noCutXValue.value);
  const noCutLength = noCutUnitsX === 'cm' ? noCutValueX / 2.54 : noCutValueX;

  const finalCutLength = totalLength - noCutLength;
  return finalCutLength;
}

function getWidth() {
  const totalWidthUnits = form2DUnits.widthUnit.value;
  const totalWidthValue = Number(form2DValues.widthValue.value);
  const totalWidth =
    totalWidthUnits === 'cm' ? totalWidthValue / 2.54 : totalWidthValue;

  const noCutUnitsY = form2DUnits.noCutYUnit.value;
  const noCutValueY = Number(form2DValues.noCutYValue.value);
  const noCutWidth = noCutUnitsY === 'cm' ? noCutValueY / 2.54 : noCutValueY;

  const finalCutWidth = totalWidth - noCutWidth;
  return finalCutWidth;
}

function getAppDimension() {
  const diameterUnit = form2DUnits.diameterUnit.value;
  const diameterValue = Number(form2DValues.diameterValue.value);
  const diameter = diameterUnit === 'cm' ? diameterValue / 2.54 : diameterValue;

  const gapUnit = form2DUnits.gapUnit.value;
  const gapValue = Number(form2DValues.gapValue.value);
  const gap = gapUnit === 'cm' ? gapValue / 2.54 : gapValue;

  const appDimension = diameter + gap;

  return appDimension;
}

function getAppsQuantity() {
  const length = getLength();
  const width = getWidth();
  const app = getAppDimension();

  const appsX = length / app;
  const appsY = width / app;

  const totalApps = appsX * appsY;

  const result = form2DValues.result;

  result.value = round(totalApps);
}

form2D.addEventListener('submit', (e) => {
  e.preventDefault();
  getAppsQuantity();
});

import { formUnits, formValues, form } from './utils.js';

function excludingHolding() {
  const lengthMaterialUnit = formUnits.materialLengthUnit.value;
  const holdingWasteUnit = formUnits.holdingWasteUnit.value;
  const materialLength = Number(formValues.materialLengthValue.value);
  const holdingLength = Number(formValues.holdingWasteValue.value);

  const materialInches =
    lengthMaterialUnit === 'ft' ? materialLength * 12 : materialLength;

  const wasteInches =
    holdingWasteUnit === 'cm' ? holdingLength / 2.54 : holdingLength;

  const resultLength = materialInches - wasteInches;
  return resultLength;
}

function excludingKnots() {
  const knotWaste = formUnits.knotWasteUnit.value;
  const knotLength = Number(formValues.knotWasteValue.value);
  const lengthInches = knotWaste === 'cm' ? knotLength / 2.54 : knotLength;
  const withoutHolding = excludingHolding();
  const finalLength = withoutHolding - lengthInches;
  return finalLength;
}

function round(num) {
  return Math.round(num * 100) / 100;
}

function cutArea() {
  const cutterUnit = formUnits.cutterWidthUnit.value;
  const cutUnit = formUnits.cutWidthUnit.value;
  const cutter = Number(formValues.cutterWidthValue.value);
  const cut = Number(formValues.cutWidthValue.value);

  const cutterInches = cutterUnit === 'mm' ? cutter / 25.4 : cutter;
  const cutInches = cutUnit === 'mm' ? cut / 25.4 : cut;

  const sum = cutterInches + cutInches;
  const freeArea = excludingKnots();
  const cutsQty = freeArea / sum;

  const result = formValues.result;
  result.value = round(cutsQty);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  cutArea();
});

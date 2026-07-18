const d = document;

const form1D = d.querySelector('.parameters_form-1D');

const form1DUnits = {
  materialLengthUnit: d.querySelector('.material-length_unit'),
  holdingWasteUnit: d.querySelector('.holding-waste_unit'),
  knotWasteUnit: d.querySelector('.knot-waste_unit'),
  cutterWidthUnit: d.querySelector('.cutter-width_unit'),
  cutWidthUnit: d.querySelector('.cut-width_unit'),
};

const form1DValues = {
  materialLengthValue: d.querySelector('.material-length_value'),
  holdingWasteValue: d.querySelector('.holding-waste_value'),
  knotWasteValue: d.querySelector('.knot-waste_value'),
  cutterWidthValue: d.querySelector('.cutter-width_value'),
  cutWidthValue: d.querySelector('.cut-width_value'),
  button: d.querySelector('.parameters_form-1D__btn'),
  result: d.querySelector('.parameters_form-1D__result'),
};

const form2D = d.querySelector('.parameters_form-2D');

const form2DUnits = {
  lengthUnit: d.querySelector('.length_unit'),
  widthUnit: d.querySelector('.width_unit'),
  noCutXUnit: d.querySelector('.no-cut-x_unit'),
  noCutYUnit: d.querySelector('.no-cut-y_unit'),
  diameterUnit: d.querySelector('.diameter_unit'),
  gapUnit: d.querySelector('.gap_unit'),
};

const form2DValues = {
  lengthValue: d.querySelector('.length_value'),
  widthValue: d.querySelector('.width_value'),
  noCutXValue: d.querySelector('.no-cut-x_value'),
  noCutYValue: d.querySelector('.no-cut-y_value'),
  diameterValue: d.querySelector('.diameter_value'),
  gapValue: d.querySelector('.gap_value'),
  button: d.querySelector('.parameters_form-2D__btn'),
  result: d.querySelector('.parameters_form-2D__result'),
  both: d.querySelector('.both-sides'),
};

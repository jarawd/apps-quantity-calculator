const d = document;

export const form = d.querySelector('.parameters_form');

export const formUnits = {
  materialLengthUnit: d.querySelector('.material-length_unit'),
  holdingWasteUnit: d.querySelector('.holding-waste_unit'),
  knotWasteUnit: d.querySelector('.knot-waste_unit'),
  cutterWidthUnit: d.querySelector('.cutter-width_unit'),
  cutWidthUnit: d.querySelector('.cut-width_unit'),
};

export const formValues = {
  materialLengthValue: d.querySelector('.material-length_value'),
  holdingWasteValue: d.querySelector('.holding-waste_value'),
  knotWasteValue: d.querySelector('.knot-waste_value'),
  cutterWidthValue: d.querySelector('.cutter-width_value'),
  cutWidthValue: d.querySelector('.cut-width_value'),
  button: d.querySelector('.parameters_form__btn'),
  result: d.querySelector('.parameters_form__result'),
};

export const formResults = {
  noHolding: d.querySelector('.no-holding'),
  noKnots: d.querySelector('.no-knots'),
};

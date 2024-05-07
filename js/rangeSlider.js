class RangeSlider {
  constructor() {
    this.rangeSliders = document.querySelectorAll('.range-slider');
  }

  bind(calculationCallback) {
    const context = this;
    this.rangeSliders.forEach(function (rangeElement) {
      rangeElement.oninput = function () {
        context.updateTooltip(rangeElement);
      };
      rangeElement.dataset.ponderation = generateRandomNumber(80, 290);
      rangeElement.addEventListener('change', function (event) {
        calculationCallback();
      });
    });
  }

  getSumarizedOptionsValues() {
    let options = [];
    this.rangeSliders.forEach(function (rangeElement) {
      options.push({
        value: parseInt(rangeElement.value),
        ponderation: parseInt(rangeElement.dataset.ponderation)
      })
    });

    return options;
  }

  updateTooltip(rangeElement) {
    let tooltipElementId = rangeElement.dataset.tooltip;
    let tooltip = document.querySelector(tooltipElementId);
    tooltip.innerHTML = rangeElement.value;
  }
}
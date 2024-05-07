class Calculator {
  constructor() {
    this.industry_value = 1;
    this.total_per_year_input = document.querySelector('#_total_per_year_');
    this.total_appointment = document.querySelector('#_total_appointment_');
    this.total_marketing_return = document.querySelector('#_total_marketing_return_');
    this.rangeSlider = new RangeSlider();
    const context = this;
    this.rangeSlider.bind(function () {
      context.calculate()
    })
    this.bindIndustrySelect();
    this.calculate();
  }

  bindIndustrySelect() {
    const context = this;
    const selectElement = document.querySelector('#_industry_type_');
    selectElement.addEventListener('change', function (event) {
      context.calculate();
    });
  }

  calculate() {
    const optionsValues = this.rangeSlider.getSumarizedOptionsValues();
    const sumarizedOptions = optionsValues.reduce(function (accumulator, option) {
      return accumulator + (option.value * option.ponderation);
    }, 0);
    const industryTypeSelectedItem = document.querySelector('#_industry_type_');
    const industryTypeSelected = INDUSTRY_TYPE_MAP.find(function (industryType) {
      return industryType.label === industryTypeSelectedItem.value
    });
    const sumarized = industryTypeSelected.ponderation + sumarizedOptions;
    const per_year = sumarized * 100;
    const total_appointment = Math.ceil(sumarized / generateRandomNumber(900, 1000));
    const total_marketing_return = generateRandomNumber(80, 999);

    this.total_per_year_input.innerHTML = per_year;
    this.total_appointment.innerHTML = total_appointment;
    this.total_marketing_return.innerHTML = total_marketing_return;
  }
}
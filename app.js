const conatiner = document.querySelector(".container");

const getCountryData = function (country) {
  fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderCountry(data);
    });
};
const renderCountry = function (data) {
  const html = `<h2>
    COVID -19 Cases in ${data.country}
    </h2>
    <div class="board">
    <div class="card a">
      <i class="fa fa-tachometer"></i>
      <h5>Active Cases</h5>
      <span id="active">${data.active}</span>
    </div>
    <div class="card ca">
      <i class="fa fa-th-list"></i>
      <h5>Total Cases</h5>
      <span id="cases">${data.cases}</span>
    </div>
    <div class="card cr">
      <i class="fa fa-times-circle"></i>
      <h5>Critical Cases</h5>
      <span id="critical">${data.critical}</span>
    </div>
    <div class="card d">
      <i class="fa fa-times"></i>
      <h5>Total Deaths</h5>
      <span id="death">${data.deaths}</span>
    </div>
    <div class="card r">
      <i class="fa fa-check-square-o"></i>
      <h5>Recovered Cases</h5>
      <span id="recovered">${data.recovered}</span>
    </div>
    <div class="card t">
      <i class="fa fa-eye"></i>
      <h5>Total Testes Done</h5>
      <span id="tests">${data.tests}</span>
    </div>
    </div>`;
  conatiner.insertAdjacentHTML("beforeend", html);
};
getCountryData("BA");

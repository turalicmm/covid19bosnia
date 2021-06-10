const getGraphDataSecond = function (country) {
  fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      datainjectGraph(data);
      return data;
    });
};

const datainjectGraph = function (data) {
  var ctx = document.getElementById("myChartArea").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
        "Active Cases",
        "Total Cases",
        "Critical Cases",
        "Total Deaths",
        "Total Recovered",
        "Total Tests",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            data.active,
            data.cases,
            data.critical,
            data.deaths,
            data.recovered,
            data.tests,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

getGraphDataSecond("BA");

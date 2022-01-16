// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

let databar = JSON.parse('<%- databar %>')

// Bar Chart Example
var ctx = document.getElementById("myBarChart2");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: databar.labels,
        datasets: [{
            label: "Montant",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: databar.data,
        }],
    },
    options: {
        scales: {
            xAxes: [{
                time: {
                    unit: 'Fcfa'
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: databar.labels.length
                }
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: databar.vmax + databar.marge,
                    maxTicksLimit: 5
                },
                gridLines: {
                    display: true
                }
            }],
        },
        legend: {
            display: false
        }
    }
});
//side navigation 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


// Pie chart 
var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Public Schools', 'Religious Schools', 'B & G Clubs'],
        datasets: [{
            label: 'My First Dataset',
            data: [38, 27, 34],
            backgroundColor: [
                'rgba(34, 55, 199, 1)',
                'rgba(134, 193, 227, 1)',
                'rgba(8, 98, 194, 1)'
            ],
            borderColor: [
                'rgba(240, 240, 240, 1)',

            ],
            borderWidth: 10
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display:false
            },
            title: {
                display: true,
                text: 'Donations',
                font: {
                    weight: 'bold',
                    size: 30
                },
            },
            datalabels: {
                color: 'white',
                backgroundColor:'black',
                formatter: (value, context) => {
                    let dataset = context.chart.data.datasets[0];
                    let total = dataset.data.reduce((acc, val) => acc + val, 0);
                    let percentage = ((value / total) * 100).toFixed(1);
                    return context.chart.data.labels[context.dataIndex] + ': ' + percentage + '%';
                },
                font: {
                    weight: 'bold',
                    size: 18
                },
                padding:10,
                borderRadius:30,
            }
    }
},
plugins: [ChartDataLabels]
});



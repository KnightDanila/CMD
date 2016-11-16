/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ctx;
var data = [];

function loadPage() {
    var x = [1, 2, 3, 4, 5];
    var y = [10, 2, 1, 2, 10];
    draw(x, y);
    /*
     var ctx = document.getElementById("myChart");
     
     var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
     label: '# of Votes',
     data: [12, 19, 3, 5, 2, 3],
     backgroundColor: [
     'rgba(255, 99, 132, 0.2)',
     'rgba(54, 162, 235, 0.2)',
     'rgba(255, 206, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(153, 102, 255, 0.2)',
     'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
     'rgba(255,99,132,1)',
     'rgba(54, 162, 235, 1)',
     'rgba(255, 206, 86, 1)',
     'rgba(75, 192, 192, 1)',
     'rgba(153, 102, 255, 1)',
     'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
     }]
     },
     options: {
     scales: {
     yAxes: [{
     ticks: {
     beginAtZero: true
     }
     }]
     }
     }
     });
     */
}

function drawPoint(x, y, label){
    // Рисует точку, при наведении на которую выводится её название
    return 0;
}
function drawChart(arrX, arrY, color, transparent){
    // Рисует график по массивам arrX, arrY цвета color - может это стринг, 
    // пока не знаю, надо почитать документацию, 
    // transparent - прозрачность этого графика :)
    var ctx = document.getElementById("myChartResult");
    var bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    data.push({
        data: arrY,
        backgroundColor: [bgColor],
        label: 'Component',
        borderWidth: 1
    });
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrX,
            datasets: data
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //return 0;
}
function drawChartClear(){
    // Очищает график :)
    // Хотя можно и не делать :D
    return 0;
}

// Моя тестовая функция :)
function draw(arrX, arrY) {
    var ctx = document.getElementById("myChartSmile");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrX,
            datasets: [{
                    label: '# of Votes',
                    data: arrY,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        }
    });
}


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

function drawPoint(x, y, label){
    // Рисует точку, при наведении на которую выводится её название
    return 0;
}
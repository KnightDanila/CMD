/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ctx;
var data = [];
var labels = [];

function loadPage() {
    var x = [1, 2, 3, 4, 5];
    var y = [10, 2, 1, 2, 10];
    drawChart(x, y, null, null, 'Hello', false);
}

// Рисует график по массивам arrX, arrY цвета color - может это стринг,
// пока не знаю, надо почитать документацию,
// transparent - прозрачность этого графика :)
function drawChart(arrX, arrY, color, transparent, label, sort){
    var label = typeof label !== 'undefined' ?  label : 'Component';

    var ctx = document.getElementById("myChartResult");
    labels = labels.concat(arrX);
    if(sort){
        labels.sort(compareNumeric);
        labels = Array.from(new Set(labels));
        console.log(labels)
    }
    data.push({
        data: labels,
        backgroundColor:`rgba(${random()}, ${random()}, ${random()}, ${transparent || 1})`,
        label: label
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
            },
            tooltips: {
                custom: function (tooltip) {
                    if (!tooltip.body) {
                        return;
                    }
                    //console.log(tooltip.title, tooltip.body[0].lines)
                }
            }
        }
    });
}

// Очищает график
function drawChartClear(){
    data = [];
    labels = [];
    var ctx = document.getElementById("myChartResult");
    ctx.getContext('2d').clearRect(0, 0, ctx.width, ctx.height);
}

// Рисует точку, при наведении на которую выводится её название
function drawPoint(x, y, label){

    return 0;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

function random() {
    return Math.floor(Math.random() * 150).toString(10);
}
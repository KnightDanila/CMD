/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * 1) Подумаем сколько функций может быть у лога:
 *  а) Добать в лог - add or log
 *  б) Очистить или обновить лог - logUpdata
 *  в) Изминить файл лога - logPath или logElem - если это HTML и JS
 */

var log = {
    ON: true,
    elemID: 'log',
    add: function (text) {
        /* FOR testing */
        if (this.ON){
            //alert(text);
            console.log(text);
            document.getElementById(this.elemID).innerHTML += '<br>' + text;
        }
    },
    updata: function () {
        document.getElementById(this.elemID).innerHTML = "";
    },
    logSetElemID: function (elemID) {
        this.elemID = elemID;
    }
};
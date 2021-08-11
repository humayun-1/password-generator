var arrupper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var arrlower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrnum = ["0","1","2","3","4","5","6","7","8","9","0"];
var arrsym = [`"`,"!","#","$","%","&",`'`,"(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","_","`","|","~","}"]
var dataArr = [];
var tempArr = [];
var arr = [];

var btn = document.querySelector(".btn");
var length = document.querySelector(".length");
var output = document.querySelector(".output");
var span = document.querySelector(".generated span");

var upper = document.querySelector(".upper");
var lower = document.querySelector(".lower");
var num = document.querySelector(".num");
var sym = document.querySelector(".sym");
var input = document.querySelectorAll(".inputs input");
btn.addEventListener('click', main)

function main() {
    if (length.value !== '' || input[1].checked === true || input[2].checked === true || input[3].checked === true || input[4].checked === true) {
        output.value = '';
        // validation
        let cstm = document.querySelectorAll(".inputs");
        for (i = 0; i < cstm.length; i++) {
            cstm[i].classList.remove('error')
        }
        // validation end
        for (i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                dataArr.push(eval('arr' + `${input[i].classList.value}`));
            }
        }
        for (i = 0; i < dataArr.length; i++) {
            if (dataArr.length == 1) {
                tempArr.push(eval(dataArr[0]));
            }
            else if (dataArr.length == 2) {
                tempArr.push(eval(dataArr[0]).concat(dataArr[1]));
            }
            else if (dataArr.length == 3) {
                tempArr.push(eval(dataArr[0]).concat(dataArr[1], dataArr[2]));
            }
            else if (dataArr.length == 4) {
                tempArr.push(eval(dataArr[0]).concat(dataArr[1], dataArr[2], dataArr[3]));
            }
        }
        for (i = 0; i < tempArr.length; i++) {
            // Shuffle the selected arrays
            arr = tempArr[i].sort(() => .5 - Math.random());
            arr = tempArr[i].slice(0, length.value);
        }
        for (i = 0; i < arr.length; i++) {
            output.value += arr[i]
        }
    }
    else {
        // validation
        let input = document.querySelectorAll(".inputs");
        for (i = 0; i < input.length; i++) {
            input[i].classList.add('error')
        }// validation end
    }
}

// copy to clipboard
span.addEventListener('click', function () {
    output.select();
    document.execCommand('copy');  
})
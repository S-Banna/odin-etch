let generate = document.querySelector(".generate");
generate.addEventListener("click", generateGrid);
let jsrangeValue;
let grid = document.querySelector(".gridCont");

function generateGrid () {
    var divArr = [];
    grid.innerHTML = "";
    jsrangeValue = document.querySelector("#rangeValue").textContent;
    for (i = 0; i < jsrangeValue * jsrangeValue; i++) {
        divArr[i] = document.createElement("div");
        grid.appendChild(divArr[i]);
        if (jsrangeValue == 16) {
            divArr[i].classList.add("sixteen");
        }
        else if (jsrangeValue == 32) {
            divArr[i].classList.add("thirty");
        }
        else if (jsrangeValue == 48) {
            divArr[i].classList.add("forty");
        }
        else {
            console.log("error")
        }
    }
}
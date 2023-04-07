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
        divArr[i].classList.add("click")
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
    /*let clickEvent = document.querySelector(".click");
    console.log(clickEvent);
    for (j = 0; j <= clickEvent.length; j++) {
        clickEvent[j].addEventListener("click", function() {
            clickEvent[j].classList.add("black");
    });
    }*/
    let eventClick = grid.childNodes;
    console.log(eventClick);
    var arr = Array.prototype.slice.call(eventClick);
    console.log(arr);
    arr.forEach(element => element.addEventListener("mousedown", function() {
        element.classList.toggle("black");
    }));
}

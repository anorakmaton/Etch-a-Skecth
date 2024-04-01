const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-button");
var GLID_WIDTH = 600;
resetBtn.addEventListener("click", () => {
    const glidContainer = document.querySelector(".glid-container");
    let container = document.querySelector(".container");
    //containerがあれば削除してグリッドを再構築する
    if (container) {
        glidContainer.removeChild(container);
    }
    container = document.createElement("div");
    glidContainer.appendChild(container);
    container.classList.add("container");
    let sideLength = Number(prompt("Enter side length"));
    if (typeof sideLength === "number") {
        sideLength = sideLength >= 100 ? 100 : sideLength;
        generateDiv(sideLength);
    }
})

function rebuildGrid(sideLength) {
    const body = document.querySelector("body");
    let container = document.querySelector(".container");
    //containerを削除してグリッドを再構築する
    body.removeChild(container);
    container = document.createElement("div");
    container.appendChild(div);
    container.classList.add("container");

}

function generateDiv(sideConunt) {
    const sideLength = (GLID_WIDTH - (sideConunt*2)) / sideConunt;
    const container = document.querySelector(".container");
    for (let i = 0; i < sideConunt*sideConunt; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", `border: 1px solid rgb(121, 114, 114); height: ${sideLength}px; width: ${sideLength}px;`)
        div.addEventListener("mouseover", (evt) => {
            console.log(typeof evt.target);
            evt.target.classList.toggle("hover");
        })
        container.appendChild(div);
    }
}
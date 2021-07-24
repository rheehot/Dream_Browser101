const target = document.querySelector(".target");
const xLine = document.querySelector(".xLine");
const yLine = document.querySelector(".yLine");
const coords = document.querySelector(".coords");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    target.style.left = x + "px";
    target.style.top = y + "px";
    printLine(e);
    printCoords(x, y);
});

function printLine(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    xLine.style.left = pX + "px";
    yLine.style.top = pY + "px";
}

function printCoords(x, y) {
    coords.innerHTML = `
    <span>${x}px, ${y}px</span>
        `;
    coords.style.left = x + 40 + "px";
    coords.style.top = y + 10 + "px";
}

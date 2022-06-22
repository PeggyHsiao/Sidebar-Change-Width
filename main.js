let bar = document.querySelector('.width__bar');
let nav = document.querySelector('.nav');
let section = document.querySelector('.section');

let secOriPosition = 280;
let mouseX = 0; // 開始座標
let offsetX = 0; // 變動
let isMouseDown = false;

bar.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    mouseX = e.pageX;

    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", (e) => {
    isMouseDown = false;
    secOriPosition = parseInt(section.style.left.split('px')[0], 10);

    document.removeEventListener('mousemove',move)
})

function move(e) {
    if(!isMouseDown) return;

    offsetX = e.pageX - mouseX;

    nav.style.width = e.pageX + "px";
    bar.style.left = e.pageX - 3 + "px";

    section.style.left = secOriPosition + offsetX + "px";
}

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

document.addEventListener("mouseup", up)

function up() {
    isMouseDown = false;
    secOriPosition = parseInt(section.style.left.split('px')[0], 10);

    document.removeEventListener('mousemove',move)
}

function move(e) {
    if(!isMouseDown) return;

    if(e.pageX >= 600 || e.pageX <= 200) {
        const val = e.pageX >= 600 ? 600 : 200;

        nav.style.width = val + "px";
        bar.style.left = val - 4 + "px";

        section.style.left = val + "px";
    } else {
        offsetX = e.pageX - mouseX;

        nav.style.width = e.pageX + "px";
        bar.style.left = e.pageX - 4 + "px";
    
        section.style.left = secOriPosition + offsetX + "px";
    }
}

    


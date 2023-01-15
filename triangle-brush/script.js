const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.strokeStyle = '#3c415c'
ctx.lineWidth = 3;
ctx.shadowOffSetX = 10;
ctx.shadowOffSetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = 'black';
let hue = 0;
let drawing = false;
//ctx.globalCompositeOperation = 'difference';

function drawShape(x, y, radius, inset, n) {
    ctx.fillStyle = '#b4a5a5'
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < n; i++){
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill();
}
const radius = 70;
const inset = 0.4;
const n = 10;
drawShape(120, 120,radius * 1.45, 1, 1.5);  
drawShape(120, 120,radius, inset, n);  

let angle = 0
window.addEventListener('mousemove', function(e){
    if (drawing){
        ctx.save();
        ctx.translate(e.x, e.y);

        ctx.rotate(angle);
        drawShape(0, 0,radius * 1.45, 1, 1.5);  

        ctx.rotate(-angle * 2);
        drawShape(0, 0, radius, inset, n);

        angle += 0.05;
        ctx.restore();
    }
});
window.addEventListener('mousedown', function(){
    drawing = true;
});
window.addEventListener('mouseup', function(){
    drawing = false;
});
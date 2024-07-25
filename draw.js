
const drawingArea = document.getElementById('drawingArea');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Adjust canvas size to match window size
canvas.width = drawingArea.offsetWidth * 0.8;
canvas.height = drawingArea.offsetHeight * 0.8;

let isDrawing = false;
let brushSize = 5; // Initial brush size
let lastX = 0;
let lastY = 0;

fadeOutDrawingArea(0);

function fadeInDrawingArea(delay = 500) {
    $(drawingArea).fadeIn(delay);
}

function fadeOutDrawingArea(delay = 500) {
    $(drawingArea).fadeOut(delay);
}


function startDrawing(e) {
    const rect = canvas.getBoundingClientRect();
    isDrawing = true;
    [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawCircle(x, y);
    drawLine(lastX, lastY, x, y);
    [lastX, lastY] = [x, y];
}

function stopDrawing() {
    isDrawing = false;
}

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, brushSize / 2, 0, Math.PI * 2); // Draw circle
    context.fillStyle = '#000'; // Set color to black
    context.fill(); // Fill the circle
}

// Draw line between the current and frame the previous frame
// Makes lines appear smooth
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2); 
    context.strokeStyle = '#000';
    context.lineWidth = brushSize;
    context.stroke();
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

document.getElementById('clearBtn').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('saveBtn').addEventListener('click', function() {
    const imageData = canvas.toDataURL(); // Get canvas image data
    sessionStorage.setItem('savedDrawing', imageData); // Save drawing data to session storage
    saveDrawing();
});


let savedImageData = sessionStorage.getItem('savedDrawing');

function saveDrawing() {
    savedImageData = sessionStorage.getItem('savedDrawing');
    document.getElementById('displayImage').src = savedImageData;
    fadeOutDrawingArea(0);
    $(document.querySelector('.blackOverlay')).fadeTo(1000, 0);
    showTextbox();
}

// Event listener to update brush size
document.getElementById('brushSize').addEventListener('input', function(e) {
    brushSize = parseInt(e.target.value);
});

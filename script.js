const left = document.querySelector('.left');
const resize = document.querySelector('.resize');
const right = document.querySelector('.right');
const holder = document.querySelector('.holder')
const button = document.querySelector('#button');
let isHorizontal = false;

button.addEventListener('click', () => {
    holder.classList.toggle('column')
    right.classList.toggle('column-right')
    left.classList.toggle('column-left')
    resize.classList.toggle('column-resize')
    isHorizontal = !isHorizontal;
})

resize.addEventListener('mousedown', (event) => {

    let startX = event.clientX;
    let startY = event.clientY;

    function resizeBlocks(event) {
        let currentX = event.clientX;
        let currentY = event.clientY;

        if(!isHorizontal) {
            if (right.offsetWidth >= 200 || (right.offsetWidth < 200 && startX - currentX > 0)) {
                left.style.width = left.offsetWidth + currentX - startX + 'px';
            }
            startX = currentX
        } else {
            if (right.offsetHeight >= 200 || (right.offsetHeight < 200 && startY - currentY > 0)) {
                left.style.height = left.offsetHeight + currentY - startY + 'px';
            }
            startY = currentY
        }


        return false;
    }

    // moveMouseEvent = document.addEventListener('mousemove', resizeBlocks)
    document.onmousemove = resizeBlocks
})

document.addEventListener('mouseup', () => {
    console.log('moouseup')
    document.onmousemove = null;
})
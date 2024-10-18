function generateMatrix() {
    const container = document.createElement('div');
    container.className = 'background';
    document.body.appendChild(container);

    let columns = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < columns; i++) {
        let col = document.createElement('div');
        col.className = 'column';
        col.style.left = `${i * 20}px`;
        col.style.animationDuration = `${Math.random() * 10 + 5}s`;
        col.setAttribute('data-text', generateRandomText());
        container.appendChild(col);
    }
}

function generateRandomText() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789{}[]';
    let result = '';
    for (let i = 0; i < 100; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

window.onload = generateMatrix;

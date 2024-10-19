function generateMatrix() {
    const container = document.createElement('div');
    container.className = 'background';
    document.body.appendChild(container);

    let columns = Math.floor(window.innerWidth / 20); // Divide screen width by column width
    for (let i = 0; i < columns; i++) {
        let col = document.createElement('div');
        col.className = 'column';
        col.style.left = `${i * 20}px`; // Position each column
        col.style.animationDuration = `${Math.random() * 10 + 5}s`; // Randomize the speed
        col.setAttribute('data-text', generateRandomText());
        container.appendChild(col);
    }
}

function generateRandomText() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]';
    let result = '';
    for (let i = 0; i < 300; i++) {  // Increase the length of string to fill column height
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

window.onload = generateMatrix;

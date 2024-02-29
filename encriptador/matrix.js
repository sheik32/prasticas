const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let columns, fontSize;

function setup() {
    columns = Math.floor(window.innerWidth / 20); // Ajusta el número de columnas basado en el ancho de la ventana
    fontSize = Math.floor(window.innerWidth / columns);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = [];
    for (let i = 0; i < columns; i++) {
        matrix[i] = Math.floor(Math.random() * canvas.height / fontSize) + 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < matrix.length; i++) {
            const character = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(character, i * fontSize, matrix[i] * fontSize);
            if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
                matrix[i] = 0;
            }
            matrix[i]++;
        }
    }

    function animate() {
        drawMatrix();
        requestAnimationFrame(animate);
    }

    animate();
}

window.addEventListener('resize', setup);
setup();

const corazones = document.querySelectorAll(".corazon");
const mensaje = document.getElementById("mensaje");
let clics = 0;

corazones.forEach(c => {
    // Posición inicial aleatoria
    c.style.left = Math.random() * 85 + "vw";
    c.style.top = Math.random() * 75 + "vh";

    c.addEventListener("click", () => {
        // Efecto de desvanecimiento
        c.style.opacity = "0";
        c.style.transform = "scale(0)";
        
        setTimeout(() => {
            c.style.visibility = "hidden";
        }, 400);

        clics++;
        
        if(clics === corazones.length) {
            mensaje.classList.remove("hidden");
            // El título cambia para cerrar con broche de oro
            document.querySelector("h1").innerText = "¡Te amo! 🍅✨";
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');

    menuButton.addEventListener('click', function() {
        nav.classList.toggle('open');
        overlay.style.display = 'block'; // Mostra o overlay ao abrir a barra lateral
    });

    overlay.addEventListener('click', function() {
        nav.classList.remove('open');
        overlay.style.display = 'none'; // Esconde o overlay ao fechar a barra lateral
    });
});

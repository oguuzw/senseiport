// Ortak header ve navbar'ı yükler
function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', 'components/header.html');
    loadComponent('navbar', 'components/navbar.html');
});

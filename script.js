// Utiliza JavaScript para cargar el contenido en el div
window.onload = function () {
    var divContenidoExterno = document.getElementById('contenidoExterno');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            divContenidoExterno.innerHTML = xhr.responseText;
        }
    };

    xhr.open('GET', './principals/dashboard.html', true);
    xhr.send();
};
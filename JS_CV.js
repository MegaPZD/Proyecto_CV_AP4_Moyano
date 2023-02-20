
// Cambia los h1(Display_Horiz o Display_Verti) dependiendo la orientacion del dispositivo
let vertical = window.matchMedia("(orientation: portrait)").matches;
            console.log(vertical);
            if(vertical){
                document.getElementById('Display_Horiz').style.display='none';
            } else {
                document.getElementById('Display_Verti').style.display='none';
            }

document.getElementById('Link_Titulo').addEventListener('click', function Titulo() {

    console.log("Click al 'Bachiller en artes visuales en la institución Saint Mary Sue'");
    window.open('https://FakeLink/Imagen_Titulo_Almacenado_Server.png');

});


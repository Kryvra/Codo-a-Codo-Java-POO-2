const sendToConsole = document.getElementById('sendToConsole');

sendToConsole.addEventListener('click',writeConsole);

function writeConsole()
{
    console.log("Nombre: " + document.getElementById("nombre").value + "\n" +
                "Apellido: " + document.getElementById("apellido").value + "\n" +
                "Edad: " + document.getElementById("edad").value + "\n" + 
                "Hobbie: " + document.getElementById("hobbie").value + "\n" + 
                "Editor de código preferido: " + document.getElementById("editor").value + "\n" + 
                "Sistema operativo: " + document.getElementById("so").value);
}
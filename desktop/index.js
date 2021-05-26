const {app, BrowserWindow} = require('electron');

let appWindow;
function crearVentana(){
    appWindow = new BrowserWindow({

    });

    //Cuando la aplicacion se cierre
    appWindow.on('closed', ()=>{
        appWindow = null;
    });

    // Cargar html
    appWindow.loadFile('./index.html')

    // Cuando la app este lista, mostrar
    appWindow.once('ready-to-show', ()=>{
        appWindow.show();
    })
}

app.on('ready', crearVentana)
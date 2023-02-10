//El evento load escucha cuando se carga totalmente el HTML y es para evitar que cuando preguntemos o intentemos hacer algo con los botones nos de un error porque no existen
window.addEventListener('load', ()=>{ 
    //Guardo el display de la calculadora y los botones en sus constantes para que me devuelvan un HTMLColection para luego iterar sobre el y asignarles eventos que escuchen cuando se hace un click en alguno
    const display = document.getElementById('display-calculator');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    //Convierto el HTMLCollection en un array y lo guardo en una constante
    const keypadButtonsArray = Array.from(keypadButtons);
    
    //Itero sobre el array y por cada boton que me recupera le asigno una escucha de evento click
    keypadButtonsArray.forEach(button => {
        button.addEventListener('click', () => {            
            calculadora(button, display); //Llama a la funcion calculadora() que es la que se encarga de realizar la funcion que se pide
        })
    });

    function calculadora(button, display){
        switch (button.innerHTML) {
            case 'DEL':
                borrar(display)
                break;
            case 'RESET':
                borrar(display)
                break;
            case '=':
                calcular(display)
                break;
            default:
                actualizar(display, button)
                break;
        }
    }

    
    
    function actualizar(display, button){
        if (display.innerHTML == 0) {
            display.innerHTML = '';
        }
        display.innerHTML = display.innerHTML + button.innerHTML       
    }
    
    function calcular(display){
        display.innerHTML = eval(display.innerHTML)
    }
    function borrar(display){
        display.innerHTML = '';
    }
   

    

    
})

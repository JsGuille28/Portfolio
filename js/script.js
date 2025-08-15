var click = 0;

function responsiveMenu(){
    var botonMenu = document.getElementById("barra-navegacion");
    if(botonMenu.className===""){
        botonMenu.className= "responsive";
    }
    else{
        botonMenu.className ="";
    }
}

function elenentosMenu(){
    var elementosMenu = document.querySelectorAll('#links a');
    elementosMenu[0].className = "";
    elementosMenu[1].className = "";
    elementosMenu[2].className = "";
    elementosMenu[3].className = "";
    elementosMenu[4].className = "";
    elementosMenu[5].className = "";
}
//Aplicar color al seleccionar un elemento del menú
function seleccionMenu(link){
    elenentosMenu()
    link.className = "seleccionado";


    var desaparecerEstilo = document.getElementById("barra-navegacion");
    desaparecerEstilo.className = "";

}

function moverFoto(){
    //limpiarAnimacionFoto();
   // document.getElementById('mifoto').className = 'mifoto-entrar foto-contenedor mifoto';
    var i=0;
    var foto = document.getElementById("mifoto");
    var elementClassName = foto.className;
    foto.setAttribute("class", "mifoto");
    
    if(elementClassName ==="mifoto"){
        foto.className = "mifoto-entrar";        

    }else{
        botonMenu.className ="mifoto";
        
    }
    
}

//Calculando el scroll de la página para aplicar automáticamente las animaciones
window.onscroll = function(){
    efectoHabilidades();
};

//Animación para las barras de habilidades

function efectoHabilidades(){
    var mifoto = document.getElementById("sobremi");
    var mifotoDistancia = window.innerHeight - mifoto.getBoundingClientRect().top;
    var misHabilidades = document.getElementById("habilidades");
    var distancia_misHabilidades = window.innerHeight - misHabilidades.getBoundingClientRect().top;
    console.log(distancia_misHabilidades);
    if (distancia_misHabilidades >= 200){
        document.getElementById('html').classList.add("barra-progreso1");
        document.getElementById('office').classList.add("barra-progreso2");
        document.getElementById('base-datos').classList.add("barra-progreso3");
        document.getElementById('python').classList.add("barra-progreso4");
        document.getElementById('js').classList.add("barra-progreso5");
        document.getElementById('ingles').classList.add("barra-progreso6");

    }else{
        limpiarAnimacion();
       
    }

    if (mifotoDistancia>= 100){
        document.getElementById('mifoto').classList.add("mifoto-entrar");
        

    }
    else{
        limpiarAnimacion();
    }

}   


function limpiarAnimacion() {
    document.getElementById('html').className="";
    document.getElementById('office').className="";
    document.getElementById('base-datos').className="";
    document.getElementById('python').className="";
    document.getElementById('js').className="";
    document.getElementById('ingles').className="";
    document.getElementById('mifoto').className="";
    
}

window.onload = () => { 
    //const titulo = document.getElementById("titulos")
    const laboral = document.getElementById("masExp")
    const laboral2 = document.getElementById("masExp2")
    //document.getElementById("btnTitulos").addEventListener("click", btnTitulo)
    document.getElementById("btnLaboral").addEventListener("click", btnLaboral)

    

    function btnTitulo() {
        // acá se hace un IF común, clásico

        // if (titulo.style.display == 'none') {
        //     titulo.style.display = 'block'
        // }else{
        //     titulo.style.display = 'none'
        // }
    }
    
    // esto se coloca, para que no haga la carga de la función cuando presione en el botón, con esto, la carga de la función ya está realizada
    // btnTitulo();

    function btnLaboral() {
        // este es un IF es resumido, con menos lineas de código, pero es exactamente lo mismo

        laboral.style.display == 'none' ? laboral.style.display = 'block' : laboral.style.display ='none';
        laboral2.style.display == 'none' ? laboral2.style.display = 'block' : laboral2.style.display ='none';
    }

    btnLaboral();
}
   



   






window.onload = () => { 
    const titulo = document.getElementById("titulos")
    const laboral = document.getElementById("laboral")
    
    document.getElementById("btnTitulos").addEventListener("click", btnTitulo)
    document.getElementById("btnLaboral").addEventListener("click", btnLaboral)

    

    function btnTitulo() {
        // acá se hace un IF común, clásico

        if (titulo.style.display == 'none') {
            titulo.style.display = 'block'
        }else{
            titulo.style.display = 'none'
        }
    }

    btnTitulo();

    function btnLaboral() {
        // este es un IF es resumido, con menos lineas de código, pero es exactamente lo mismo

        laboral.style.display == 'none' ? laboral.style.display = 'block' : laboral.style.display ='none';
    }

    btnLaboral();
}
   



   





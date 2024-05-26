document.getElementById('toggle-nav').addEventListener('click', function(event){
    let navega =document.getElementById('navegacion');
    if (navega.style.display === 'block') {
        navega.style.display = 'none';
    }else{
        navega.style.display = 'block';
    }
    event.preventDefault();// prevenir el comportamiento preterminado del enlace//
});
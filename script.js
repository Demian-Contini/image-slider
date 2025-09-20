// Funcionamiento del Carrusel
// "next y prev" : Seleccionamos los botones
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

//               -------- NEXT -----------
// Le agregamos un evento "click" al boton next
next.addEventListener('click', function(){ // Se ejecuta al darle click
    let items = document.querySelectorAll('.item') // Llamamos a todos los elementos con clase ('.item')
    document.querySelector('.slide').appendChild(items[0]) // Movemos el primer elemento al final del slide
})

//               -------- PREV -----------
// Le agregamos un evento "click" al boton prev
prev.addEventListener('click', function(){ // Al darle click
    let items = document.querySelectorAll('.item') // Llamada a ('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 

    // ".prepend(items[items.length - 1])" Este apartado hace que el ultimo elemento del slide, dentro de clase (".item") se coloque al principio del mismo

//      Resumen:
//              items.length - 1 → selecciona el último elemento de la lista .item.
//              .prepend(...) → lo inserta al principio dentro del contenedor .slide.
})
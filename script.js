// Datos de productos adicionales
const productosAdicionales = [
    {
        nombre: 'Labial Bardot',
        precio: '$8.500 c/u',
        imagen: 'storage/ImagenLabios.jpeg',
    },
    {
        nombre: 'Polvos Raquel',
        descripcion: 'Minerals',
        precio: '$20.000 c/u',
        imagen: 'storage/ImagenPolvos.jpeg',
    },
    {
        nombre: 'Sombra Camel',
        descripcion: 'Vogue',
        precio: '$9.500 c/u',
        imagen: 'storage/ImagenCejas.jpeg',
    },
    {
        nombre: 'Delineador 36h',
        precio: '$15.800 c/u',
        imagen: 'storage/ImagenOjos.jpeg',
    },
    {
        nombre: 'Tratamiento',
        descripcion: 'Repolarizante en frio',
        precio: '$18.000 c/u',
        imagen: 'storage/ImagenTratamiento.jpeg',
    },
    {
        nombre: 'Tinte Lissia',
        descripcion: 'Vogue',
        precio: '$12.500 c/u',
        imagen: 'storage/ImagenTinte.jpeg',
    }
];

const productosContainer = document.getElementById('productos-container');
const botonMostrar = document.getElementById('mostrar-productos');

let productosMostrados = false;
let productosDivs = [];

function mostrarProductos() {
    if (!productosMostrados) {
        // Mostrar productos
        productosAdicionales.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'caja1__pagina3';
            productoDiv.innerHTML = `
                <div class="imagenProducto">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="texto__pagina3">
                    <p>${producto.nombre}</p>
                    <p>${producto.descripcion}</p>
                    <p id="valor__pagina3">${producto.precio}</p>
                </div>
            `;
            productosContainer.appendChild(productoDiv);
            productosDivs.push(productoDiv);
        });
        
        botonMostrar.textContent = 'Mostrar menos productos';
        productosMostrados = true;
    } else {
        // Ocultar productos
        productosDivs.forEach(div => div.remove());
        productosDivs = [];
        
        botonMostrar.textContent = 'Ver todos los productos';
        productosMostrados = false;
    }
}

// Evento de clic para el botón
botonMostrar.addEventListener('click', mostrarProductos);
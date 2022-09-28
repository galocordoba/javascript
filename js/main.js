const stock = [
  {
    id: 1,
    nombre: "MUSCULOSA PROJET ROCK UNDER ARMOUR",
    img: "./imgs/musculosa.jpg",
    precio: 9999,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "REMERA BIG AROUND RUSTY",
    img: "./imgs/roket-over.jpg",
    precio: 7489,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "REMERA SIGNATURE KETTLEBELL UNDER ARMOUR",
    img: "./imgs/over-naranja.jpg",
    precio: 9999,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "REMERA AEROREADY DESIGNED TO MOVE SPORT ADIDAS",
    img: "./imgs/adidas-rayas.jpg",
    precio: 8499,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "CAMISETA LIVERPOOL FC NIKE",
    img: "./imgs/liverpool.jpg",
    precio: 16999,
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "CAMISETA REAL MADRID ADIDAS",
    img: "./imgs/real-madrid.jpg",
    precio: 16999,
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "CANGURO FERRARI RACE PUMA",
    img: "./imgs/hoodi-ferrari.jpg",
    precio: 24895,
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "BUZO ESSENTIAL BIG LOGO PUM",
    img: "./imgs/hoodi-puma.jpg",
    precio: 13999,
    cantidad: 1,
  },
];

const carrito = [];

function mostrarProductos() {
  const shop = document.getElementById("shop");

  stock.forEach((p) => {
    let producto = document.createElement("div");
    producto.classList.add("col");
    producto.classList.add("d-flex");
    producto.classList.add("justify-content-center");
    producto.classList.add("mb-4");
    producto.classList.add("carta");

    producto.innerHTML = `
            <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>$${p.precio}</p>
                <button class="btn btn-primary boton" id="${p.id}">Añadir al carrito</button>
            </div>
            </div>`;

    shop.appendChild(producto);

    producto.querySelector("button").addEventListener("click", () => {
      agregarProductos(p.id);
    });
  });
}

mostrarProductos();

function agregarProductos(id) {
  let producto = stock.find((p) => p.id === id);

  let productoEnCarrito = carrito.find((p) => p.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;

    console.log(carrito);
  } else {
    producto.cantidad = 1;

    carrito.push(producto);

    console.log(carrito);
  }

  const alert = document.querySelector(".alert");
  setTimeout(function () {
    alert.classList.add("hide");
  }, 2000);
  alert.classList.remove("hide");

  mostrarCarrito();
  totalFinal();
}

function mostrarCarrito() {
  let carritoHTML = document.querySelector("#carrito");

  carritoHTML.innerHTML = "";

  carrito.forEach((p, id) => {
    let producto = document.createElement("div");
    producto.classList.add("col-12");
    producto.classList.add("col-md-4");
    producto.classList.add("mb-5");
    producto.classList.add("d-flex");
    producto.classList.add("justify-content-center");

    producto.innerHTML = `
        
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>$${p.precio}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger boton">Eliminar</button>
            </div>
        </div>`;

    producto.querySelector("button").addEventListener("click", () => {
      eliminarProducto(id);
    });

    carritoHTML.appendChild(producto);
  });
}

function eliminarProducto(id) {
  carrito[id].cantidad--;

  if (carrito[id].cantidad === 0) {
    carrito.splice(id, 1);
  }

  mostrarCarrito();
  totalFinal();
}

function totalFinal() {
  let total = 0;
  carrito.forEach((p) => {
    total += p.precio * p.cantidad;
  });

  const totall = document.getElementById("total");

  totall.innerHTML = `<h5>$ ${total}</h5> `;
}

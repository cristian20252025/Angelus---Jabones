// Base de datos local de Angelus Jabones Artesanales adaptada a Pesos Colombianos (COP)
const productosJabones = [
  {
    id: 1,
    title: "Combo 3 jabones de Calendula (Flor, Mariposa, Rosa)",
    price: 12500,
    category: "Calendula",
    image: "img/combo 3 jabones de calendula.jpeg",
    description: "Hermoso set tallado con formas naturales. Ideal para calmar pieles delicadas gracias a sus extractos botánicos naturales."
  },
  {
    id: 2,
    title: "Jabon de Calendula (Corazon)",
    price: 5000,
    category: "Calendula",
    image: "img/jabon de calendula (Corazon).jpeg",
    description: "Corte cilíndrico enriquecido con partículas de hierbas aromáticas que remueven impurezas de manera suave y profunda."
  },
  {
    id: 3,
    title: "Jabón de Calendula (Flor Margarita)",
    price: 10000,
    category: "Calendula",
    image: "img/jabon de calendula (Flor Margarita).jpeg",
    description: "Cinco jabones artesanales en forma de corazón con relieve texturizado. Perfectos para regalar o para consentir tu piel diariamente."
  },
  {
    id: 4,
    title: "Jabón de Calendula ( Mariposa)",
    price: 8000,
    category: "Calendula",
    image: "img/jabon de calendula (Mariposa).jpeg",
    description: "Divertido y tierno jabón en forma de huella de mascota. Elaborado con ingredientes hipoalergénicos extremadamente suaves."
  },
  {
    id: 5,
    title: "Jabón de Calendula (Rosa)",
    price: 8000,
    category: "Calendula",
    image: "img/jabon de calendula (Rosa).jpeg",
    description: "Detallada mariposa enriquecida con café orgánico y arcillas. Activa la circulación corporal aportando firmeza."
  },
  {
    id: 6,
    title: "Jabon de Arroz (Hawayana)",
    price: 8000,
    category: "Arroz",
    image: "img/jabon de arroz ( Hawayana).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 7,
    title: "Jabón de Arroz (Flor Elice)",
    price: 10000,
    category: "Arroz",
    image: "img/jabon de arroz (Flor Elice).jpeg",
    description: "Hermoso set tallado con formas naturales. Ideal para calmar pieles delicadas gracias a sus extractos botánicos naturales."
  },
  {
    id: 8,
    title: "Jabón de Arroz (Flor Margarita)",
    price: 10000,
    category: "Arroz",
    image: "img/jabon de arroz (Flor Margarita).jpeg",
    description: "Corte cilíndrico enriquecido con partículas de hierbas aromáticas que remueven impurezas de manera suave y profunda."
  },
  {
    id: 9,
    title: "Jabón de Arroz (Gelatina Estrella)",
    price: 10000,
    category: "Arroz",
    image: "img/jabon de arroz (Gelatina Estrella).jpeg",
    description: "Cinco jabones artesanales en forma de corazón con relieve texturizado. Perfectos para regalar o para consentir tu piel diariamente."
  },
  {
    id: 10,
    title: "Jabón de Arroz (Mariposa)",
    price: 8000,
    category: "Arroz",
    image: "img/jabon de arroz (Mariposa).jpeg",
    description: "Divertido y tierno jabón en forma de huella de mascota. Elaborado con ingredientes hipoalergénicos extremadamente suaves."
  },
  {
    id: 11,
    title: "Jabón de Arroz (Mico)",
    price: 8000,
    category: "Arroz",
    image: "img/jabon de arroz (Mico).jpeg",
    description: "Detallada mariposa enriquecida con café orgánico y arcillas. Activa la circulación corporal aportando firmeza."
  },
  {
    id: 12,
    title: "Jabón de Arroz (Pato)",
    price: 6000,
    category: "Arroz",
    image: "img/jabon de arroz (Pato).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 13,
    title: "Jabón de Arroz (Rosa)",
    price: 8000,
    category: "Arroz",
    image: "img/jabon de arroz (Rosa).jpeg",
    description: "Hermoso set tallado con formas naturales. Ideal para calmar pieles delicadas gracias a sus extractos botánicos naturales."
  },
  {
    id: 14,
    title: "Jabón de Arroz (Tortuga)",
    price: 6000,
    category: "Arroz",
    image: "img/jabon de arroz (Tortuga).jpeg",
    description: "Corte cilíndrico enriquecido con partículas de hierbas aromáticas que remueven impurezas de manera suave y profunda."
  },
  {
    id: 15,
    title: "Jabón de Curcuma (Doble Flor)",
    price: 10000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Doble Flor).jpeg",
    description: "Cinco jabones artesanales en forma de corazón con relieve texturizado. Perfectos para regalar o para consentir tu piel diariamente."
  },
  {
    id: 16,
    title: "Jabón de Curcuma (Flor Margarita)",
    price: 10000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Flor Margarita).jpeg",
    description: "Divertido y tierno jabón en forma de huella de mascota. Elaborado con ingredientes hipoalergénicos extremadamente suaves."
  },
  {
    id: 17,
    title: "Jabón de Curcuma (Gelatina Estrella)",
    price: 10000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Gelatina Estrella).jpeg",
    description: "Detallada mariposa enriquecida con café orgánico y arcillas. Activa la circulación corporal aportando firmeza."
  },
  {
    id: 18,
    title: "Jabón de Curcuma (Gelatina)",
    price: 10000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Gelatina).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 19,
    title: "Jabón de Curcuma (Hawayana)",
    price: 8000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Hawayana).jpeg",
    description: "Detallada mariposa enriquecida con café orgánico y arcillas. Activa la circulación corporal aportando firmeza."
  },
  {
    id: 20,
    title: "Jabón de Curcuma (Rosa)",
    price: 8000,
    category: "Curcuma",
    image: "img/jabon de curcuma (Rosa).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 21,
    title: "Jabón (Racimo de Uvas)",
    price: 25000,
    category: "Racimo de Uvas",
    image: "img/Jabon Racimos de Uvas.jpeg",
    description: "Detallada mariposa enriquecida con café orgánico y arcillas. Activa la circulación corporal aportando firmeza."
  },
  {
    id: 22,
    title: "Jabón (Dinosaurio)",
    price: 12000,
    category: "Dinosaurios",
    image: "img/Jabon (Dinosaurio).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 23,
    title: "Jabon de savila (Masajeador)",
    price: 12000,
    category: "Citricos",
    image: "img/Jabon (Masajeador).jpeg",
    description: "Detallada mariposa enriquecida con café orgánico y arcillas. Activa la circulación corporal aportando firmeza."
  },
  {
    id: 24,
    title: "Jabón (Bebe)",
    price: 10000,
    category: "Talco de Bebe",
    image: "img/Jabon (Bebe).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 25,
    title: "Jabón (Colmena) ",
    price: 10000,
    category: "Línea Premium",
    image: "",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 26,
    title: "Jabón (Corazon)",
    price: 5000,
    category: "Calendula",
    image: "img/corazon.jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 27,
    title: "Jabón de Chocolate (Circular)",
    price: 10000,
    category: "Chocolate",
    image: "img/Jabon de Chocolate (Circular).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 28,
    title: "Jabón de Miel (Colmena)",
    price: 10000,
    category: "Miel",
    image: "img/Jabon de Miel (Colmena).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  },
  {
    id: 29,
    title: "Jabón de Miel y Avena (Colmena)",
    price: 5000,
    category: "Miel y Avena",
    image: "img/Jabon de Miel y Avena (Colmena).jpeg",
    description: "Set premium de 6 jabones surtidos (rosas, girasoles, espirales). Máxima hidratación con tonalidades terracotas naturales."
  }
];

let products = [...productosJabones];
let cart = {};
let comprasHistorial = [];

const $ = id => document.getElementById(id);

// Función auxiliar para dar formato de moneda COP
function formatCOP(value) {
  return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
}

// Guardar y cargar Carrito
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
function loadCart() {
  cart = JSON.parse(localStorage.getItem('cart')) || {};
  updateCartUI();
}

// Guardar y cargar Historial de Ventas
function saveHistorial() { localStorage.setItem('historial_compras', JSON.stringify(comprasHistorial)); }
function loadHistorial() {
  comprasHistorial = JSON.parse(localStorage.getItem('historial_compras')) || [];
  renderHistorialUI();
}

function updateCartUI() {
  const itemsContainer = $('cart-items');
  itemsContainer.innerHTML = '';
  let total = 0, count = 0;

  for (let id in cart) {
    const p = cart[id];
    total += p.price * p.qty;
    count += p.qty;

    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${p.title}</strong><br>
      ${formatCOP(p.price)} x ${p.qty} = ${formatCOP(p.price * p.qty)}
      <div style="margin-top: 8px;">
        <button onclick="changeQty(${id}, -1)">➖</button>
        <span style="margin: 0 8px; font-weight:bold;"> ${p.qty} </span>
        <button onclick="changeQty(${id}, 1)">➕</button>
        <button onclick="removeFromCart(${id})" style="background:#ff4d4d; margin-left:10px;">🗑️</button>
      </div>
    `;
    itemsContainer.appendChild(li);
  }

  $('cart-total').textContent = total.toLocaleString('es-CO', { minimumFractionDigits: 0 });
  $('cart-count').textContent = count;
}

function setupHistorialToggle() {
  $('historial').addEventListener('click', () => {
    $('historial-container').classList.toggle('hidden');
  });
}

function renderHistorialUI() {
  const lista = $('historial-lista');
  if (comprasHistorial.length === 0) {
    lista.innerHTML = "No has realizado ninguna compra todavía.";
    return;
  }

  lista.innerHTML = comprasHistorial.map((compra, index) => `
    <div class="ticket-compra">
      <strong>ID Compra: #00${index + 1}</strong> — 📅 ${compra.fecha}<br>
      <ul style="margin: 5px 0; padding-left: 20px;">
        ${compra.items.map(i => `<li>${i.title} (x${i.qty}) - ${formatCOP(i.price * i.qty)}</li>`).join('')}
      </ul>
      <strong>Total Abonado: ${compra.totalFormatted}</strong>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  saveCart();
  updateCartUI();
}

function addToCart(id) {
  const p = products.find(p => p.id === id);
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { ...p, qty: 1 };
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  updateCartUI();
}

function renderProducts(list) {
  const container = $('product-list');
  container.innerHTML = '';
  
  if(list.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px; font-size:1.2rem;">No se encontraron jabones con esos criterios.</p>`;
    return;
  }

  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p><small style="background:#eedeb0; padding:4px 10px; border-radius:10px; color:#554315; font-weight:600;">${p.category}</small></p>
      <div class="price">${formatCOP(p.price)}</div>
      <button onclick="addToCart(${p.id})">🛒 Agregar al Carrito</button>
    `;
    container.appendChild(div);
  });
}

function setupFilters() {
  // Limpiar antes de rellenar las categorías para evitar duplicaciones
  $('filter-category').innerHTML = '<option value="">Todas las variedades</option>';
  const categories = [...new Set(productosJabones.map(p => p.category))];
  categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c;
    $('filter-category').appendChild(opt);
  });

  $('search').addEventListener('input', applyFilters);
  $('filter-category').addEventListener('change', applyFilters);
  $('sort').addEventListener('change', applyFilters);
}

function applyFilters() {
  let list = [...productosJabones];
  const search = $('search').value.toLowerCase();
  const cat = $('filter-category').value;
  const sort = $('sort').value;

  if (search) {
    list = list.filter(p =>
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search)
    );
  }

  if (cat) {
    list = list.filter(p => p.category === cat);
  }

  if (sort) {
    const [field, dir] = sort.split('-');
    list.sort((a, b) => dir === 'asc' ? a[field] - b[field] : b[field] - a[field]);
  }

  products = list;
  renderProducts(list);
}

function setupCartToggle() {
  $('cart-btn').addEventListener('click', () => {
    $('cart').classList.toggle('hidden');
  });

  $('close-cart').addEventListener('click', () => {
    $('cart').classList.add('hidden');
  });
}

function setupBuyNow() {
  $('buy-now-cart').addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    let total = 0;
    let itemsComprados = [];

    for (let id in cart) {
      const p = cart[id];
      total += p.price * p.qty;
      itemsComprados.push({ title: p.title, qty: p.qty, price: p.price });
    }

    const totalFormatted = formatCOP(total);

    // Registrar en el historial local
    const nuevaCompra = {
      fecha: new Date().toLocaleString(),
      items: itemsComprados,
      total: total,
      totalFormatted: totalFormatted
    };

    comprasHistorial.unshift(nuevaCompra); // Añadir al inicio del historial
    saveHistorial();
    renderHistorialUI();

    alert(`¡Gracias por tu compra en Angelus!\nTotal: ${totalFormatted}\ Tu pedido ha sido registrado con éxito.`);

    // Limpiar carrito
    cart = {};
    saveCart();
    updateCartUI();
    $('cart').classList.add('hidden');
  });
}

function init() {
  setupCartToggle();
  setupHistorialToggle();
  loadCart();
  loadHistorial();
  renderProducts(products);
  setupFilters();
  setupBuyNow();
}

// Vinculación global para los onclick inline del HTML dinámico
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;

init();
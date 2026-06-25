const products = [
  {
    id: "tbs-vol1",
    name: "T-Shirt Threeboys VOL1",
    category: "tops",
    price: 155000,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/IMG_5910.JPEG", "assets/IMG_5911.JPEG", "assets/size hoodie.jpeg"],
    description:
      "Kaos premium berbahan Cotton Combed 20s dengan potongan boxy fit yang memberikan siluet modern, nyaman, dan cocok untuk penggunaan sehari-hari. Dilengkapi dengan teknik sablon plastisol raster berkualitas tinggi yang menghasilkan detail grafis tajam, tahan lama, dan tidak mudah pudar. Diproduksi dalam jumlah terbatas untuk menjaga eksklusivitas setiap koleksi.",
    details: [
      "Cotton Combed 20s",
      "Potongan Boxy Fit",
      "Sablon Plastisol Raster",
      "Nyaman Digunakan Sehari-hari",
      "Limited Edition Release",
    ],
    soldOut: true,
  },
  {
    id: "tbs-vol2",
    name: "Zhiper Threeboys VOL2",
    category: "outerwear",
    price: 350000,
    color: "Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["assets/IMG_5908.JPEG", "assets/IMG_5909.JPEG", "assets/size tshirt.jpeg"],
    description:
      "Zipper Hoodie premium dengan potongan boxy fit yang dirancang untuk memberikan tampilan modern sekaligus kenyamanan maksimal. Menggunakan bahan Cotton Fleece 330 GSM yang tebal, lembut, dan nyaman digunakan untuk aktivitas sehari-hari. Dilengkapi dengan ritsleting YKK berkualitas tinggi yang kuat dan tahan lama, serta detail sablon puff ink yang menghasilkan efek timbul sehingga memberikan karakter visual yang lebih unik dan eksklusif. Diproduksi dalam jumlah terbatas sebagai bagian dari koleksi eksklusif Threeboys Official.",
    details: [
      "Cotton Fleece 330 GSM",
      "Potongan Boxy Fit",
      "Ritsleting YKK Premium",
      "Sablon Puff Ink (Efek Timbul)",
      "Nyaman dan Tahan Lama",
      "Limited Edition Release",
    ],
    soldOut: true,
  },
  {
    id: "tbs-vol3",
    name: "T-Shirt Threeboys VOL3",
    category: "tops",
    price: null,
    color: "Black",
    sizes: [],
    images: ["assets/IMG_5912.JPEG", "assets/IMG_5913.JPEG"],
    description:
      "Koleksi terbaru Threeboys Official dengan desain logo statement. Tersedia segera dalam jumlah terbatas dan sudah dapat dipesan melalui sistem pre-order.",
    details: [],
    comingSoon: true,
  },
  {
    id: "tbs-vol3-white",
    name: "T-Shirt Threeboys VOL3",
    category: "tops",
    price: null,
    color: "White",
    sizes: [],
    images: ["assets/IMG_5914.JPEG", "assets/IMG_5915.JPEG"],
    description:
      "Koleksi terbaru Threeboys Official dalam varian white dengan desain logo TBS statement. Tersedia segera dalam jumlah terbatas dan sudah dapat dipesan melalui sistem pre-order.",
    details: [],
    comingSoon: true,
  },
  {
    id: "tbs-vol3-black-small-logo",
    name: "T-Shirt Threeboys VOL3",
    category: "tops",
    price: null,
    color: "Tee Black Small Logo",
    sizes: [],
    images: ["assets/IMG_5916.JPEG", "assets/IMG_5917.JPEG"],
    description:
      "Koleksi terbaru Threeboys Official dalam varian tee black dengan detail small logo. Tersedia segera dalam jumlah terbatas dan sudah dapat dipesan melalui sistem pre-order.",
    details: [],
    comingSoon: true,
  },
  {
    id: "tbs-vol3-white-red-logo",
    name: "T-Shirt Threeboys VOL3",
    category: "tops",
    price: null,
    color: "Tee White Red Logo",
    sizes: [],
    images: ["assets/IMG_5918.JPEG", "assets/IMG_5919.JPEG"],
    description:
      "Koleksi terbaru Threeboys Official dalam varian tee white dengan detail red logo. Tersedia segera dalam jumlah terbatas dan sudah dapat dipesan melalui sistem pre-order.",
    details: [],
    comingSoon: true,
  },
];

const translations = {
  id: {
    navAbout: "Tentang Kami",
    navShop: "Belanja",
    navLookbook: "Look Book",
    accountBtn: "Akun",
    aboutCopyOne:
      "Threeboys Official is an independent streetwear brand based in Tangerang, Indonesia, established in 2024. Inspired by youth culture, campus life, and the local creative scene, we create apparel that blends comfort, style, and self-expression into everyday wear.",
    aboutCopyTwo:
      "Every collection is released in limited quantities, making each piece more exclusive and meaningful for those who wear it. We believe clothing is more than just fashion—it is a way to express identity, confidence, and belonging.",
    aboutCopyThree:
      "Through distinctive graphics, carefully crafted designs, and a growing community, Threeboys Official continues to build a space for individuals who appreciate authentic streetwear and want to stand out while staying comfortable and stylish.",
    shopLabel: "Belanja",
    shopTitle: "Koleksi terbaru",
    filterAll: "Semua",
    filterTops: "Atasan",
    filterOuter: "Outerwear",
    footerCopy: "Nyaman dipakai dan tetap stylish. Rilisan baru dikirim dari Indonesia.",
    cartTitle: "Keranjang",
    subtotal: "Subtotal",
    checkout: "Checkout",
    accountLabel: "Akun",
    accountTitle: "Buat akun belanja kamu",
    nameLabel: "Nama",
    passwordLabel: "Password",
    createAccount: "Buat akun",
    accountNote: "Data akun disimpan lokal untuk demo ini.",
    addCart: "Tambah ke keranjang",
    emptyCart: "Keranjang masih kosong",
    added: "Produk ditambahkan ke keranjang",
    checkoutEmpty: "Keranjang masih kosong",
    checkoutReady: "Demo checkout siap. Total belanja kamu",
    accountSaved: "Akun demo berhasil dibuat",
  },
  en: {
    navAbout: "About Us",
    navShop: "Shop",
    navLookbook: "Look Book",
    accountBtn: "Account",
    aboutCopyOne:
      "Threeboys Official is an independent streetwear brand based in Tangerang, Indonesia, established in 2024. Inspired by youth culture, campus life, and the local creative scene, we create apparel that blends comfort, style, and self-expression into everyday wear.",
    aboutCopyTwo:
      "Every collection is released in limited quantities, making each piece more exclusive and meaningful for those who wear it. We believe clothing is more than just fashion—it is a way to express identity, confidence, and belonging.",
    aboutCopyThree:
      "Through distinctive graphics, carefully crafted designs, and a growing community, Threeboys Official continues to build a space for individuals who appreciate authentic streetwear and want to stand out while staying comfortable and stylish.",
    shopLabel: "Shop",
    shopTitle: "New arrivals",
    filterAll: "All",
    filterTops: "Tops",
    filterOuter: "Outerwear",
    footerCopy: "Wear comfortably and stylishly. New drop ships from Indonesia.",
    cartTitle: "Your cart",
    subtotal: "Subtotal",
    checkout: "Checkout",
    accountLabel: "Account",
    accountTitle: "Create your shopping account",
    nameLabel: "Name",
    passwordLabel: "Password",
    createAccount: "Create account",
    accountNote: "Account data is saved locally in this demo.",
    addCart: "Add to cart",
    emptyCart: "Your cart is empty",
    added: "Product added to cart",
    checkoutEmpty: "Your cart is empty",
    checkoutReady: "Demo checkout is ready. Your total is",
    accountSaved: "Demo account created",
  },
};

const state = {
  language: localStorage.getItem("tbs-language") || "id",
  cart: JSON.parse(localStorage.getItem("tbs-cart") || "[]"),
  filter: "all",
  productImages: {},
};

const productGrid = document.querySelector("#productGrid");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const toast = document.querySelector("#toast");
const productDetailContent = document.querySelector("#productDetailContent");

const formatRupiah = (amount) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function saveCart() {
  localStorage.setItem("tbs-cart", JSON.stringify(state.cart));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function renderProducts() {
  const visibleProducts =
    state.filter === "all"
      ? products
      : products.filter((product) => product.category === state.filter);

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const catalogStatus = product.comingSoon ? "Coming Soon" : "Sold Out";
      const catalogPrice = product.price ? `<span class="product-card-price">${formatRupiah(product.price)}</span>` : "";

      return `
        <article class="product-card">
          <button class="product-card-button" type="button" data-product-open="${product.id}">
            <span class="product-card-image">
              <img src="${product.images[0]}" alt="${product.name} ${product.color}" />
            </span>
            <span class="product-card-summary">
              <span class="product-card-copy">
                <span class="product-card-name">${product.name}</span>
                ${catalogPrice}
              </span>
              <strong>${catalogStatus}</strong>
            </span>
          </button>
        </article>
      `;
    })
    .join("");
}

function renderProductDetail(id) {
  const product = products.find((entry) => entry.id === id);
  if (!product) return;

  const imageIndex = state.productImages[product.id] || 0;
  const detailItems = (product.details || []).map((detail) => `<li>${detail}</li>`).join("");
  const statusLabel = product.comingSoon ? "Coming Soon" : "Sold Out";
  const statusClass = product.comingSoon ? "coming-soon-badge" : "";
  const productPrice = product.price ? `<span class="product-detail-price">${formatRupiah(product.price)}</span>` : "";
  const whatsappMessage = encodeURIComponent(
    `Halo Threeboys Official, saya ingin ${
      product.comingSoon ? "melakukan pre-order" : "bertanya"
    } tentang ${product.name} ${product.color}.`
  );

  productDetailContent.innerHTML = `
    <div class="product-modal-layout">
      <div class="product-gallery">
        <button
          class="product-gallery-image"
          type="button"
          data-gallery-next="${product.id}"
          aria-label="Tampilkan foto produk berikutnya"
        >
          <img
            src="${product.images[imageIndex]}"
            alt="${product.name}, foto ${imageIndex + 1} dari ${product.images.length}"
          />
        </button>
        <button class="gallery-arrow gallery-prev" type="button" data-gallery-prev="${product.id}" aria-label="Foto sebelumnya">
          &#8592;
        </button>
        <button class="gallery-arrow gallery-next" type="button" data-gallery-next="${product.id}" aria-label="Foto berikutnya">
          &#8594;
        </button>
        <span class="gallery-count">${imageIndex + 1} / ${product.images.length}</span>
      </div>
      <div class="product-info product-detail">
        <div class="product-title-row">
          <div>
            <h3>${product.name}</h3>
            ${productPrice}
          </div>
          <span class="sold-out-badge ${statusClass}">${statusLabel}</span>
        </div>
        <div class="product-meta">
          <span>${product.color}</span>
        </div>
        <p class="product-description">${product.description}</p>
        ${
          detailItems
            ? `<div>
                <h4>Detail Produk</h4>
                <ul class="product-details">${detailItems}</ul>
              </div>`
            : ""
        }
        ${
          product.sizes.length
            ? `<div class="size-row">
                ${product.sizes.map((size) => `<span class="size-pill">${size}</span>`).join("")}
              </div>`
            : ""
        }
        ${
          product.comingSoon
            ? `<a
                class="primary-btn preorder-btn"
                href="https://wa.me/6285770552872?text=${whatsappMessage}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-Order
              </a>`
            : `<button class="primary-btn sold-out-btn" type="button" disabled>Sold Out</button>
               <a
                 class="outline-btn contact-product"
                 href="https://wa.me/6285770552872?text=${whatsappMessage}"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Contact Person
               </a>`
        }
      </div>
    </div>
  `;
}

function changeProductImage(id, direction) {
  const product = products.find((entry) => entry.id === id);
  if (!product?.images) return;

  const currentIndex = state.productImages[id] || 0;
  state.productImages[id] = (currentIndex + direction + product.images.length) % product.images.length;
  renderProductDetail(id);
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = formatRupiah(totalPrice);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="cart-empty">${t("emptyCart")}</p>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";

      return `
        <article class="cart-item">
          <div class="cart-thumb"></div>
          <div>
            <h3>${product.name}</h3>
            <p>${formatRupiah(product.price)} x ${item.quantity}</p>
          </div>
          <div class="qty-controls" aria-label="Quantity controls">
            <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-increase="${product.id}" aria-label="Increase quantity">+</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function addToCart(id) {
  const item = state.cart.find((entry) => entry.id === id);
  if (item) {
    item.quantity += 1;
  } else {
    state.cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  openLayer("cartDrawer");
  showToast(t("added"));
}

function updateQuantity(id, change) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== id);
  }

  saveCart();
  renderCart();
}

function openLayer(id) {
  const layer = document.querySelector(`#${id}`);
  layer.classList.add("open");
  layer.setAttribute("aria-hidden", "false");
}

function closeLayer(id) {
  const layer = document.querySelector(`#${id}`);
  layer.classList.remove("open");
  layer.setAttribute("aria-hidden", "true");
}

function updateHeaderHeight() {
  const header = document.querySelector(".site-header");
  document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
}

function showView(viewName, updateHash = true) {
  const requestedView = document.querySelector(`[data-view="${viewName}"]`) ? viewName : "home";
  const targetView = document.querySelector(`[data-view="${requestedView}"]`);

  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("active", view === targetView);
  });

  document.querySelectorAll("[data-view-link]").forEach((link) => {
    const isActive = link.dataset.viewLink === requestedView;
    link.classList.toggle("active", isActive);
    if (link.closest(".main-nav")) {
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  });

  document.body.classList.toggle("view-home", requestedView === "home");
  document.querySelector(".footer").hidden = requestedView === "home";
  window.scrollTo(0, 0);

  if (updateHash) {
    history.replaceState(null, "", `#${requestedView}`);
  }
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.querySelector("#languageToggle").textContent = state.language.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  localStorage.setItem("tbs-language", state.language);
  renderProducts();
  renderCart();
}

document.addEventListener("click", (event) => {
  const viewLink = event.target.closest("[data-view-link]");
  if (viewLink) {
    event.preventDefault();
    showView(viewLink.dataset.viewLink);
  }

  const productButton = event.target.closest("[data-product-open]");
  if (productButton) {
    renderProductDetail(productButton.dataset.productOpen);
    openLayer("productModal");
    return;
  }

  const nextGalleryButton = event.target.closest("[data-gallery-next]");
  if (nextGalleryButton) {
    changeProductImage(nextGalleryButton.dataset.galleryNext, 1);
    return;
  }

  const previousGalleryButton = event.target.closest("[data-gallery-prev]");
  if (previousGalleryButton) {
    changeProductImage(previousGalleryButton.dataset.galleryPrev, -1);
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);

  const increaseButton = event.target.closest("[data-increase]");
  if (increaseButton) updateQuantity(increaseButton.dataset.increase, 1);

  const decreaseButton = event.target.closest("[data-decrease]");
  if (decreaseButton) updateQuantity(decreaseButton.dataset.decrease, -1);

  const closeButton = event.target.closest("[data-close]");
  if (closeButton) closeLayer(closeButton.dataset.close);

  if (event.target.classList.contains("drawer")) closeLayer(event.target.id);
  if (event.target.classList.contains("modal")) closeLayer(event.target.id);
});

document.querySelector("#cartOpen").addEventListener("click", () => openLayer("cartDrawer"));
document.querySelector("#accountOpen").addEventListener("click", () => openLayer("accountModal"));

document.querySelector("#languageToggle").addEventListener("click", () => {
  state.language = state.language === "id" ? "en" : "id";
  applyLanguage();
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((entry) => entry.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderProducts();
  });
});

document.querySelector("#checkoutBtn").addEventListener("click", () => {
  const totalPrice = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  if (!state.cart.length) {
    showToast(t("checkoutEmpty"));
    return;
  }

  showToast(`${t("checkoutReady")} ${formatRupiah(totalPrice)}.`);
});

document.querySelector("#accountForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const account = {
    name: formData.get("name"),
    email: formData.get("email"),
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem("tbs-account", JSON.stringify(account));
  document.querySelector("#accountMessage").textContent = `${t("accountSaved")}: ${account.email}`;
  showToast(t("accountSaved"));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  ["cartDrawer", "accountModal", "productModal"].forEach(closeLayer);
});

window.addEventListener("resize", updateHeaderHeight);
window.addEventListener("hashchange", () => {
  showView(window.location.hash.slice(1) || "home", false);
});

updateHeaderHeight();
showView(window.location.hash.slice(1) || "home", false);
applyLanguage();

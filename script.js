const galleries = {
  lumeme: {
    title: "Lumeme",
    label: "Meme token marketplace",
    images: [
      ["assets/archive/lumeme/lumeme_explore.png", "Explore marketplace"],
      ["assets/archive/lumeme/lumeme_mintMeme.png", "Mint a meme token"],
      ["assets/archive/lumeme/lumeme_memeDetails.png", "Token details"],
      ["assets/archive/lumeme/lumeme_memeDetails(2).png", "Meme details"],
      ["assets/archive/lumeme/lumeme_profile.png", "Creator profile"],
      ["assets/archive/lumeme/lumeme_send.png", "Send token flow"],
      ["assets/archive/lumeme/lumeme_menu.png", "Application menu"],
      ["assets/archive/lumeme/lumeme_login.png", "Account access"],
    ],
  },
  lumenswap: {
    title: "Lumenswap",
    label: "Stellar decentralized exchange",
    images: [
      ["assets/archive/lumenswap/lumenswap_.png", "Exchange landing page"],
      ["assets/archive/lumenswap/lumenswap_selectApp.png", "Product selection"],
      ["assets/archive/lumenswap/lumenswap_obm.png", "Order book market"],
    ],
  },
  polyshot: {
    title: "Polyshot",
    label: "Sports prediction market",
    images: [
      ["assets/archive/polyshot/polyshot_home.png", "Live market home"],
      ["assets/archive/polyshot/polyshot_matchDetails.png", "Match market details"],
      ["assets/archive/polyshot/polyshot_profile.png", "Trader profile"],
      ["assets/archive/polyshot/polyshot_settings.png", "Account settings"],
    ],
  },
  salmooni: {
    title: "Salmooni",
    label: "Barber discovery and booking",
    images: [
      ["assets/archive/salmooni/salmooni_home.jpg", "Customer home"],
      ["assets/archive/salmooni/salmooni_shopAbout.jpg", "Shop profile"],
      ["assets/archive/salmooni/salmooni_barberDashboard.jpg", "Barber dashboard"],
      ["assets/archive/salmooni/salmooni.png", "Booking experience"],
      ["assets/archive/salmooni/salmooni.jpg", "Service marketplace"],
    ],
  },
};

const dialog = document.querySelector("[data-dialog]");
const galleryTitle = document.querySelector("[data-gallery-title]");
const galleryImage = document.querySelector("[data-gallery-image]");
const galleryCaption = document.querySelector("[data-gallery-caption]");
const galleryCount = document.querySelector("[data-gallery-count]");
const galleryThumbs = document.querySelector("[data-gallery-thumbs]");
const closeButton = document.querySelector("[data-gallery-close]");
const prevButton = document.querySelector("[data-gallery-prev]");
const nextButton = document.querySelector("[data-gallery-next]");
const progress = document.querySelector(".progress span");
const header = document.querySelector("[data-header]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobilePerformanceProfile = window.matchMedia(
  "(max-width: 720px), (pointer: coarse)",
).matches;

let activeGallery = null;
let activeIndex = 0;
let lastTrigger = null;

function getGalleryCaption(image) {
  return image[1];
}

function updateControlLabels() {
  const isLight = document.documentElement.dataset.theme === "light";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode",
  );
}

function applyTheme(theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content =
    theme === "light" ? "#f3f0e8" : "#090b09";
  if (persist) {
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }
  updateControlLabels();
}

function renderGallery(index) {
  if (!activeGallery) return;

  const total = activeGallery.images.length;
  activeIndex = (index + total) % total;
  const image = activeGallery.images[activeIndex];
  const [source] = image;
  const caption = getGalleryCaption(image);

  galleryImage.src = source;
  galleryImage.alt = `${activeGallery.title} — ${caption}`;
  galleryCaption.textContent = caption;
  galleryCount.textContent =
    `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  galleryThumbs.querySelectorAll(".gallery-thumb").forEach((thumb, thumbIndex) => {
    const isActive = thumbIndex === activeIndex;
    thumb.classList.toggle("is-active", isActive);
    thumb.setAttribute("aria-current", isActive ? "true" : "false");
  });

  galleryThumbs.children[activeIndex]?.scrollIntoView({
    behavior: reducedMotion.matches ? "auto" : "smooth",
    block: "nearest",
    inline: "center",
  });
}

function openGallery(key, trigger) {
  activeGallery = galleries[key];
  if (!activeGallery) return;

  lastTrigger = trigger;
  activeIndex = 0;
  galleryTitle.textContent = activeGallery.title;
  galleryThumbs.replaceChildren();

  activeGallery.images.forEach((galleryItem, index) => {
    const [source] = galleryItem;
    const caption = getGalleryCaption(galleryItem);
    const button = document.createElement("button");
    const image = document.createElement("img");
    button.className = "gallery-thumb";
    button.type = "button";
    button.setAttribute("aria-label", `Show ${caption}`);
    image.src = source;
    image.alt = "";
    image.loading = "lazy";
    button.append(image);
    button.addEventListener("click", () => renderGallery(index));
    galleryThumbs.append(button);
  });

  renderGallery(0);
  document.body.classList.add("modal-open");
  dialog.showModal();
  closeButton.focus();
}

function closeGallery() {
  dialog.close();
  document.body.classList.remove("modal-open");
  lastTrigger?.focus();
}

themeToggle.addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "light" ? "dark" : "light",
  );
});

applyTheme(document.documentElement.dataset.theme || "light", false);

try {
  localStorage.removeItem("language");
} catch {}

document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => openGallery(button.dataset.gallery, button));
});

closeButton.addEventListener("click", closeGallery);
prevButton.addEventListener("click", () => renderGallery(activeIndex - 1));
nextButton.addEventListener("click", () => renderGallery(activeIndex + 1));

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeGallery();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeGallery();
});

document.addEventListener("keydown", (event) => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") renderGallery(activeIndex - 1);
  if (event.key === "ArrowRight") renderGallery(activeIndex + 1);
});

const revealElements = [...document.querySelectorAll(".reveal")];

if (mobilePerformanceProfile || reducedMotion.matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });

  // Keep deep links and browser-restored scroll positions readable even when
  // an observer callback is delayed during startup.
  window.setTimeout(() => {
    revealElements.forEach((element) => {
      if (element.classList.contains("is-visible")) return;
      element.classList.add("is-visible");
    });
  }, 1800);
}

let scrollFrame = 0;

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${amount})`;
  header.classList.toggle("is-scrolled", window.scrollY > 32);
}

function requestScrollUpdate() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0;
    updateScrollUI();
  });
}

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
updateScrollUI();

if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    },
    { passive: true },
  );
}

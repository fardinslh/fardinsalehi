const galleries = {
  lumeme: {
    title: "Lumeme",
    label: "Meme token marketplace",
    images: [
      ["assets/archive/lumeme/lumeme_explore.png", "Explore marketplace", "گشت‌وگذار در بازار"],
      ["assets/archive/lumeme/lumeme_mintMeme.png", "Mint a meme token", "ساخت میم‌توکن"],
      ["assets/archive/lumeme/lumeme_memeDetails.png", "Token details", "جزئیات توکن"],
      ["assets/archive/lumeme/lumeme_memeDetails(2).png", "Meme details", "جزئیات میم"],
      ["assets/archive/lumeme/lumeme_profile.png", "Creator profile", "پروفایل سازنده"],
      ["assets/archive/lumeme/lumeme_send.png", "Send token flow", "فرایند ارسال توکن"],
      ["assets/archive/lumeme/lumeme_menu.png", "Application menu", "منوی برنامه"],
      ["assets/archive/lumeme/lumeme_login.png", "Account access", "ورود به حساب"],
    ],
  },
  lumenswap: {
    title: "Lumenswap",
    label: "Stellar decentralized exchange",
    images: [
      ["assets/archive/lumenswap/lumenswap_.png", "Exchange landing page", "صفحه اصلی صرافی"],
      ["assets/archive/lumenswap/lumenswap_selectApp.png", "Product selection", "انتخاب محصول"],
      ["assets/archive/lumenswap/lumenswap_obm.png", "Order book market", "بازار دفتر سفارش"],
    ],
  },
  polyshot: {
    title: "Polyshot",
    label: "Sports prediction market",
    images: [
      ["assets/archive/polyshot/polyshot_home.png", "Live market home", "صفحه اصلی بازار زنده"],
      ["assets/archive/polyshot/polyshot_matchDetails.png", "Match market details", "جزئیات بازار مسابقه"],
      ["assets/archive/polyshot/polyshot_profile.png", "Trader profile", "پروفایل معامله‌گر"],
      ["assets/archive/polyshot/polyshot_settings.png", "Account settings", "تنظیمات حساب"],
    ],
  },
  salmooni: {
    title: "Salmooni",
    label: "Barber discovery and booking",
    images: [
      ["assets/archive/salmooni/salmooni_home.jpg", "Customer home", "صفحه اصلی مشتری"],
      ["assets/archive/salmooni/salmooni_shopAbout.jpg", "Shop profile", "پروفایل آرایشگاه"],
      ["assets/archive/salmooni/salmooni_barberDashboard.jpg", "Barber dashboard", "داشبورد آرایشگر"],
      ["assets/archive/salmooni/salmooni.png", "Booking experience", "تجربه رزرو"],
      ["assets/archive/salmooni/salmooni.jpg", "Service marketplace", "بازار خدمات"],
    ],
  },
};

const persianTranslations = {
  "nav.work": "پروژه‌ها",
  "nav.archive": "آرشیو",
  "nav.experience": "تجربه کاری",
  "nav.about": "درباره من",
  "nav.resume": "رزومه",
  "hero.status": "برای همکاری حضوری، دورکاری یا ترکیبی آماده‌ام",
  "hero.role": "مهندس ارشد فرانت‌اند · React · Next.js · TypeScript · توسعه مبتنی بر هوش مصنوعی",
  "hero.eyebrow": "۰۱ / معرفی",
  "hero.title": "برای محصولات <span>پیچیده</span><br>رابط کاربری سریع<br>و پایدار می‌سازم.",
  "hero.summary":
    "من فردین صالحی‌زاده هستم؛ مهندس ارشد فرانت‌اند با بیش از ۴ سال تجربه در ساخت وب‌اپلیکیشن‌های پیچیده با React، Next.js و TypeScript. تمرکز اصلی من بر توسعه CRMهای سازمانی، سامانه‌های بلادرنگ و به‌کارگیری جریان‌های کاری مبتنی بر هوش مصنوعی (AI-Native) در مهندسی نرم‌افزار است.",
  "hero.ctaWork": "مشاهده پروژه‌ها",
  "hero.ctaAbout": "درباره من",
  "work.eyebrow": "۰۲ / پروژه‌های منتخب",
  "work.title": "پروژه‌هایی که همین حالا<br><span>می‌توانید امتحانشان کنید.</span>",
  "work.intro":
    "شش تجربه آنلاین برای پایش داده‌های سولانا، مدیریت عملیات سفارشات ووکامرس، مدیریت تیم، ارتباط با مشتری، معامله دارایی‌های شبکه Stellar و احراز هویت فروش طلا.",
  "common.liveProduct": "نسخه آنلاین",
  "common.demoReady": "نسخه دمو",
  "common.visitLive": "مشاهده سایت ↗",
  "common.tryDemo": "اجرای دمو ↗",
  "common.visualCase": "نمایش صفحات پروژه ↗",
  "projects.solana.kicker": "پایش اکوسیستم · ۲۰۲۶",
  "projects.solana.description":
    "داشبوردی بدون نیاز به ورود که داده‌های شبکه سولانا، اعتبارسنج‌ها، شاخص‌های اقتصادی و دارایی‌های واقعی را خودکار به‌روزرسانی می‌کند و در یک صفحه نمایش می‌دهد.",
  "projects.orderino.kicker": "مدیریت عملیات ووکامرس · ۲۰۲۶",
  "projects.orderino.description":
    "داشبورد پیشرفته مدیریت عملیات سفارشات ووکامرس همراه با رهگیری مرسولات، وضعیت‌های سفارشی، چاپ لیبل و بارکد محلی، و سامانه هوشمند اطلاع‌رسانی پیامکی و وب‌هوک.",
  "projects.taskino.kicker": "مدیریت تیم · ۲۰۲۶",
  "projects.taskino.description":
    "یک CRM سازمانی برای مدیریت گزارش‌ها، تأیید وظایف، برنامه‌های تکرارشونده و ارزیابی عملکرد؛ با داشبوردهای جداگانه برای کارشناس، سرپرست و مدیر و ورود مستقیم به نسخه دمو.",
  "projects.nexa.kicker": "مدیریت ارتباط با مشتری · ۲۰۲۶",
  "projects.nexa.description":
    "یک CRM برای مدیریت مخاطبان، مراحل فروش، آمار کسب‌وکار و پیگیری کارهای روزانه تیم.",
  "projects.lumenswap.kicker": "صرافی Stellar · آنلاین",
  "projects.lumenswap.description":
    "یک صرافی غیرمتمرکز روی شبکه Stellar برای تبدیل دارایی‌ها، یافتن مسیر مناسب معامله و ثبت سفارش محدود در یک رابط ساده.",
  "projects.ehraz.kicker": "احراز هویت فروش طلا · ۲۰۲۶",
  "projects.ehraz.description":
    "یک سامانه فارسی و نقش‌محور برای ثبت و بررسی فروشندگان و پذیرش‌ها، با دموی عمومی، مدیریت دعوت‌نامه و مرز مشخص برای اتصال کنترل‌شده به اسکنر اثر انگشت در آینده.",
  "archive.eyebrow": "۰۳ / آرشیو",
  "archive.title": "پروژه‌های قبلی.<br><span>صفحه‌های اصلی هر محصول.</span>",
  "archive.intro":
    "صفحه‌های پروژه‌های قبلی را اینجا نگه داشته‌ام. بعضی محصولات هنوز آنلاین‌اند و بعضی را فقط از طریق همین گالری‌ها می‌توان بررسی کرد.",
  "archive.view8": "مشاهده ۸ صفحه",
  "archive.view3": "مشاهده ۳ صفحه",
  "archive.view4": "مشاهده ۴ صفحه",
  "archive.view5": "مشاهده ۵ صفحه",
  "archive.lumeme": "بازار خرید و ساخت میم‌توکن",
  "archive.lumenswap": "صرافی غیرمتمرکز استلار",
  "archive.polyshot": "پلتفرم پیش‌بینی مسابقات ورزشی",
  "archive.salmooni": "جست‌وجو و رزرو آرایشگر",
  "experience.eyebrow": "۰۴ / تجربه کاری",
  "experience.title": "تجربه کاری.<br><span>از ۲۰۲۲ تا امروز.</span>",
  "experience.intro":
    "سابقه کار روی CRM سازمانی، افزونه‌های پیشرفته ووکامرس، محصولات کریپتو، بازارهای بلادرنگ، رزرو آنلاین و سامانه‌های پزشکی با دسترسی نقش‌محور.",
  "experience.taskino.time": "۲۰۲۶—اکنون",
  "experience.seniorFrontendRole": "توسعه‌دهنده ارشد فرانت‌اند",
  "experience.taskino.summary":
    "فرانت‌اند یک CRM سازمانی را برای سه نقش کارشناس، سرپرست و مدیر توسعه می‌دهم؛ ارائه تحلیل داده، برنامه‌ریزی، تأیید وظایف، اعلان‌ها و گردش‌کارهای بلادرنگ با Socket.IO همراه با استفاده از جریان‌های کاری توسعه مبتنی بر AI.",
  "experience.orderino.time": "۲۰۲۶",
  "experience.leadFrontendRole": "معمار ارشد فرانت‌اند و افزونه",
  "experience.orderino.summary":
    "معماری و توسعه داشبورد مدرن عملیات سفارشات با React 18 و TypeScript برای فروشگاه‌های ووکامرسی پرترافیک؛ با سازگاری کامل HPOS، مدیریت وضعیت‌های سفارشی، تولید محلی بارکد SVG و QR، چاپ فیش حرارتی و اعلان‌های رویدادمحور چندکاناله.",
  "experience.polyshot.time": "۲۰۲۵—مارس ۲۰۲۶",
  "experience.frontendRole": "توسعه‌دهنده فرانت‌اند",
  "experience.polyshot.summary":
    "در صفحه‌های داده‌محور بازارهای ورزشی، سرعت رندر و پایداری داده‌های بلادرنگ را بهبود دادم و کامپوننت‌های مشترک را برای توسعه سریع‌تر قابلیت‌ها ساختم.",
  "experience.lumeme.time": "۲۰۲۴—۲۰۲۵",
  "experience.lumeme.summary":
    "در اپلیکیشن Next.js مبتنی بر شبکه Stellar، بخش‌های کشف و ساخت توکن، معامله، نمودار بازار، سواپ، نقدینگی، پروفایل و PWA را توسعه دادم.",
  "experience.salmooni.time": "۲۰۲۴",
  "experience.salmooni.summary":
    "نسخه موبایل فرایند جست‌وجو و رزرو را با اصلاح چیدمان واکنش‌گرا، کاهش رندرهای اضافی React و اعتبارسنجی دقیق‌تر فرم‌ها بهبود دادم.",
  "experience.lumenswap.time": "۲۰۲۲—۲۰۲۳",
  "experience.lumenswap.summary":
    "کامپوننت‌های واکنش‌گرا و قابل استفاده مجدد ساختم و حرکت‌ها و تعاملات رابط یک اپلیکیشن کریپتویی را بهبود دادم.",
  "experience.zobahan.time": "۲۰۲۲",
  "experience.zobahan.company": "سامانه طب کار ذوب‌آهن",
  "experience.zobahan.summary":
    "گردش‌کارهای ورود و سطح دسترسی را برای پرونده‌های پزشکی پزشکان، پرستاران، آزمایشگاه و مدیران توسعه دادم.",
  "tags.enterpriseCrm": "CRM سازمانی",
  "tags.realtimeUi": "رابط کاربری بلادرنگ",
  "tags.aiWorkflows": "جریان کاری مبتنی بر AI",
  "tags.hpos": "ووکامرس HPOS",
  "tags.bilingual": "رابط دو زبانه (RTL/LTR)",
  "tags.performance": "عملکرد",
  "tags.liveData": "داده بلادرنگ",
  "tags.designSystems": "سیستم طراحی",
  "tags.responsiveUi": "رابط واکنش‌گرا",
  "tags.reactPerformance": "عملکرد React",
  "tags.validation": "اعتبارسنجی",
  "tags.componentSystems": "کامپوننت‌های مشترک",
  "tags.motion": "موشن",
  "tags.cryptoUx": "رابط کاربری کریپتو",
  "tags.authentication": "احراز هویت",
  "tags.permissions": "دسترسی نقش‌محور",
  "about.eyebrow": "۰۵ / درباره من",
  "about.title": "تخصص من ساخت رابط‌هایی است<br><span>که سریع و قابل نگهداری باشند.</span>",
  "about.lead": "کاربر باید بتواند بدون آموزش طولانی، مسیر اصلی محصول را پیدا کند.",
  "about.body":
    "نیاز محصول را به اجرای فنی تبدیل می‌کنم: رابط‌های واکنش‌گرا می‌سازم، ارتباط با API و Socket.IO را پیاده می‌کنم، سرعت را بهبود می‌دهم و قابلیت‌ها را با همکاری تیم بک‌اند تا انتشار پیش می‌برم.",
  "about.repositories": "مشاهده ۱۶ مخزن عمومی",
  "about.resumeLabel": "رزومه · PDF",
  "about.resumeAction": "مشاهده یا دانلود رزومه",
  "about.telegram": "تلگرام",
  "about.phone": "شماره تماس",
  "about.capability1.title": "رابط کاربری محصول",
  "about.capability1.body":
    "داشبوردهای سازمانی، گزارش‌ها، نمودارهای تحلیلی و وب‌اپلیکیشن‌های واکنش‌گرا.",
  "about.capability2.title": "سیستم‌های فرانت‌اند",
  "about.capability2.body":
    "کامپوننت‌های قابل استفاده مجدد، مدیریت داده سرور، دسترس‌پذیری و بهینه‌سازی عملکرد.",
  "about.capability3.title": "سیستم‌های پیچیده و توسعه مبتنی بر AI",
  "about.capability3.body":
    "جریان‌های کاری مبتنی بر ایجنت‌های کدنویسی، دسترسی‌های چندسطحی بر اساس نقش، ارتباطات بلادرنگ Socket.IO و خودکارسازی فرآیند توسعه.",
  "skills.eyebrow": "ابزارهای فنی",
  "skills.title": "ابزارها و فناوری‌هایی که در پروژه‌ها استفاده می‌کنم.",
  "skills.frontend": "فرانت‌اند و هسته",
  "skills.state": "مدیریت داده و وضعیت",
  "skills.ai": "هوش مصنوعی و ابزارهای توسعه",
  "skills.ui": "رابط کاربری و کارایی",
  "skills.engineering": "مهندسی و بلاک‌چین",
  "education.eyebrow": "تحصیلات",
  "education.time": "۲۰۱۹—۲۰۲۳",
  "education.degree": "کارشناسی علوم کامپیوتر",
  "education.school": "مهندسی نرم‌افزار · دانشگاه آزاد شاهین‌شهر",
  "education.gpa": "معدل ۱۶ از ۲۰",
  "stats.yearsValue": "۴+",
  "stats.years": "سال تجربه حرفه‌ای",
  "stats.projectsValue": "۰۹",
  "stats.projects": "پروژه منتخب",
  "stats.liveValue": "۰۶",
  "stats.live": "پروژه آنلاین",
  "stats.reposValue": "۱۶",
  "stats.repos": "مخزن عمومی گیت‌هاب",
  "contact.eyebrow": "۰۶ / تماس",
  "contact.title": "برای همکاری یا ساخت محصول<br><span>به من پیام بدهید.</span>",
  "contact.cta": "ارسال ایمیل",
  "contact.email": "ایمیل",
  "footer.role": "فردین صالحی‌زاده · مهندس ارشد فرانت‌اند",
  "footer.tagline": "طراحی و توسعه توسط فردین صالحی‌زاده.",
  "gallery.eyebrow": "صفحه‌های پروژه آرشیوی",
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
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobilePerformanceProfile = window.matchMedia(
  "(max-width: 720px), (pointer: coarse)",
).matches;
const translatableElements = [...document.querySelectorAll("[data-i18n]")];
const englishContent = new Map(
  translatableElements.map((element) => [element, element.innerHTML]),
);

let activeGallery = null;
let activeIndex = 0;
let lastTrigger = null;
let currentLanguage = document.documentElement.lang === "fa" ? "fa" : "en";

function getGalleryCaption(image) {
  return currentLanguage === "fa" ? image[2] : image[1];
}

function localizeNumber(value) {
  if (currentLanguage !== "fa") return value;
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function updateControlLabels() {
  const isPersian = currentLanguage === "fa";
  const isLight = document.documentElement.dataset.theme === "light";

  languageLabel.textContent = isPersian ? "EN" : "FA";
  languageToggle.setAttribute(
    "aria-label",
    isPersian ? "Switch to English" : "Switch to Persian",
  );
  themeToggle.setAttribute(
    "aria-label",
    isPersian
      ? isLight
        ? "تغییر به حالت تیره"
        : "تغییر به حالت روشن"
      : isLight
        ? "Switch to dark mode"
        : "Switch to light mode",
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

function applyLanguage(language, persist = true) {
  currentLanguage = language;
  const isPersian = language === "fa";
  document.documentElement.lang = language;
  document.documentElement.dir = isPersian ? "rtl" : "ltr";

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = isPersian
      ? persianTranslations[key] || englishContent.get(element)
      : englishContent.get(element);
  });

  document.title = isPersian
    ? "فردین صالحی‌زاده — مهندس ارشد فرانت‌اند و توسعه مبتنی بر هوش مصنوعی"
    : "Fardin Salehizadeh — Senior Frontend Engineer & AI-Native Developer";
  document.querySelector('meta[name="description"]').content = isPersian
    ? "پورتفولیوی فردین صالحی‌زاده؛ مهندس ارشد فرانت‌اند با بیش از ۴ سال تجربه در ساخت محصولات واقعی با React، Next.js، TypeScript و جریان‌های مهندسی AI-Native."
    : "Portfolio of Fardin Salehizadeh — Senior Frontend Engineer with 4+ years of experience building complex web applications with React, Next.js, TypeScript, and AI-native engineering workflows.";
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = isPersian
    ? "تجربه کاری، پروژه‌های منتخب و معماری رابط‌های کاربری بلادرنگ و مبتنی بر AI."
    : "Production experience, selected product work, and AI-native interface architecture.";

  closeButton.setAttribute("aria-label", isPersian ? "بستن گالری" : "Close gallery");
  prevButton.setAttribute("aria-label", isPersian ? "تصویر قبلی" : "Previous screen");
  nextButton.setAttribute("aria-label", isPersian ? "تصویر بعدی" : "Next screen");
  document.querySelector(".nav").setAttribute(
    "aria-label",
    isPersian ? "ناوبری اصلی" : "Primary navigation",
  );

  if (persist) {
    try {
      localStorage.setItem("language", language);
    } catch {}
  }
  updateControlLabels();

  if (dialog.open) {
    galleryThumbs.querySelectorAll(".gallery-thumb").forEach((thumb, index) => {
      const caption = getGalleryCaption(activeGallery.images[index]);
      thumb.setAttribute(
        "aria-label",
        isPersian ? `نمایش ${caption}` : `Show ${caption}`,
      );
    });
    renderGallery(activeIndex);
  }
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
  galleryCount.textContent = localizeNumber(
    `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
  );

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
    button.setAttribute(
      "aria-label",
      currentLanguage === "fa" ? `نمایش ${caption}` : `Show ${caption}`,
    );
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

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "fa" ? "en" : "fa");
});

themeToggle.addEventListener("click", () => {
  applyTheme(
    document.documentElement.dataset.theme === "light" ? "dark" : "light",
  );
});

applyTheme(document.documentElement.dataset.theme || "light", false);
applyLanguage(currentLanguage, false);

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

/*
 * Infitrust International — shared site script
 * - Inserts the icon sprite, header and footer on every page (edit them once, here)
 * - Mobile menu, scroll reveal, and the quote form (WhatsApp / email)
 */

/* ---------- Contact details (used across the site) ---------- */
const CONTACT = {
  phoneDisplay: "+91 99024 13410",
  phoneLink: "+919902413410",
  whatsapp: "919902413410",
  email: "info@infitrustinternational.com",
  address: "First Floor, D Block, No.860, Sahakar Nagar, Bengaluru, Karnataka 560092, India",
};

/* ---------- The 6 collections (used by the menu, footer and quote form) ---------- */
const COLLECTIONS = [
  { slug: "sterling-silver", name: "925 Sterling Silver Lab Diamond Jewelry", short: "925 Sterling Silver" },
  { slug: "lab-grown-diamond", name: "Lab Grown Diamond Fine Jewelry", short: "Lab Grown Diamond" },
  { slug: "demi-fine-vermeil", name: "Demi-Fine & Vermeil Jewelry", short: "Demi-Fine & Vermeil" },
  { slug: "gemstone", name: "Gemstone & Colored Stone Jewelry", short: "Gemstone & Colored Stone" },
  { slug: "hip-hop-iced-out", name: "Hip Hop & Iced-Out Jewelry", short: "Hip Hop & Iced-Out" },
  { slug: "custom-private-label", name: "Custom & Private Label Jewelry", short: "Custom & Private Label" },
];

/* ---------- Icons (Lucide, MIT) — use with <svg class="icon"><use href="#i-name"></use></svg> ---------- */
const ICONS = {
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  design:
    '<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  shield:
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  truck:
    '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1"/>',
  package:
    '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
  award:
    '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  sparkles:
    '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
};

const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

function insertIconSprite() {
  const symbols = Object.entries(ICONS)
    .map(([name, paths]) => `<symbol id="i-${name}" viewBox="0 0 24 24">${paths}</symbol>`)
    .join("");
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols}</svg>`,
  );
}

/* ---------- Header ---------- */
function renderHeader() {
  const slot = document.getElementById("site-header");
  if (!slot) return;
  const page = document.body.dataset.page || "";

  const dropdownLinks = COLLECTIONS.map(
    (c) => `<a href="${c.slug}.html"><img src="assets/products/${c.slug}/cover.jpg" alt="" loading="lazy" />${c.short}</a>`,
  ).join("");
  const mobileCollectionLinks = COLLECTIONS.map(
    (c) => `<a class="mobile-sub" href="${c.slug}.html">${c.name}</a>`,
  ).join("");

  slot.outerHTML = `
    <div class="topbar">
      <div class="shell">
        <a href="tel:${CONTACT.phoneLink}">${CONTACT.phoneDisplay}</a>
        <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
        <span class="topbar-extra">Shipping to 25+ countries</span>
      </div>
    </div>
    <header class="site-header" id="header">
      <div class="shell header-bar">
        <a href="index.html" class="brand" aria-label="Infitrust International — home">
          <img src="assets/brand/logo.png" alt="Infitrust International" width="700" height="404" />
        </a>

        <nav class="main-nav" aria-label="Main">
          <div class="nav-dropdown">
            <button type="button" aria-haspopup="true" class="${COLLECTIONS.some((c) => c.slug === page) ? "active" : ""}">
              Collections ${icon("chevron-down")}
            </button>
            <div class="dropdown-panel">${dropdownLinks}</div>
          </div>
          <a href="index.html#custom">Custom Design</a>
          <a href="index.html#process">How to Order</a>
          <a href="index.html#about">About Us</a>
          <a href="index.html#faq">FAQ</a>
          <a href="index.html#contact">Contact</a>
        </nav>

        <div class="header-actions">
          <a href="index.html#contact" class="btn btn-dark">Get a Quote</a>
          <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Open menu" aria-expanded="false">
            <svg class="icon icon-menu" aria-hidden="true"><use href="#i-menu"></use></svg>
            <svg class="icon icon-close" aria-hidden="true"><use href="#i-close"></use></svg>
          </button>
        </div>
      </div>

      <div class="mobile-menu" id="mobile-menu">
        <nav class="shell" aria-label="Mobile">
          <a href="index.html#collections">Collections</a>
          ${mobileCollectionLinks}
          <a href="index.html#custom">Custom Design</a>
          <a href="index.html#process">How to Order</a>
          <a href="index.html#about">About Us</a>
          <a href="index.html#faq">FAQ</a>
          <a href="index.html#contact">Contact</a>
          <a href="index.html#contact" class="btn btn-dark">Get a Quote</a>
        </nav>
      </div>
    </header>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const slot = document.getElementById("site-footer");
  if (!slot) return;

  const collectionLinks = COLLECTIONS.map((c) => `<li><a href="${c.slug}.html">${c.short}</a></li>`).join("");

  slot.outerHTML = `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-about">
          <a href="index.html" class="footer-logo"><img src="assets/brand/logo.png" alt="Infitrust International" width="700" height="404" /></a>
          <p>Your trusted Indian jewellery sourcing &amp; manufacturing partner — serving private-label brands, designers, retailers and wholesalers across 25+ countries.</p>
        </div>
        <div>
          <h4>Collections</h4>
          <ul class="footer-links">${collectionLinks}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul class="footer-links">
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="index.html#founder">Our Founder</a></li>
            <li><a href="index.html#custom">Custom Design (OEM/ODM)</a></li>
            <li><a href="index.html#process">How to Order</a></li>
            <li><a href="index.html#shipping">Packaging &amp; Shipping</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul class="footer-links">
            <li><a href="tel:${CONTACT.phoneLink}">${CONTACT.phoneDisplay}</a></li>
            <li><a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a></li>
            <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
            <li>${CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="shell">© ${new Date().getFullYear()} Infitrust International Pvt Ltd. All rights reserved.</div>
      </div>
    </footer>
    <a class="wa-float" href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${icon("chat")}</a>`;
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("menu-toggle");
  if (!header || !toggle) return;

  const setOpen = (open) => {
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => setOpen(!header.classList.contains("menu-open")));
  header.querySelectorAll("#mobile-menu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  nodes.forEach((n) => observer.observe(n));
}

/* ---------- Quote form: sends the enquiry via WhatsApp or email ---------- */
function initQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) return;

  // Fill the collection dropdown
  const select = form.elements.collection;
  COLLECTIONS.forEach((c) => select.insertAdjacentHTML("beforeend", `<option value="${c.name}">${c.name}</option>`));

  // Pre-select from the link, e.g. index.html?collection=gemstone&design=GEM-004#contact
  const params = new URLSearchParams(location.search);
  const chosen = COLLECTIONS.find((c) => c.slug === params.get("collection"));
  if (chosen) select.value = chosen.name;
  if (params.get("design")) {
    form.elements.message.value = `I'm interested in design ${params.get("design")}. `;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const f = form.elements;
    const lines = [
      "Hello Infitrust, I would like a quotation.",
      "",
      `Name: ${f.name.value}`,
      f.company.value ? `Company: ${f.company.value}` : null,
      f.country.value ? `Country: ${f.country.value}` : null,
      `Email: ${f.email.value}`,
      f.phone.value ? `Phone: ${f.phone.value}` : null,
      f.collection.value ? `Collection: ${f.collection.value}` : null,
      f.quantity.value ? `Quantity: ${f.quantity.value}` : null,
      f.message.value ? "" : null,
      f.message.value || null,
    ].filter((line) => line !== null);
    const text = lines.join("\n");

    const via = event.submitter && event.submitter.value;
    if (via === "email") {
      const subject = `Quotation request — ${f.company.value || f.name.value}`;
      location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
  });
}

insertIconSprite();
renderHeader();
renderFooter();
initMenu();
initReveal();
initQuoteForm();

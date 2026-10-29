// Loading Lucide
const loadScript = new Promise((resolve, reject) => {
  const script = document.createElement("script");

  script.src = "https://unpkg.com/lucide@latest";
  script.onload = resolve;
  script.onerror = reject;

  document.head.appendChild(script);

  script.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js";
  script.integrity =
    "sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL";
  script.onload = resolve;
  script.onerror = reject;

  document.head.appendChild(script);
});

loadScript
.then(() => {
    lucide.createIcons();
    console.log("Lucide loaded successfully!");
    console.log("Bootstrap loaded successfully!");
  })
  .catch(() => {
    console.error("Error loading Lucide...");
    console.error("Error loading Bootstrap...");
  });

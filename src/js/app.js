(() => {
  const root = document.documentElement;
  const STORAGE_KEY = "css-density-demo:prefs";

  const densityButtons = [...document.querySelectorAll("[data-set-density]")];
  const surfaceButtons = [...document.querySelectorAll("[data-set-surface]")];
  const tokenNodes = [...document.querySelectorAll("[data-token]")];

  function readPrefs() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function writePrefs(density, surface) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ density, surface })
      );
    } catch {
      /* ignore quota / private mode */
    }
  }

  function setPressed(buttons, attr, value) {
    buttons.forEach((btn) => {
      const active = btn.getAttribute(attr) === value;
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function applyDensity(value) {
    const density = value === "punchy" ? "punchy" : "quiet";
    root.setAttribute("data-density", density);
    setPressed(densityButtons, "data-set-density", density);
    return density;
  }

  function applySurface(value) {
    const surface = value === "alternate" ? "alternate" : "cream";
    root.setAttribute("data-surface", surface);
    setPressed(surfaceButtons, "data-set-surface", surface);
    return surface;
  }

  function refreshTokens() {
    const styles = getComputedStyle(root);
    tokenNodes.forEach((node) => {
      const name = node.getAttribute("data-token");
      if (!name) return;
      // The shipped stylesheet is minified, so restore readable spacing after commas.
      let value = styles.getPropertyValue(name).trim().replace(/,(?=\S)/g, ", ");
      if (!value) {
        node.textContent = "—";
        return;
      }
      // Keep shadow peeks readable
      if (name.includes("shadow") && value.length > 72) {
        value = value.slice(0, 69) + "…";
      }
      node.textContent = value;
      node.title = styles.getPropertyValue(name).trim().replace(/,(?=\S)/g, ", ");
    });
  }

  function persistCurrent() {
    writePrefs(
      root.getAttribute("data-density"),
      root.getAttribute("data-surface")
    );
    refreshTokens();
  }

  // Restore saved preferences
  const prefs = readPrefs();
  if (prefs) {
    applyDensity(prefs.density);
    applySurface(prefs.surface);
  } else {
    applyDensity(root.getAttribute("data-density"));
    applySurface(root.getAttribute("data-surface"));
  }
  refreshTokens();

  densityButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyDensity(btn.getAttribute("data-set-density"));
      persistCurrent();
    });
  });

  surfaceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      applySurface(btn.getAttribute("data-set-surface"));
      persistCurrent();
    });
  });

  // Demo form: prevent navigation
  const form = document.querySelector(".demo-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
})();

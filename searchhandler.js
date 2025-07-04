document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("globalSearchInput");
  const button = document.getElementById("globalSearchBtn");

  const HIGHLIGHT_STYLE = {
    backgroundColor: "#ff9e00",
    color: "#000",
  };
  const RESET_TIMEOUT = 3000;

  function highlightElement(el) {
    Object.assign(el.style, HIGHLIGHT_STYLE);
    setTimeout(() => {
      el.style.backgroundColor = "";
      el.style.color = "";
    }, RESET_TIMEOUT);
  }

  function searchContent(term) {
    const elements = document.querySelectorAll("h1, h2, h3, p, li, span, a");
    let found = false;
    const termLower = term.toLowerCase();

    elements.forEach(el => {
      if (el.textContent.toLowerCase().includes(termLower)) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        highlightElement(el);
        found = true;
      }
    });

    return found;
  }

  async function fetchSearchIndex() {
    try {
      const res = await fetch("../data/busqueda.json");
      if (!res.ok) throw new Error("Fetch failed");
      return await res.json();
    } catch (err) {
      alert("Error al acceder al índice de búsqueda.");
      return null;
    }
  }

  async function handleSearch(term) {
    const found = searchContent(term);
    if (found) return;

    const index = await fetchSearchIndex();
    if (!index) return;

    const page = index[term.toLowerCase()];
    if (page) {
      const basePath = page.startsWith("/") ? "" : "/";
      window.location.href = `${basePath}${page}?query=${encodeURIComponent(term)}`;
    } else {
      showNotFoundMessage();
    }
  }

  function initSearchEvents() {
    if (!input || !button) return;

    button.addEventListener("click", () => {
      const term = input.value.trim();
      if (term) handleSearch(term);
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") button.click();
    });

    // Buscar automáticamente si hay un parámetro en la URL
    const query = new URLSearchParams(window.location.search).get("query");
    if (query) {
      input.value = query;
      searchContent(query);
    }
  }

  initSearchEvents();
});

// Mejora: mostrar mensaje de búsqueda no encontrada en el DOM en lugar de alert
function showNotFoundMessage() {
  const msgBox = document.createElement("div");
  msgBox.textContent = "No se encontró el término buscado.";
  msgBox.style.backgroundColor = "#ff9e00";
  msgBox.style.color = "#000";
  msgBox.style.padding = "10px";
  msgBox.style.margin = "10px auto";
  msgBox.style.maxWidth = "400px";
  msgBox.style.textAlign = "center";
  msgBox.style.borderRadius = "5px";
  document.body.prepend(msgBox);
  setTimeout(() => msgBox.remove(), 4000);
}

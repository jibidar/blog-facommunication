(() => {
  const input = document.getElementById("site-search");
  const results = document.getElementById("search-results");
  const status = document.getElementById("search-status");
  if (!input || !results || !status) return;
  let articles = [];
  fetch("/index.json").then((response) => {
    if (!response.ok) throw new Error("Index unavailable");
    return response.json();
  }).then((data) => { articles = data; })
    .catch(() => { status.textContent = "La recherche est momentanément indisponible. Réessayez plus tard."; });
  input.addEventListener("input", () => {
    const query = input.value.trim().toLocaleLowerCase("fr");
    results.replaceChildren();
    if (query.length < 2) { status.textContent = "Saisissez au moins deux caractères."; return; }
    const matches = articles.filter((article) => [article.title, article.description, ...(article.categories || [])].join(" ").toLocaleLowerCase("fr").includes(query)).slice(0, 20);
    status.textContent = matches.length ? matches.length + " résultat(s) trouvé(s)." : "Aucun article ne correspond à cette recherche.";
    matches.forEach((article) => {
      const card = document.createElement("article"); card.className = "article-card search-result";
      const body = document.createElement("div"); body.className = "article-body";
      const meta = document.createElement("p"); meta.className = "article-meta"; meta.textContent = [article.categories || [], article.date].flat().filter(Boolean).join(" · ");
      const heading = document.createElement("h2"); const link = document.createElement("a"); link.href = article.url; link.textContent = article.title; heading.append(link);
      const description = document.createElement("p"); description.textContent = article.description || "";
      body.append(meta, heading, description); card.append(body); results.append(card);
    });
  });
})();
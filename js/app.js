const APP_VERSION = "__APP_VERSION__";

const palette = {
  v1: { accent: "#ff6b1a", state: "Healthy" },
  v2: { accent: "#0077b6", state: "Super Healthy" },
};

const jokes = {
  v1: [
    "Deploy du lundi: ca marche en v1, on touche plus a rien.",
    "Mon pod a fait du yoga: il est devenu tres scalable.",
    "GitOps: je push donc je suis.",
  ],
  v2: [
    "v2: meme app, ego plus grand.",
    "Argo CD ne juge pas, il synchronise.",
    "Le bug a disparu des qu'on a ouvert la demo.",
  ],
};

let idx = 0;

function updateTimestamp() {
  const now = new Date();
  document.getElementById("timestamp").textContent = now.toISOString();
}

function paintByVersion() {
  const theme = palette[APP_VERSION] || palette.v1;
  const versionBadge = document.getElementById("versionBadge");
  const statusEl = document.getElementById("status");

  versionBadge.textContent = APP_VERSION;
  versionBadge.style.color = theme.accent;
  statusEl.textContent = theme.state;
  statusEl.style.color = theme.accent;

  document.documentElement.style.setProperty("--accent", theme.accent);
}

function rotateJoke() {
  const list = jokes[APP_VERSION] || jokes.v1;
  document.getElementById("joke").textContent = list[idx % list.length];
  idx += 1;
}

document.getElementById("checkBtn").addEventListener("click", rotateJoke);

paintByVersion();
rotateJoke();
updateTimestamp();
setInterval(updateTimestamp, 1000);

function updateTimestamp() {
  const now = new Date();
  document.getElementById("timestamp").textContent = now.toISOString();
}

function checkStatus() {
  const statusEl = document.getElementById("status");
  statusEl.textContent = "OK";
  statusEl.style.color = "#2f855a";
  updateTimestamp();
}

document.getElementById("checkBtn").addEventListener("click", checkStatus);

checkStatus();
setInterval(updateTimestamp, 1000);

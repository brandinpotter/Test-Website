const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
document.getElementById("year").textContent = new Date().getFullYear();

btn.addEventListener("click", () => {
  const now = new Date().toLocaleTimeString();
  msg.textContent = `Button clicked at ${now}!`;
});
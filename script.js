const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("projectForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    "Hello KartikiTechSolutions, I would like to enquire about a project.",
    "",
    `Name: ${data.get("name")}`,
    `Company: ${data.get("company") || "Not provided"}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone")}`,
    `Service: ${data.get("service")}`,
    `Budget: ${data.get("budget") || "Not specified"}`,
    `Timeline: ${data.get("timeline") || "Not specified"}`,
    `Found us through: ${data.get("source") || "Not specified"}`,
    "",
    `Project details: ${data.get("details")}`
  ].join("\\n");
  document.getElementById("formNote").textContent = "Opening WhatsApp with your enquiry. Please press Send in WhatsApp to submit it.";
  window.open(`https://wa.me/917385026705?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

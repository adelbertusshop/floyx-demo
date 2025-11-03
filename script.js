// FlowX - przykładowy skrypt testowy

console.log("FlowX działa poprawnie 🚀");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Kliknij, by sprawdzić JS";
  btn.style.padding = "10px 20px";
  btn.style.borderRadius = "8px";
  btn.style.border = "none";
  btn.style.background = "#00bcd4";
  btn.style.color = "white";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "16px";
  btn.style.marginTop = "20px";
  
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    alert("JS działa! 🎉 Wszystko gra, Wojciech!");
  });
});

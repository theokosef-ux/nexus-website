document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("productsButton").addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});

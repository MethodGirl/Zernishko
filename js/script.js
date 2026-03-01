let menuSwitchers = document.querySelectorAll(".switcher");
let buttonsContainer = document.querySelector(".switcher-buttons");

let drinksContainer = document.querySelector(".drinks-container");
let snacksContainer = document.querySelector(".snacks-container");
let dessertsContainer = document.querySelector(".desserts-container");

function setActiveButton(action) {
  const activeButton = document.querySelector(`[data-action="${action}"]`);

  menuSwitchers.forEach((el) => {
    el.style.backgroundColor = "transparent";
    el.style.color = "#A26539";
  });

  if (activeButton) {
    activeButton.style.backgroundColor = "#A26539";
    activeButton.style.color = "#fff";
  }
}

buttonsContainer.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;

  let action = button.dataset.action;

  switch (action) {
    case "drinks":
      dessertsContainer.style.display = "none";
      snacksContainer.style.display = "none";
      drinksContainer.style.display = "block";
      setActiveButton("drinks");
      break;
    case "desserts":
      drinksContainer.style.display = "none";
      snacksContainer.style.display = "none";
      dessertsContainer.style.display = "block";
      setActiveButton("desserts");
      break;
    case "snacks":
      drinksContainer.style.display = "none";
      dessertsContainer.style.display = "none";
      snacksContainer.style.display = "block";
      setActiveButton("snacks");
      break;
  }
});

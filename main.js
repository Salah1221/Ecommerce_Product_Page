const mobileNavToggle = document.body.querySelector(".mobile-nav-toggle");
const themeToggle = document.body.querySelector(".theme-toggler");
const themeToggleSvg = document.body.querySelector(".theme-toggler > svg");
const navLinks = document.body.querySelectorAll("nav a");
const lineInd = document.body.querySelector(".line-indicator");
const navWrapper = document.body.querySelector(".nav-wrapper");
const cartBtn = document.body.querySelector(".cart");
const addToCartBtn = document.body.querySelector(".add-to-cart");
const plusBtn = document.body.querySelector(".plus-btn");
const minusBtn = document.body.querySelector(".minus-btn");
const nbOfProduct = document.body.querySelector(".nb");
const imgDiv = document.body.querySelector(".imgs");
const leftBtn = document.body.querySelector(".arrow-container.left");
const rightBtn = document.body.querySelector(".arrow-container.right");
const root = document.documentElement;

mobileNavToggle.onclick = () => {
  mobileNavToggle.setAttribute(
    "aria-expanded",
    mobileNavToggle.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
};

document.body.style.setProperty(
  "--dark-overlay-height",
  document.body.scrollHeight + "px"
);

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

cartBtn.onclick = () => {
  cartBtn.setAttribute(
    "aria-expanded",
    cartBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
};

let toggleSvgInfo = themeToggleSvg.getBoundingClientRect();

root.style.setProperty(
  "--x",
  toggleSvgInfo.left + toggleSvgInfo.width / 2 + "px"
);

root.style.setProperty(
  "--y",
  toggleSvgInfo.top + toggleSvgInfo.height / 2 + "px"
);

window.addEventListener("resize", () => {
  let toggleSvgInfo = themeToggleSvg.getBoundingClientRect();
  root.style.setProperty(
    "--x",
    toggleSvgInfo.left + toggleSvgInfo.width / 2 + "px"
  );

  root.style.setProperty(
    "--y",
    toggleSvgInfo.top + toggleSvgInfo.height / 2 + "px"
  );
});

navLinks.forEach((link) => {
  link.onmouseover = () => {
    lineInd.style.width = link.getBoundingClientRect().width + "px";
    lineInd.style.left = link.getBoundingClientRect().left + "px";
    lineInd.style.top =
      link.getBoundingClientRect().top +
      link.getBoundingClientRect().height / 2 +
      navWrapper.getBoundingClientRect().height / 2 -
      3 +
      "px";
    lineInd.style.transform = "scaleX(1)";
  };
  link.onmouseleave = () => {
    lineInd.style.transform = "scaleX(0)";
  };
});

plusBtn.onclick = () => {
  if (nbOfProduct.innerHTML < 99)
    nbOfProduct.innerHTML = +nbOfProduct.innerHTML + 1;
};

minusBtn.onclick = () => {
  if (nbOfProduct.innerHTML > 0)
    nbOfProduct.innerHTML = +nbOfProduct.innerHTML - 1;
};

const mouseDownHandler = function () {
  this.classList.add("clicked");
};

const mouseUpHandler = function () {
  this.classList.remove("clicked");
};

addToCartBtn.onmousedown = mouseDownHandler;
addToCartBtn.ontouchstart = mouseDownHandler;
addToCartBtn.onmouseup = mouseUpHandler;
addToCartBtn.ontouchend = mouseUpHandler;

plusBtn.onmousedown = mouseDownHandler;
plusBtn.onmouseup = mouseUpHandler;
plusBtn.ontouchstart = mouseUpHandler;
plusBtn.ontouchend = mouseUpHandler;

minusBtn.onmousedown = mouseDownHandler;
minusBtn.onmouseup = mouseUpHandler;
minusBtn.ontouchstart = mouseUpHandler;
minusBtn.ontouchend = mouseUpHandler;

leftBtn.onmousedown = mouseDownHandler;
leftBtn.onmouseup = mouseUpHandler;
leftBtn.ontouchstart = mouseDownHandler;
leftBtn.ontouchend = mouseUpHandler;

rightBtn.onmousedown = mouseDownHandler;
rightBtn.onmouseup = mouseUpHandler;
rightBtn.ontouchstart = mouseDownHandler;
rightBtn.ontouchend = mouseUpHandler;

leftBtn.onclick = () => {
  let imgWidth = imgDiv.getBoundingClientRect().width;
  let nextScrollLeft =
    imgDiv.scrollLeft - imgWidth >= 0
      ? imgDiv.scrollLeft - imgWidth
      : 3 * imgWidth;
  imgDiv.scrollLeft = nextScrollLeft;
};

rightBtn.onclick = () => {
  let imgWidth = imgDiv.getBoundingClientRect().width;
  let nextScrollLeft = (imgDiv.scrollLeft + imgWidth) % (4 * imgWidth);
  imgDiv.scrollLeft = nextScrollLeft;
};

// let currentScrollLeft = imgDiv.scrollLeft;
// let imgWidth = imgDiv.getBoundingClientRect().width;

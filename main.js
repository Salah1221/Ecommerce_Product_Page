const mobileNavToggle = document.body.querySelector(".mobile-nav-toggle");
const themeToggle = document.body.querySelector(".theme-toggler");
const themeToggleSvg = document.body.querySelector(".theme-toggler > svg");
const navLinks = document.body.querySelectorAll("nav a");
const lineInd = document.body.querySelector(".line-indicator");
const navWrapper = document.body.querySelector(".nav-wrapper");
const cartBtn = document.body.querySelector(".cart");
const addToCartBtn = document.body.querySelector(
  ".add-to-cart:not(.checkout-btn)"
);
const cartContent = document.body.querySelector(".cart-content");
const plusBtn = document.body.querySelector(".plus-btn");
const minusBtn = document.body.querySelector(".minus-btn");
const nbOfProduct = document.body.querySelector(".nb");
const items = document.body.querySelector(".items");
const removeItem = document.body.querySelector(".remove-item");
const checkoutBtn = document.body.querySelector(".checkout-btn");
const count = document.body.querySelector(".count");
const cartCount = document.body.querySelector(".cart-count");
const totalPrice = document.body.querySelector(".total-price");
const img = document.body.querySelector(".imgs");
const lightBoxImg = document.body.querySelector(".light-box .imgs");
const leftBtns = document.body.querySelectorAll(".arrow-container.left");
const rightBtns = document.body.querySelectorAll(".arrow-container.right");
const thumbnails = document.body.querySelectorAll(
  ".gallery:not(.light-box) .thumbnails button"
);
const lightBoxThumbs = document.body.querySelectorAll(
  ".light-box .thumbnails button"
);
const lightBox = document.body.querySelector(".light-box");
const root = document.documentElement;
const lightBoxOverlay = document.body.querySelector(".light-box-overlay");
const closeBtn = document.body.querySelector(".close");

let isLightBoxOpen = false;

let imgDiv = img;

let prodCount = 0;

function updateImgClickEvent() {
  const screenWidth = window.innerWidth;
  const thresholdWidth =
    62.5 *
    parseInt(window.getComputedStyle(root).getPropertyValue("font-size")); // 62.5rem in pixels (assuming 1rem = 16px)

  if (screenWidth < thresholdWidth) {
    // If screen width is less than 62.5rem, remove click event listener
    img.onclick = null;
  } else {
    // If screen width is 62.5rem or more, attach click event listener
    img.onclick = () => {
      isLightBoxOpen = true;
      lightBoxOverlay.classList.add("active");
      imgDiv = lightBoxImg;
      lightBox.classList.add("open");
      lightBoxImg.scrollLeft = img.scrollLeft;
    };
  }
}

updateImgClickEvent();

const closeAction = () => {
  isLightBoxOpen = false;
  lightBoxOverlay.classList.remove("active");
  imgDiv = img;
  lightBox.classList.remove("open");
};

lightBoxOverlay.onclick = closeAction;
closeBtn.onclick = closeAction;

mobileNavToggle.onclick = () => {
  mobileNavToggle.setAttribute(
    "aria-expanded",
    mobileNavToggle.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  root.style.setProperty("--nav-height", document.body.scrollHeight + "px");
};

const scrollHeight = Math.max(
  document.documentElement.clientHeight || 0,
  document.documentElement.scrollHeight || 0,
  document.documentElement.offsetHeight || 0,
  document.body.scrollHeight || 0,
  document.body.offsetHeight || 0
);

document.body.style.setProperty("--dark-overlay-height", scrollHeight + "px");

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

cartBtn.onclick = () => {
  cartBtn.setAttribute(
    "aria-expanded",
    cartBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  if (cartBtn.getAttribute("aria-expanded") === "true") {
    cartContent.classList.add("open");
    cartCount.classList.add("pressed");
  } else {
    cartContent.classList.remove("open");
    cartCount.classList.remove("pressed");
  }
};

window.onload = () => {
  let toggleSvgInfo = themeToggleSvg.getBoundingClientRect();

  root.style.setProperty(
    "--x",
    toggleSvgInfo.left + toggleSvgInfo.width / 2 + "px"
  );

  root.style.setProperty(
    "--y",
    toggleSvgInfo.top + toggleSvgInfo.height / 2 + "px"
  );
};

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

  updateImgClickEvent();
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

checkoutBtn.onmousedown = mouseDownHandler;
checkoutBtn.ontouchstart = mouseDownHandler;
checkoutBtn.onmouseup = mouseUpHandler;
checkoutBtn.ontouchend = mouseUpHandler;

addToCartBtn.onmousedown = mouseDownHandler;
addToCartBtn.ontouchstart = mouseDownHandler;
addToCartBtn.onmouseup = mouseUpHandler;
addToCartBtn.ontouchend = mouseUpHandler;
addToCartBtn.onclick = () => {
  if (+nbOfProduct.innerHTML > 0) {
    prodCount += +nbOfProduct.innerHTML;
    count.innerHTML = "$125.00 x " + prodCount;
    totalPrice.innerHTML = "$" + (125 * prodCount).toFixed(2);
    nbOfProduct.innerHTML = 0;
    items.classList.remove("empty");
    cartCount.innerHTML = prodCount;
    cartCount.classList.add("active");
  }
};

removeItem.onclick = () => {
  prodCount = 0;
  items.classList.add("empty");
  cartCount.classList.remove("active");
  cartCount.innerHTML = "";
};

plusBtn.onmousedown = mouseDownHandler;
plusBtn.onmouseup = mouseUpHandler;
plusBtn.ontouchstart = mouseUpHandler;
plusBtn.ontouchend = mouseUpHandler;

minusBtn.onmousedown = mouseDownHandler;
minusBtn.onmouseup = mouseUpHandler;
minusBtn.ontouchstart = mouseUpHandler;
minusBtn.ontouchend = mouseUpHandler;

const goDirection = (direction) => {
  let imgWidth = imgDiv.getBoundingClientRect().width;
  let nextScrollLeft =
    direction === "left"
      ? imgDiv.scrollLeft - imgWidth >= 0
        ? imgDiv.scrollLeft - imgWidth
        : 3 * imgWidth
      : (imgDiv.scrollLeft + imgWidth) % (4 * imgWidth);
  let index =
    direction === "right"
      ? Math.floor(nextScrollLeft / imgWidth)
      : Math.ceil(nextScrollLeft / imgWidth);
  index = index >= 4 ? 0 : index;
  imgDiv.scrollLeft = index * imgWidth;
  return index;
};

leftBtns.forEach((leftBtn) => {
  leftBtn.onmousedown = mouseDownHandler;
  leftBtn.onmouseup = mouseUpHandler;
  leftBtn.ontouchstart = mouseDownHandler;
  leftBtn.ontouchend = mouseUpHandler;
  leftBtn.onclick = () => {
    let index = goDirection("left");
    toggleActive(lightBoxThumbs, index);
  };
});

rightBtns.forEach((rightBtn) => {
  rightBtn.onmousedown = mouseDownHandler;
  rightBtn.onmouseup = mouseUpHandler;
  rightBtn.ontouchstart = mouseDownHandler;
  rightBtn.ontouchend = mouseUpHandler;
  rightBtn.onclick = () => {
    let index = goDirection("right");
    toggleActive(lightBoxThumbs, index);
  };
});

const toggleActive = (thumbnails, key) => {
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });
  thumbnails[key].classList.add("active");
};

thumbnails.forEach((thumbnail, key) => {
  thumbnail.onclick = (e) => {
    let imgWidth = imgDiv.getBoundingClientRect().width;
    imgDiv.scrollLeft = key * imgWidth;
    toggleActive(thumbnails, key);
  };
});

lightBoxThumbs.forEach((thumbnail, key) => {
  thumbnail.onclick = (e) => {
    let imgWidth = imgDiv.getBoundingClientRect().width;
    imgDiv.scrollLeft = key * imgWidth;
    toggleActive(lightBoxThumbs, key);
  };
});

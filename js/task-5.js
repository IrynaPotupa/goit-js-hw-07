function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bgColorEl = document.querySelector("body");
const bgColorBt = document.querySelector(".change-color");
const bgColorSp = document.querySelector(".color");


const onBtnClick = () => {
  const newColor = getRandomHexColor();
  bgColorEl.style.backgroundColor = newColor;
  bgColorSp.textContent = newColor;
}
bgColorBt.addEventListener ("click", onBtnClick)

const widgetStyle = document.querySelector(".widget");
widgetStyle.classList.add("widget-style");
widgetStyle.firstElementChild.classList.add("widget-text-style");
widgetStyle.lastElementChild.classList.add("widget-button-style");


console.dir(widgetStyle)



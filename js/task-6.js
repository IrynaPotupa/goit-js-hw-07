function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEvent = document.querySelector(`[type="number"]`);
const createBt = document.querySelector(`[data-create]`);
const destroyBt = document.querySelector(`[data-destroy]`);
const elementsBox = document.querySelector(`#boxes`);


const createBoxes = (amount) => {

    const createDiv = [];
    for (let i = 0; i < amount; i += 1) {
      const divEl = document.createElement("div");
      divEl.style.width = `${30 + i * 10}px`;
      divEl.style.height = `${30 + i * 10}px`;
      divEl.style.backgroundColor = getRandomHexColor();
      createDiv.push(divEl);
    }
   elementsBox.prepend(...createDiv);

}

const onCreateBtClick = () => {
  elementsBox.innerHTML = "";
  const quantity = Number(inputEvent.value);
  if (quantity >= 1 && quantity <= 100){
      createBoxes(quantity);
      inputEvent.value ="";
  }
}

createBt.addEventListener(`click`, onCreateBtClick);

const destroyBoxes = () => {
inputEvent.value = "";
elementsBox.innerHTML = "";
}

destroyBt.addEventListener(`click`, destroyBoxes);

const controlsStyle = document.querySelector("#controls");
controlsStyle.classList.add("controls-style");
elementsBox.classList.add("box-style");
inputEvent.classList.add("input-style");
createBt.classList.add("bt-style", "create-bt-style");
destroyBt.classList.add("bt-style", "destroy-bt-style");
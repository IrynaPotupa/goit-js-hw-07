
const inputEvent  = document.querySelector("#name-input");

const outputEvent  = document.querySelector("#name-output");

const onFieldInput = () => {

 const trimValue = inputEvent.value.trim();

 outputEvent.textContent = trimValue ? trimValue : `Anonymous`
};

inputEvent.addEventListener (`input`, onFieldInput)


inputEvent.style.width= "360px";
inputEvent.style.height= "40px";
inputEvent.style.borderRadius = "4px";
inputEvent.style.border = "1px solid rgba(128, 128, 128, 1)";
inputEvent.style.fontSize= "16px";
inputEvent.style.color = "#2e2f42";
inputEvent.style.paddingLeft = "16px"

const textStyle = outputEvent.parentElement;
textStyle.classList.add("text-style")
console.dir(textStyle)

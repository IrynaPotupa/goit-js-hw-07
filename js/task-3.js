//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".


const inputEvent  = document.querySelector("#name-input");

const outputEvent  = document.querySelector("#name-output");

const onFieldInput = () => {

 const trimValue = inputEvent.value.trim();

 outputEvent.textContent = trimValue ? trimValue : `Anonymous`
};

inputEvent.addEventListener (`input`, onFieldInput)

const formElement = document.querySelector (".login-form");

const onFormSubmit = event => {
event.preventDefault();

const formData = {
    email: formElement.elements.email.value.trim(),
    password: formElement.elements.password.value.trim(),
};

if (formData.email === "" || formData.password === "") {
    alert("All form fields must be filled in");
    return;  
}

 console.log(formData);
  formElement.reset();
};

formElement.addEventListener(`submit`, onFormSubmit)


formElement.style.width ="408px";
formElement.style.height = "256px";
formElement.style.padding = "24px";
formElement.style.gap = "16px";
formElement.style.borderRadius = "8px";
formElement.style.display= "inline-grid";
formElement.style.background = "rgba(255, 255, 255, 1)";


const formStyle = [...formElement.children];

formStyle.forEach(element => {
    if (element.firstElementChild){
    element.firstElementChild.style.height= "40px";
    element.firstElementChild.style.borderRadius= "4px";
    element.firstElementChild.style.border = "1px solid rgba(128, 128, 128, 1)";
    }
    element.classList.add("form-style");
    formElement.lastElementChild.classList.add("button-style"); 
});

 
 
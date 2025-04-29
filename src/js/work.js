import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


function post(userEmail, userText) {
  return axios.post('https://portfolio-js.b.goit.study/api/requests', {
    "email": userEmail,
    "comment": userText
  })
}

const form = document.querySelector(".work-together-form");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".backdrop");
const emailInput = document.getElementById("email");
const iconSuccess = document.querySelector(".success-filled");
const invalidEmail = document.querySelector(".invalid-email");

form.addEventListener("submit", handleSubmit);

emailInput.addEventListener("input", mailValidationEffect);

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", closeBackdrop)
document.addEventListener("keydown", closeEsc);



async function handleSubmit(event) {
    event.preventDefault();
    const userEmail = event.target.email.value.trim();
    const userMessage = event.target.message.value.trim();
    iconSuccess.classList.add("visually-hidden");
    try {
        const response = await post(userEmail, userMessage);
        if (response.status === 201) {
            form.reset();
            openModal(response.data.title, response.data.message);
        }
    } catch (error) {
        showErrorMessange();
    }
}

function mailValidationEffect() {
    if (!(emailInput.validity.valid)) {
        emailInput.classList.add("no-valid");
        invalidEmail.classList.remove("visually-hidden");
        iconSuccess.classList.add("visually-hidden");

        if (emailInput.value.trim() === "") {
            invalidEmail.classList.add("visually-hidden");
        }
    } else {
        invalidEmail.classList.add("visually-hidden");
        emailInput.classList.remove("no-valid");
        iconSuccess.classList.remove("visually-hidden");
    }
}

function openModal(title, message) {
    modal.classList.remove("visually-hidden");
    document.body.classList.add("no-scroll");
    document.querySelector(".modal-title").innerHTML = title;
    document.querySelector(".modal-text").innerHTML = message;
}

function closeModal() {
    modal.classList.add("visually-hidden");
    document.body.classList.remove("no-scroll");
}

function closeBackdrop(event) {
    if (event.target.classList.contains("backdrop")) {
      closeModal();
    }
}

function closeEsc(event) {
    if (event.key === "Escape" && !(modal.classList.contains("visually-hidden"))) {
        closeModal();
    }
}

function showErrorMessange() {
    iziToast.show({
        title: "An error occurred!",
        message: "Correct the entered data and send again",
        position: "center",
        maxWidth: "300px"
    });
}




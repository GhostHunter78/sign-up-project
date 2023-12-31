"use strict";

const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");
const greenButton = document.querySelector(".green-button");

const firstNameIcon = document.querySelector(".firstName-error-icon");
const lastNameIcon = document.querySelector(".lastName-error-icon");
const emailIcon = document.querySelector(".email-error-icon");
const passwordIcon = document.querySelector(".password-error-icon");

const firstNameError = document.querySelector(".firstName-error");
const lastNameError = document.querySelector(".lastName-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const firstNameInput = document.querySelector(".firstName-input");
const lastNameInput = document.querySelector(".lastName-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");

let clicked = false;

greenButton.addEventListener("click", () => {
  clicked = true;

  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(emailValue);

  if (firstNameInput.value === "") {
    firstNameIcon.style.display = "block";
    firstNameError.style.display = "block";
    firstNameInput.style.borderColor = "red";
  }
  if (lastNameInput.value === "") {
    lastNameIcon.style.display = "block";
    lastNameError.style.display = "block";
    lastNameInput.style.borderColor = "red";
  }
  if (!valid) {
    emailIcon.style.display = "block";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
  }
  if (passwordInput.value === "") {
    passwordIcon.style.display = "block";
    passwordError.style.display = "block";
    passwordInput.style.borderColor = "red";
  }

  if (valid) {
    emailIcon.style.display = "none";
    emailError.style.display = "none";
    emailInput.style.borderColor = "#3d3b48";
  }

  if (firstNameInput.value.length > 0) {
    firstNameIcon.style.display = "none";
    firstNameError.style.display = "none";
    firstNameInput.style.borderColor = "#3d3b48";
  }

  if (lastNameInput.value.length > 0) {
    lastNameIcon.style.display = "none";
    lastNameError.style.display = "none";
    lastNameInput.style.borderColor = "#3d3b48";
  }

  if (passwordInput.value.length > 0) {
    passwordIcon.style.display = "none";
    passwordError.style.display = "none";
    passwordInput.style.borderColor = "#3d3b48";
  }
});

firstNameInput.addEventListener("input", () => {
  if (clicked) {
    if (firstNameInput.value.length > 0) {
      firstNameIcon.style.display = "none";
      firstNameError.style.display = "none";
      firstNameInput.style.borderColor = "#3d3b48";
    } else {
      firstNameIcon.style.display = "block";
      firstNameError.style.display = "block";
      firstNameInput.style.borderColor = "red";
    }
  }
});

lastNameInput.addEventListener("input", () => {
  if (clicked) {
    if (lastNameInput.value.length > 0) {
      lastNameIcon.style.display = "none";
      lastNameError.style.display = "none";
      lastNameInput.style.borderColor = "#3d3b48";
    } else {
      lastNameIcon.style.display = "block";
      lastNameError.style.display = "block";
      lastNameInput.style.borderColor = "red";
    }
  }
});

emailInput.addEventListener("input", () => {
  if (clicked) {
    if (emailInput.value.length > 0) {
      emailIcon.style.display = "none";
      emailError.style.display = "none";
      emailInput.style.borderColor = "#3d3b48";
    } else {
      emailIcon.style.display = "block";
      emailError.style.display = "block";
      emailInput.style.borderColor = "red";
    }
  }
});

passwordInput.addEventListener("input", () => {
  if (clicked) {
    if (passwordInput.value.length > 0) {
      passwordIcon.style.display = "none";
      passwordError.style.display = "none";
      passwordInput.style.borderColor = "#3d3b48";
    } else {
      passwordIcon.style.display = "block";
      passwordError.style.display = "block";
      passwordInput.style.borderColor = "red";
    }
  }
});

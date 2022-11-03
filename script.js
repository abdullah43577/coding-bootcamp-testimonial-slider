"use strict";

const backward = document.querySelector('[src="./images/icon-prev.svg"]');
const forward = document.querySelector('[src="./images/icon-next.svg"]');
const articleSect = document.querySelector("article > h3");

const firstParagraph = document.querySelector(".nameSect :first-child");
const secondParagraph = document.querySelector(".nameSect :last-child");

// user images
const userImage = document.querySelector('[src="./images/image-tanya.jpg"]');

const images = ["./images/image-tanya.jpg", "./images/image-john.jpg"]; // images.length - 1;

const article = {
  0: `“ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”`,

  1: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`,
};

// console.log(article["0"]);

// manipulating the name section and the speciality section
const fObject = {
  0: "Tanya Sinclair",
  1: "John Tarkpor",
};

const sObject = {
  0: "UX Engineer",
  1: "Junior Front-end Developer",
};

// console.log(article["0"]);

let index = 0;

forward.addEventListener("click", () => {
  // forward.addEventlistener('click', function(){})
  // console.log("I'm the forward button");
  index++; // index = index + 1;
  // console.log(index);

  userImage.src = images[index]; // index = 1;
  userImage.alt = "john's image"; // I purposely hardcoded this
  articleSect.textContent = article[index]; // change the article secion in the DOM
  firstParagraph.textContent = fObject[index]; // changing the firstParagraph section of the DOM
  secondParagraph.textContent = sObject[index]; // changing the secondParagraph section of the DOM

  // console.log(index);
  if (index === images.length) {
    index = 0;
  }
  userImage.src = images[index];
  articleSect.textContent = article[index]; // change the article secion in the DOM
  firstParagraph.textContent = fObject[index]; // changing the firstParagraph section of the DOM
  secondParagraph.textContent = sObject[index]; // changing the secondParagraph section of the DOM
});

backward.addEventListener("click", () => {
  // console.log("I'm the backward button");
  index--; // index = index - 1;
  userImage.src = images[index];
  articleSect.textContent = article[index]; // change the article secion in the DOM
  firstParagraph.textContent = fObject[index]; // changing the firstParagraph section of the DOM
  secondParagraph.textContent = sObject[index]; // changing the secondParagraph section of the DOM
  console.log(index);

  if (index < 0) {
    index = images.length - 1; // index = 1; array are 0 indexed 0, 1
  }
  userImage.src = images[index];
  articleSect.textContent = article[index]; // change the article secion in the DOM
  firstParagraph.textContent = fObject[index]; // changing the firstParagraph section of the DOM
  secondParagraph.textContent = sObject[index]; // changing the secondParagraph section of the DOM
});

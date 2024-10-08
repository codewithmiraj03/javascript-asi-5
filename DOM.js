const pic = document.querySelector("img")

const buttonEl = document.querySelector(".picture")

buttonEl.addEventListener("click", function () {
  pic.setAttribute("src", "file.png")
});


document.querySelector('.Name').addEventListener('click', function() {

  const newName = document.querySelector('input[type="text"]').value;
  
  document.querySelector('h1').textContent = newName;
});

const changeDes = document.querySelector("p");

document.querySelector(".description").addEventListener("click", function(){ 

const changeVal = document.querySelector('input[type="text"]').value;

changeDes.textContent = changeVal;

});

const changeBack = document.querySelector(".container");

document.querySelector(".background").addEventListener("click", function(){ 

  changeBack.style.backgroundColor = "red";

});


document.querySelector(".reset").addEventListener("click", function () {
  
  document.querySelector('h1').textContent = "Miraj Ahmed";

  document.querySelector('p').textContent = "WEB Student";

  document.querySelector('input[type="text"]').value = "";

  document.querySelector('img').setAttribute("src", "");

  document.querySelector(".container").style.backgroundColor = "rgba(128, 128, 128, 0.301)";

});
// ..........................................................................................................


// const changeBack = document.querySelector(".container");

// // Colors ka array
// const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
// let currentIndex = 0; // Current color ka index

// document.querySelector(".background").addEventListener("click", function() { 
//   // Current color ko container ke background mein lagana
//   changeBack.style.backgroundColor = colors[currentIndex];
  
//   // Index ko update karna
//   currentIndex++;

//   // Agar index array ke length se zyada ho jaye, to wapas first color pe le aaye
//   if (currentIndex >= colors.length) {
//     currentIndex = 0; // Index ko reset karna
//   }
// });





// const changeBack = document.querySelector(".container");

// // Counter variable for keeping track of clicks
// let clickCount = 0; 

// document.querySelector(".background").addEventListener("click", function() { 
//   // Change background color based on click count
//   if (clickCount === 0) {
//     changeBack.style.backgroundColor = "red";
//   } else if (clickCount === 1) {
//     changeBack.style.backgroundColor = "blue";
//   } else if (clickCount === 2) {
//     changeBack.style.backgroundColor = "green";
//   } else if (clickCount === 3) {
//     changeBack.style.backgroundColor = "yellow";
//   } else if (clickCount === 4) {
//     changeBack.style.backgroundColor = "purple";
//   } else {
//     changeBack.style.backgroundColor = "orange";
//     clickCount = 0; // Resetting clickCount for the next round
//   }
  
//   clickCount++; // Increment the counter
// });

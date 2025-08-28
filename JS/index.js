//console.log("JavaScript Page Connected Successfully");

// -------- Heart Count Feature -------- //
const countHearts = document.getElementsByClassName("input-heart");
//console.log(countHearts);
for (const heart of countHearts) {
  heart.addEventListener("click", function () {
    const totalHeart = parseInt(
      document.getElementById("total-heartCount").innerText
    );
    const sum = totalHeart + 1;
    document.getElementById("total-heartCount").innerText = sum;
    //console.log(sum);
  });
}

// -------- Get Card Item Function -------- //
function getCardItem(id) {
  const cardID = document.getElementById(id);
  const serviceTitle = cardID.querySelector(".title").innerText;
  const serviceNumber = cardID.querySelector(".number").innerText;
  //console.log(serviceTitle, serviceNumber);
  //alert(`${serviceTitle} calling: ${serviceNumber}`);
  return { serviceTitle, serviceNumber };
}
// -------- Get History Function -------- //
function addToHistory({ serviceTitle, serviceNumber }) {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();

  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-[#FAFAFA] rounded-lg flex justify-between items-center p-3";

  const leftDiv = document.createElement("div");

  const newH2 = document.createElement("h2");
  newH2.className = "font-semibold text-xl";
  newH2.innerText = serviceTitle;

  const newH3 = document.createElement("h3");
  newH3.className = "text-[#5C5C5C] font-medium text-xl";
  newH3.innerText = serviceNumber;

  const newH4 = document.createElement("h4");
  newH4.className = "text-[#5C5C5C] font-medium text-xl";
  newH4.innerText = currentTime;

  leftDiv.appendChild(newH2);
  leftDiv.appendChild(newH3);

  historyItem.appendChild(leftDiv);
  historyItem.appendChild(newH4);

  const historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyItem);
}

// -------- Copy Function -------- //
function handleCopy(number) {
  const totalCopyCount = parseInt(
    document.getElementById("total-copyCount").innerText
  );

  const sum = totalCopyCount + 1;
  document.getElementById("total-copyCount").innerText = sum;

  navigator.clipboard
    .writeText(number)
    .then(() => {
      alert(`The Copied Number is: ${number}`);
    })
    .catch(() => {
      alert("Failed to copy!");
    });
}

// -------- Copy Button Feature -------- //
document.getElementById("card1-btnCopy").addEventListener("click", function () {
  //console.log("card1 Copy Button is Clicked");
  const value = getCardItem("card1");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card2-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card2");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card3-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card3");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card4-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card4");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card5-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card5");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card6-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card6");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card7-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card7");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card8-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card8");
  const number = value.serviceNumber;
  handleCopy(number);
});

document.getElementById("card9-btnCopy").addEventListener("click", function () {
  const value = getCardItem("card9");
  const number = value.serviceNumber;
  handleCopy(number);
});

// -------- Call Button Feature -------- //
// simple process
// document.getElementById("card1-btnCall").addEventListener("click", function () {
//   console.log("National Emergency Number Calling Button Clicked");
//   const card = document.getElementById("card1");
//   const serviceTitle = card.querySelector(".title").innerText;
//   const serviceNumber = card.querySelector(".number").innerText;
//   //console.log(serviceTitle, serviceNumber);
//   //alert(`${serviceTitle} calling: ${serviceNumber}`);

//   const historyItem = document.createElement("div");
//   historyItem.className =
//     "bg-[#FAFAFA] rounded-lg flex justify-between items-center p-3";

//   const leftDiv = document.createElement("div");

//   const newH2 = document.createElement("h2");
//   newH2.className = "font-semibold text-xl";
//   newH2.innerText = serviceTitle;

//   const newH3 = document.createElement("h3");
//   newH3.className = "text-[#5C5C5C] font-medium text-xl";
//   newH3.innerText = serviceNumber;

//   const now = new Date();
//   const currentTime = now.toLocaleTimeString();

//   const newH4 = document.createElement("h4");
//   newH4.className = "text-[#5C5C5C] font-medium text-xl";
//   newH4.innerText = currentTime;

//   leftDiv.appendChild(newH2);
//   leftDiv.appendChild(newH3);

//   historyItem.appendChild(leftDiv);
//   historyItem.appendChild(newH4);

//   const historyContainer = document.getElementById("history-container");
//   historyContainer.appendChild(historyItem);
// });
document.getElementById("card1-btnCall").addEventListener("click", function () {
  const value = getCardItem("card1");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card2-btnCall").addEventListener("click", function () {
  const value = getCardItem("card2");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card3-btnCall").addEventListener("click", function () {
  const value = getCardItem("card3");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card4-btnCall").addEventListener("click", function () {
  const value = getCardItem("card4");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card5-btnCall").addEventListener("click", function () {
  const value = getCardItem("card5");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card6-btnCall").addEventListener("click", function () {
  const value = getCardItem("card6");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});

document.getElementById("card7-btnCall").addEventListener("click", function () {
  const value = getCardItem("card7");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card8-btnCall").addEventListener("click", function () {
  const value = getCardItem("card8");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
document.getElementById("card9-btnCall").addEventListener("click", function () {
  const value = getCardItem("card9");
  alert(`${value.serviceTitle} calling: ${value.serviceNumber}`);
  addToHistory(value);
});
// -------- Clear History Feature -------- //
document.getElementById("btn-clear").addEventListener("click", function () {
  document.getElementById("history-container").innerText = "";
});

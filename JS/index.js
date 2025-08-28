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

// -------- Copy Button Feature -------- //
const copyButtons = document.querySelectorAll(".btn-copy");
//console.log(copyButton);
for (const button of copyButtons) {
  button.addEventListener("click", function () {
    const card = button.closest("div[id]");
    //console.log(card);
    const copyText = card.querySelector(".copy-num").innerText;
    //console.log(copyText);

    const totalCopyCount = parseInt(
      document.getElementById("total-copyCount").innerText
    );

    const sum = totalCopyCount + 1;
    document.getElementById("total-copyCount").innerText = sum;

    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert(`The Copied Number is: ${copyText}`);
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
}

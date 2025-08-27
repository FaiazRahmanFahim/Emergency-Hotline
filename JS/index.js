//console.log("JavaScript Page Connected Successfully");

// -------- Heart Count -------- //
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

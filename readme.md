1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans -
getElementById() – When we use getElementById, we only get one element by calling its ID (using #id).
getElementsByClassName() – When we use getElementsByClassName, we get all elements with a specific class name.
querySelector() – When we use querySelector, it returns only the first element that matches a CSS selector.
querySelectorAll() – When we use querySelectorAll, it returns all elements matching the CSS selector.


2. How do you create and insert a new element into the DOM?

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DOM</title>
  <style>
    body {
      padding: 10px;
      font-family: "Calibri", sans-serif;
    }
    button {
      padding: 10px;
      font-size: medium;
      border: 1px solid gainsboro;
      border-radius: 5px;
      margin: 10px;
    }
    .item {
      border: 2px solid blue;
      background-color: lightcyan;
      margin: 10px;
      padding: 10px;
      border-radius: 5px;
    }
    textarea {
      margin: 10px;
    }
  </style>
</head>
<body>
  <h1>DOM Create and Insert New DOM...</h1>
  <section>
    <div id="container">
      <p class="item">Hello World</p>
      <p class="item">
        We are Going Create and insert a new element into the DOM
      </p>
    </div>
    <textarea id="textArea" cols="100" rows="5"></textarea><br />
    <button id="btn-add">Add</button>
  </section>
  <script>
    document.getElementById("btn-add").addEventListener("click", function () {
      const text = document.getElementById("textArea");
      newText = text.value;
      const addedNewText = document.getElementById("container");
      const newP = document.createElement("p");
      newP.classList.add("item");
      newP.innerText = newText;
      container.appendChild(newP);
      text.value = " ";
    });
  </script>
</body>
</html>


3. What is Event Bubbling and how does it work?

Event bubbling is the process where a child element runs first, then its parent.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
  <script>
    document.getElementById("parent").addEventListener("click", function () {
      console.log("Parent clicked");
    });

    document.getElementById("child").addEventListener("click", function () {
      console.log("Child clicked");
    });
  </script>
</body>
</html>


4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means adding one event listener to the parent instead of many listeners to each child. It saves performance and also works for new elements added later.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans -
preventDefault() – If we use a form and place a button inside it without specifying the type, then that button will act as a submit button. When the form is submitted, the page reloads — this is the default behavior. If we want to stop this default behavior of form submission, we need to use the preventDefault() method.

stopPropagation() – It cannot stop the default behavior of the browser. It only stops the event from bubbling up to parent elements.






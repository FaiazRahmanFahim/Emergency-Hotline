1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Ans- 'getElementById()', When we use getElementById, we only get one Element by calling #ID.
    For Example - getElementById('card1');

    'getElementsByClassName()', When we use getElementsByClassName, we gets all elements with a specific class.

    'querySelector()', When we use querySelector, it only return the first element that matches a CSS selector.

    'querySelectorAll()', When we use querySelectorAll, it returns all elements matching the CSS selector.

2.  How do you create and insert a new element into the DOM?
    Ans -
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
    We are Going Create adnd insert a new element into the DOM
    </p>
    </div>
    <textarea name="" id="textArea" cols="100" rows="5"></textarea><br />
    <button id="btn-add">Add</button>
    </section>
    <script>
    document.getElementById("btn-add").addEventListener("click", function () {
    //console.log(777);
    const text = document.getElementById("textArea");
    //console.log(newText);
    newText = text.value;
    //console.log(newText);
    const addedNewText = document.getElementById("container");
    //console.log(addedNewText);
    const newP = document.createElement("p");
    newP.classList.add("item");
    newP.innerText = newText;
    container.appendChild(newP);

                        text.value = " ";
                    });
                </script>
            </body>

    </html>

3.  What is Event Bubbling and how does it work?
    Ans - Event bubbling is the process where a child element first runs, its parent.
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
      </body>
      <script>
        document.getElementById("parent").addEventListener("click", function () {
          console.log("Parent clicked");
        });

        document.getElementById("child").addEventListener("click", function () {
          console.log("Child clicked");
        });

      </script>
    </html>
    here i called the parent first then the child, but out will child then parent.

4.  What is Event Delegation in JavaScript? Why is it useful?
    Ans - Event Delegation means adding one event listener to the parent instead of many listeners to each child.It saves performance and also works for new elements added later.

5.  What is the difference between preventDefault() and stopPropagation() methods?
    Ans - preventDefault() - If we use a 'form' and place a 'button' inside it without specifying the type, Then that 'button' will act as a submit button. And when the form is submitted the page reload, it is default behavior. If we want to stop this stop the default behavior of form submission, we need to use the preventDefault() method.

    stopPropagation() - It can not stop the default behavior of the browser.

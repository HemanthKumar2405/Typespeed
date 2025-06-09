let main = document.getElementById("speedTypingTest");
main.classList.add("main");
let head = document.createElement("h1");
head.textContent = "Speed Typing Test";
head.classList.add("head", "mb-3");
main.appendChild(head);

let para = document.createElement("p");
para.textContent = "On your fingers lets det Go";
para.classList.add("para", "mb-3");
main.appendChild(para);

let div = document.createElement("div");
div.classList.add("d-flex", "flex-row");
main.appendChild(div);

let img = document.createElement("img");
img.classList.add("one");
img.src = "https://assets.ccbp.in/frontend/dynamic-webapps/clock-img.png";
div.appendChild(img);

let timer = document.createElement("p");
timer.id = timer;
div.appendChild(timer);

let sub = document.createElement("div");
sub.classList.add("sub", "p-3");
main.appendChild(sub);

let paraone = document.createElement("p");
paraone.id = "quoteDisplay";
sub.appendChild(paraone);


let text = document.createElement("textarea");
text.placeholder = "type here";
text.classList.add("area");
text.id = "quoteInput";
sub.appendChild(text);

let paratwo = document.createElement("p");
paratwo.id = "result";
main.appendChild(paratwo);

let butone = document.createElement("button");
butone.classList.add("btn", "btn-primary", "ml-3");
butone.textContent = "submit";
butone.id = "submitBtn";
main.appendChild(butone);


let buttwo = document.createElement("button");
buttwo.classList.add("btn", "btn-danger", "ml-3");
buttwo.textContent = "reset";
buttwo.id = "resetBtn";
main.appendChild(buttwo);


let option = {
    method: "GET",
};


fetch("https://apis.ccbp.in/random-quote", option)
    .then(function(each) {
        return each.json();
    })
    .then(function(eachvalue) {
        paraone.textContent = eachvalue.content;
    });


let count = 0;

let time = setInterval(function(event) {
    timer.textContent = count;
    count = count + 1;
}, 1000);


buttwo.addEventListener("click", function() {
    clearInterval(time);

    let count = 0;
    time = setInterval(function(event) {
        timer.textContent = count;
        count = count + 1;
    }, 1000);

    let option = {
        method: "GET",
    };


    fetch("https://apis.ccbp.in/random-quote", option)
        .then(function(each) {
            return each.json();
        })
        .then(function(eachvalue) {
            paraone.textContent = eachvalue.content;
        });

    text.value = "";
    paratwo.textContent = "";

});


butone.addEventListener("click", function() {
    if (paraone.textContent === text.value) {
        clearInterval(time);
        paratwo.textContent = "";
        paratwo.textContent = "You typed in " + timer.textContent + " Seconds";
    } else {
        paratwo.textContent = "";
        paratwo.textContent = "You typed incorrect Sentence";
    }
});

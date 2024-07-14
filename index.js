let inputBox = document.getElementById("input");
let listContainer = document.getElementById("list");

function writeText() {
    if(inputBox.value==""
    ){
        alert("Add text");

    }else{
    let li = document.createElement("li");
    li.className = 'list-item';
    li.innerHTML = inputBox.value;

    let btn = document.createElement("button");
    btn.innerHTML = "delete";
    li.appendChild(btn);

    listContainer.appendChild(li);
    inputBox.value = '';
}}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}, false);

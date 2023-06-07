let btn = document.getElementById("btn");

btn.addEventListener("click", e => {
    let name = document.getElementById("name").value;
    let names = document.getElementById("list");
    let nameList = [];

    nameList.push(name);
    names.innerHTML += nameList + "<br>";
});
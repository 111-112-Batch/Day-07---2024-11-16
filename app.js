

const names=["saman","kamal","nimal","sunil"];

document.write(names.toString());


console.log(document);

document.getElementById("h1").innerText = names.toString();

let body = "";

for(let name of names){
    body += `<li>${name}</li>`;
    console.log(name);
}

document.getElementById("oList").innerHTML = body;


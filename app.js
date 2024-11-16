


// document.write(names.toString());


// console.log(document);


const names = ["saman", "kamal", "nimal", "sunil"];


function addName() {
    let txtUserInput = document.getElementById("txtInput").value;

    names.push(txtUserInput);
    
    document.getElementById("h1").innerText = names.toString();

    let body = "";

    for (let name of names) {
        body += `<li>${name}</li>`;
    }
    document.getElementById("oList").innerHTML = body;
}





// document.write(names.toString());


// console.log(document);


// const names = ["saman", "kamal", "nimal", "sunil"];


// function addName() {
//     let txtUserInput = document.getElementById("txtInput").value;

//     names.push(txtUserInput);
    
//     document.getElementById("h1").innerText = names.toString();

//     let body = "";

//     for (let name of names) {
//         body += `<li>${name}</li>`;
//     }
//     document.getElementById("oList").innerHTML = body;
// }


// https://fakestoreapi.com/products
let body="";

Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        console.log(element);
        
        body+= `
        <div class="col">
<div class="card shadow-sm" data-aos="flip-left">
  <img src="${element.image}" alt="">
  <div class="card-body">
    <h5 class="card-text">${element.title}</h5>
    <p class="cart-text">${element.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
      </div>
      <small class="text-body-secondary">${element.price}$</small>
    </div>
  </div>
</div>
</div> 
        `;
    });

    document.getElementById("row").innerHTML=body;
})


console.log(body);




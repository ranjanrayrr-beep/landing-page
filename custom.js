"use strict";


let form = document. getElementById("orderForm");

form. onsubmit = function(event){

    event. preventDefault();

let name = document. getElementById("name").value; 
let email = document. getElementById("email").value;
let phone = document. getElementById("phone").value;
let quantity = document. getElementById("quantity").value;

if (name == "" || email == "" || phone == "" || quantity == ""){
    alert("please fill all fields");

        return;

} 

let orderData ={
    name: name,
    email: email,
    phone: phone,
    quantity: quantity,
    message: message

};

fetch("https://script.google.com/macros/s/AKfycbxRjoBqa5TiYgiCVroykLkKLGFpLK-SAf8Wgwvj3RYWkDB-yKk1zxYdp329qRJ8wc8qPg/exec", {

            method: "POST",
            body: JSON.stringify(orderData)

})
   .then(function(response){
       return response.json();
   })
     .then(function(data){
         if(data.status == "success"){

            alert("Order submitted successfully");

            form.reset ();
         }


     })

     .catch(function(error){
         alert("something went wrong");
     });

};



    

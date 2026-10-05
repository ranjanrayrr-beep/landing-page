"use strict";


let form = document. getElementById("orderForm");

form. onsubmit = function(event){

    event. preventDefault();

let name = document. getElementById("name").value; 
let email = document. getElementById("email").value;
let phone = document. getElementById("phone").value;
let quantity = document. getElementById("quantity").value;
let message = document. getElementById("message").value;



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

fetch("https://script.google.com/macros/s/AKfycbyc77FyitcvlEul4TB0bX6mv8ob5ibel3Odua6i3EC6qmBeAa90T6jViCa1nun4AqWygQ/exec", {

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



let image = document. getElementById("moneyplant");

image. onclick = function(){
    if(image.style.width == "500px"){
        image.style.width = "200px";

    } else {
        image.style.width = "500px";

    }



};











    

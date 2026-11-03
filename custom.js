



"use strict";







const plantInput = document.getElementById("plant");

if(plantInput){
    const params = new
    URLSearchParams(window.location.search);
    const plant = params.get("plant");

    if(plant){
        plantInput.value = plant.trim()

    }

}




const images = document.querySelectorAll(".plant-image");


const imageViewer = document.getElementById("imageViewer");
const largeImage = document.getElementById("largeImage");

if (imageViewer  && largeImage ){

    images.forEach(function(image){

        image.addEventListener("click",function(){
            largeImage.src = image.src;

            imageViewer.classList.add("show");

        });


    });

    imageViewer.addEventListener("click", function(){

        imageViewer.classList.remove("show");

    });
    

    }

    

let form = document.getElementById("orderForm");

if (form != null) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let plant = document.getElementById("plant").value;
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;



 let phone = document.getElementById("phone").value;
        let quantity = document.getElementById("quantity").value;
        let message = document.getElementById("message").value;

        if (
            plant == "" ||
            name == "" ||
            email == "" ||
            phone == "" ||
            quantity == ""
        ) {

            alert("Please fill all required fields");
            return;

        }

        let orderData = {

            plant: plant,
            name: name,
            email: email,
            phone: phone,
            quantity: quantity,
            message: message

        };
 fetch("https://script.google.com/macros/s/AKfycbxmt-w996Mt79ca8zpdg-1y1PJHzDvK5qyD2GFaLlydrOap96eeDYbXrkBi9iwfNzxJ/exec", {

            method: "POST",
            body: JSON.stringify(orderData)

        })

        .then(function(response) {

            return response.json();

        })

        .then(function(data) {

            if (data.status == "success") {





  alert("Order submitted successfully");
                form.reset();

            } else {

                alert("Order could not be submitted");

            }

        })
 .catch(function(error) {

            alert("Something went wrong");
            console.log(error);

        });

    });

}






















    


    
            






           

                


            








            



            



            


            



            


        
            











    

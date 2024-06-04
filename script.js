

var arr = JSON.parse(localStorage.getItem(`imageData`)) || [
    {name:"Night View",image:"https://images.unsplash.com/photo-1715619044226-b693312ffb9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"women",image:"https://images.unsplash.com/photo-1715537201090-cd56c588db80?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"china night view",image:"https://images.unsplash.com/photo-1715788334617-e8894105a872?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"old people",image:"https://plus.unsplash.com/premium_photo-1668383209164-16c17a9b1407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];


function showcard(filteredArr){
    var card="";
    filteredArr.forEach(function(obj){
        card +=`  <div class="pic">
        <img src="${obj.image}" class="img3">
        
        <div class="p">${obj.name}</div>
    
    </div> `;
    })
    
    document.querySelector(".hero")
     .innerHTML = card;
    
    
}
function addZoomEffect() {
    const pics = document.querySelectorAll(`.pic`);
    pics.forEach(pic => {
        pic.addEventListener(`mouseover`,function(){
            const img = pic.querySelector(`img`);
            img.classList.add(`zoomed`);
        });
        pic.addEventListener(`mouseout`,function(){
            const img = pic.querySelector(`img`);
            img.classList.remove(`zoomed`);
        });
    });
}
function searchbar(){
    var input = document.querySelector(".search");

    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur" , function(){
        document.querySelector(".overlay").style.display ="none";
    })
   input.addEventListener("input",function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        showcard(filteredArray);
        
    });
    input.addEventListener("keydown",function(event){
        if (event.key === "Enter") {
            input.blur();
        }
    })
 //for button//
    document.addEventListener(`DOMContentLoaded`,function(){
        const button=document.getElementById(`upload`);
        button.addEventListener(`click`,function(){
            button.classList.toggle(`clicked`);
            setTimeout(function(){
                button.classList.remove(`clicked`);
            },200); 
        });
    })
    document.addEventListener(`DOMContentLoaded`,function(){
        const button=document.getElementById(`backbutton`);
        button.addEventListener(`click`,function(){
            button.classList.toggle(`clicked`);
            setTimeout(function(){
                button.classList.remove(`clicked`);
            },200); 
        });
    })
    
   


   document.addEventListener(`DOMContentLoaded`,function(){
    const icons = document.querySelectorAll(`.icon`);
    icons.forEach(icon => {
        icon.addEventListener(`click`,function(){
            icons.forEach(i => i.classList.remove(`active`));
            this.classList.add(`active`);
        });
    });
   });

}
    //for create page//
function createOption() {
    const create = document.querySelector(".create");
    const createform = document.querySelector(".createform");
    const form = document.querySelector(".image-form");

    create.addEventListener("click",function(){
        createform.style.display = "block";
        if(!document.getElementById("backButton")) {
            var backButton = document.createElement("button");
            backButton.id = "backButton";
            backButton.textContent ="Back";
            createform.appendChild(backButton);
            backButton.addEventListener("click",function(){
                createform.style.display = "none";
            });
        }
    });
    
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const imageName = document.getElementById("write").value;
        const imageUrl = document.getElementById("image-url").value;

        arr.push({name:imageName,image:imageUrl});
        localStorage.setItem(`imageData`,JSON.stringify(arr));
        showcard(arr);

        createform.style.display ="none";
        form.reset();
    });
   
    
  

}
    


searchbar();
createOption();
showcard(arr);
addZoomEffect();

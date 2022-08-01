
const insertName = function(){
    const name = document.getElementById("nameInput");
    let newname= document.createElement("li");
    let namelist = document.getElementById("list")
    newname.innerText = name.value
    if(name.value !== ""){
    namelist.appendChild(newname)
    name.value = ""

    }else{
        alert("please write a valid name")
    }
   
          
  
}

function templet(num){
    const cards = document.querySelector(".cards")
    cards.innerHTML +=  `<div class="card">
    <h3> TEAM ${num}</h3>
    <ul class="team-members unlysted-list">
  </ul>
  </div>`
}

const createTeams = function(){
    const inputNumber = document.querySelector(".teams-section input");
    const cards = document.querySelector(".cards")
    inputNumber.value++
templet(inputNumber.value)
    
 
}

const removeTeams = function(){
    const inputNumber = document.querySelector(".teams-section input");
    const cards = document.querySelectorAll(".card")
    const list = document.querySelector("#list")
    let teamscount = parseInt(inputNumber.value)
    let lastCard = cards[cards.length -1]
    let lis = lastCard.querySelectorAll("li")
    for(let li of lis){
        list.appendChild(li)
    }
    if(teamscount > 2){
    inputNumber.value--
    lastCard.remove() 
    }

   
}
let y = 0;
const dividTeams = function(){
const lis = document.querySelectorAll("#list li")
const teamsCount =parseInt (document.querySelector(".teams-section input").value);
const teams = document.querySelectorAll(".card > ul")    
let random = Math.floor(Math.random()* lis.length);


let person = lis[random]

if(person){
     if(y === teamsCount){
         y = 0;
     }
     if(teams[y].children.length === 3){
        y++
     }
    teams[y].appendChild(person)
    y++
}

}

const reset = function(){
document.querySelector("#list").innerHTML = "";
document.querySelector(".teams-section input").value = "2";
document.querySelector(".cards").innerHTML = "";


for( i = 0; i < 2; i++){
    templet(i+1);
}
}



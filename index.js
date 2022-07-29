
const insertName = function(){
    let name = document.getElementById("nameInput").value;
    let newname= document.createElement("li");
    let namelist = document.getElementById("list")
    newname.innerText = name
    namelist.appendChild(newname)
}

const teams = function(){
    let number = document.getElementById("teamsNumber").value;
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < number; i++) {
        cards[i].classList.add("visble")
        
    }
}

const dividTeams = function(){
let names = document.getElementById("list");
let lis = names.getElementsByTagName("li")
 let teams = document.getElementsByClassName("team-members");

for (let i = 0; i < lis.length; i++) {
  let name = document.createElement("li")
  name.innerText = lis[i].innerText
  let y = 0
  teams[y].append(name)
if (teams[y].children.length > 4) {
    y++
}
}

} 


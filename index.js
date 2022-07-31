
const insertName = function(){
    let name = document.getElementById("nameInput").value;
    let newname= document.createElement("li");
    let line = document.createElement("hr")
    let namelist = document.getElementById("list")
    newname.innerText = name
    namelist.append(newname, line)
    if(name === ""){
        alert("you need to write a name ")
    }
    if(namelist.children.length >= 27){
        alert("the max is 18 names")
    }
}

const checkNumber = function(){
    let number = document.getElementById("teamsNumber").value;
    if(number < 1 ){
        alert("you need to use one team at least")
    }else if (number > 6){
        alert("the max is 6 teams")
    }




}
const teams = function(){
    let number = document.getElementById("teamsNumber").value;
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < number; i++) {
        cards[i].classList.add("visble")  
    }    
}
function shuffle() {
    let names = document.getElementById("list");
    let lis = names.getElementsByTagName("li");
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      var temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
const so = function(){
  let names = document.getElementById("list");
  let lis = names.getElementsByTagName("li");
for (let index = 0; index < lis.length; index++) {
    let arrayOfElements = Array.from(lis[index].innerText); 
    
    console.log(arrayOfElements.join(''))
}


}






const dividTeams = function(){
let names = document.getElementById("list");
let lis = names.getElementsByTagName("li");
 let teams = document.getElementsByClassName("team-members");
 let arrayOfElements = Array()
 
for (let i = 0; i < lis.length; i++) {
  let name = document.createElement("li");
  let line = document.createElement("hr")
  arrayOfElements = Array.from(lis[i].innerText);
  name.innerText = arrayOfElements.join('')
  let y = 0;
teams[y].append(name)
for(let team of teams){
  if(teams[y].children.length===4){
      y++
      teams[y].append(name)
}
}
}
} 



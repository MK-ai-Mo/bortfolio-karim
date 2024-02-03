let ul = document.getElementById('ul')
let cls = document.getElementById('cls')
let btn = document.getElementById('btn')

btn.addEventListener('click',function(){
    ul.classList.toggle('active')
    if(btn.classList.contains('fa-bars')){
       btn.classList.replace('fa-bars','fa-xmark')
    }
    else{
        btn.classList.replace('fa-xmark','fa-bars')
    }
})

let swt = document.getElementById("switch");
let purple = document.getElementsByClassName("purple");
let head = document.getElementById("h");
let lore = document.getElementsByClassName("lore");
let card = document.getElementsByClassName("card")

document.body.style.transition = "2s";
head.style.transition = "2s";
swt.addEventListener("click", function () {
  if (swt.classList.contains("fa-sun")) {
    swt.classList.replace("fa-sun", "fa-moon");
    for (let i = 0; i < purple.length; i++) {
      purple[i].style.color = "yellow";
    }
    for (let i = 0; i < lore.length; i++) {
      lore[i].style.color = "white";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "#720455";
    }
    document.body.style.backgroundColor = "#332941";
    head.style.backgroundColor = "#332941";
  } else {
    swt.classList.replace("fa-moon", "fa-sun");
    for (let i = 0; i < purple.length; i++) {
      purple[i].style.color = "";
    }
    for (let i = 0; i < lore.length; i++) {
      lore[i].style.color = "";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "";
    }
    document.body.style.backgroundColor = "";
    head.style.backgroundColor = "";
  }
});
//Variable
const acc = document.getElementsByClassName("accordion");


//loop button and addeventListener
for(let i=0;i<acc.length;i++){
  acc[i].addEventListener("click",function(){    //addEventListener
    this.classList.toggle("active")      //add class to acc
    var panel = this.nextElementSibling; //variable value is panel class
    panel.style.transition = "0.8s";
    if(panel.style.maxHeight){           //if for height panel
      panel.style.maxHeight = null;
    }else{
      panel.style.maxHeight = panel.scrollHeight+"px";    //set maxHeight
    }
  })
}
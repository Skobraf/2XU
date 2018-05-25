var headertop = document.getElementsByClassName("top")[0];
var men = document.getElementsByClassName("men")[0];
var women = document.getElementsByClassName("women")[0];

window.addEventListener("scroll", function(){
  console.log(this.scrollY);
  if (this.scrollY >= 600){
    headertop.classList.add("hide"); 
  }
  else{
    headertop.classList.remove("hide");
  }
  if (this.scrollY >= 410){
    for(let i = 0; i < men.children.length; i++){
      women.children[i].style.opacity = 1.0;
      men.children[i].style.opacity = 1.0;
    }
  }
  else {
    for(let i = 0; i < men.children.length; i++){
      women.children[i].style.opacity = 0.0;
      men.children[i].style.opacity = 0.0;
    }
  }
  
});
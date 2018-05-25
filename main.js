var headertop = document.getElementsByClassName("top")[0];

window.addEventListener("scroll", function(){
  console.log(this.scrollY);
  if (this.scrollY >= 600){
    headertop.classList.add("hide"); 
  }
  else{
    headertop.classList.remove("hide");
  }

  
});
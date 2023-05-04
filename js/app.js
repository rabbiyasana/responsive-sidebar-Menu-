
// passing callbacks
function mainFunction(addingSomething,removesomething){
const show_side_bar = document.getElementById('fa-bars');
const hide_side_bar = document.getElementById("fa-xmark");
const navbar = document.getElementById("navbar");
// calling both callback functions
addingSomething(show_side_bar,navbar)
removesomething(hide_side_bar,navbar)
}

function addClass(show_side_bar,navbar){
  if (show_side_bar) {
    show_side_bar.addEventListener('click' ,()=>{
      navbar.classList.add('active')
     
  })
  }
}

function removeClass(hide_side_bar,hide_side_bar){
if (hide_side_bar) {
  hide_side_bar.addEventListener('click' ,()=>{
    navbar.classList.remove('active')
  
})
}
 }

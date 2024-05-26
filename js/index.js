/*---light---*/
let element = document.getElementById("active");
let light = document.getElementById("light");
let land = document.querySelector('p');

addEventListener("click" , (params) => {
  function toggleBtn() {
    element.classList.toggle("dark");
    light.classList.toggle("btn-dark");
    
}
land.style.color = 'white';
})

/*---light---*/
var typed = new Typed (".meme" , {
    strings:["Variantions coiner"],
    backSpeed: 100,
    typeSpeed: 100,
    loop:true
  })

  
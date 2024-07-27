// const cursorDot = document.querySelector(".cursor-dot");
// const cursorOutline = document.querySelector(".cursor-outline");
// window.addEventListener('mousemove', (e)=> {
//   const posX = e.clientX;
//   const posY = e.clientY;
//   cursorDot.style.left =`${posX}px`;
//   cursorDot.style.top =`${posY}px`;
//   cursorOutline.style.left =`${posX}px`;
//   cursorOutline.style.top =`${posY}px`

//   cursorOutline.animate({
//     left: `${posX}px`,
//     top: `${posY}px`,
//   }, {duration: 500, fill: "forwards"});
// });

var mainCursor = document.querySelector('.main-cursor'),
 mouseX = 0, 
 mouseY = 0

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(mainCursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    })
  }
})

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY
})

logo = document.querySelector('.logo') 
tag = document.querySelector('.main-container h3')
auto = document.querySelector('.main-container h1')
buttons = document.querySelectorAll('.main-btns button')

logo.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-small')
  
})
logo.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-small')
})

tag.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-small')
  
})
tag.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-small')
})

auto.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-big')
  
})
auto.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-big')
})

buttons.forEach(btn => {
  btn.addEventListener ('mousemove', () => {
    mainCursor.classList.add('grow-mid')
  })
  btn.addEventListener ('mouseleave', () => {
    mainCursor.classList.remove('grow-mid')
  })
});
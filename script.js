// cursor effect

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

const logo = document.querySelector('.logo') 
const tag = document.querySelector('.main-container h3')
const auto = document.querySelector('.main-container h1')
const buttons = document.querySelectorAll('.main-btns button')
const teamHead = document.querySelector('.team-section .head')
const infoText = document.getElementById('info-text')
const posText = document.getElementById('position-text')
const clientText = document.querySelector('.clients-section p')
const logos = document.querySelector('.logos')
const contactSection = document.getElementById('contact-section')
const contactHead = document.querySelector('.contact-section .head')
const contactDetails = document.querySelectorAll('.detail')

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

teamHead.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-mid')
})
teamHead.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-mid')
})

infoText.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-mid')
})
infoText.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-mid')
})

posText.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-small')
})
posText.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-small')
})

clientText.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-mid')
})
clientText.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-mid')
})

logos.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-none')
})
logos.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-none')
})

contactSection.addEventListener("mousemove", () => {
  mainCursor.classList.add('color-change')
})
contactSection.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('color-change')
})

contactHead.addEventListener("mousemove", () => {
  mainCursor.classList.add('grow-mid')
})
contactHead.addEventListener("mouseleave", () => {
  mainCursor.classList.remove('grow-mid')
})

contactDetails.forEach(detail => {
  detail.addEventListener('mousemove', () => {
    mainCursor.classList.add('grow-small')
  })
  detail.addEventListener('mouseleave', () => {
    mainCursor.classList.remove('grow-small')
  })
})

// info display in team section
const positionText = document.getElementById('position-text')

document.querySelectorAll('.team-member').forEach(member => {
  member.addEventListener('mouseenter', () => {
    mainCursor.classList.add('grow-none');
    const info = member.getAttribute('data-info')
    const position = member.getAttribute('data-position')
    gsap.to(infoText, {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        infoText.textContent = info
        positionText.textContent = position
        gsap.to(infoText, {
          duration: 1,
          opacity: 1
        })
        gsap.to(positionText, {
          duration: 1,
          opacity: 1
        })
      }
    })
  })
  member.addEventListener('mouseleave', () => {
    mainCursor.classList.remove('grow-none');
    // gsap.to(infoText, {
    //   duration: 0.2,
    //   opacity: 0,
    //   onComplete: () => {
    //     infoText.textContent = 'General 2000 Communications'
    //     positionText.textContent = ""
    //     gsap.to(infoText, {
    //       duration: 0.5,
    //       opacity: 1
    //     })
    //     gsap.to(positionText, {
    //       duration: 0.5,
    //       opacity: 1
    //     })
    //   }
    // })
  })
})
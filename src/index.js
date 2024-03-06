import './styles/GT.CSS'
import navImg from './assets/gtfood.jpeg'
import slideA from './assets/img1.jpg'
import slideB from './assets/img2.jpg'
import slideC from './assets/img3.jpg'
import slideD from './assets/imgg1.jpg'


const nav = document.getElementById('logoImg')
nav.src = navImg

const slide = document.getElementById('img1')
slide.src  = slideA

const slide2 = document.getElementById('img2')
slide2.src  = slideB
const slide3 = document.getElementById('img3')
slide3.src  = slideC
const slide4 = document.getElementById('img4')
slide4.src  = slideD


let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000); 



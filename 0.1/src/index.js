import $ from 'jquery'

$('#title').click(() => {
  $('body').css('backgroundColor', 'deeppink')
})

import './index.less'

import img from './assets/Snipaste_2022-03-25_00-07-05.png'

function add(x, y) {
  return x + y
}

const iconDom = document.querySelector('.icon3')
iconDom.src = img

console.log(add(1, 2))
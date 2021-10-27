'use strict'

const btn = document.querySelector('.btn')
const imagesDB = ['./assets/images/img6.jpeg', './assets/images/img5.jpeg'];

const img = document.getElementById('img')
const attr = document.createAttribute('src')

attr.value = imagesDB[0];

img.setAttributeNode(attr);

const toggleAttr = () => attr.value  = attr.value  === imagesDB[0] ? imagesDB[1] : imagesDB[0];


btn.addEventListener('click', toggleAttr)


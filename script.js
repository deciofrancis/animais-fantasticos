const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})
itensMenu[0].classList.add('ativo');

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
})

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
console.log(link);
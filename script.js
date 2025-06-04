const list = document.querySelector('ul')
const buttonMenu = document.querySelector('.menu')

let newList = ''

const optionMenu = () => {

    menuOptions.forEach(product => {
    newList = newList + 
    `
        <li>
            <img src= ${product.src}>

            <p> ${product.name}</p>
            <p class="value">R$ ${product.price.toFixed(2)}</p>
        </li>
    `
})

list.innerHTML = newList

}

buttonMenu.addEventListener('click', optionMenu)
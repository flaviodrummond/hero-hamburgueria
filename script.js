const list = document.querySelector('ul')
const buttonMenu = document.querySelector('.menu')
const buttonDiscount = document.querySelector('.discount')

let newList = ''

const optionMenu = (productsArray) => {

    newList = ''

    productsArray.forEach(product => {
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

const newPrice = () => {
    const discountedPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9 // dar 10% de desconto
    }))
    optionMenu(discountedPrice)
}




buttonMenu.addEventListener('click', () => optionMenu(menuOptions))
buttonDiscount.addEventListener('click', newPrice)
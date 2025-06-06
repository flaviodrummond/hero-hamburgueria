const list = document.querySelector('ul')
const buttonMenu = document.querySelector('.menu')
const buttonDiscount = document.querySelector('.discount')
const buttonTotalValue = document.querySelector('.total-value')
const buttonFilter = document.querySelector('.search')

let newList = ''

// Função para colocar a formatação da moeda a frente dos valores. ex:R$
const currency = (coin) => {
    return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(coin);
}

// Criação do ForEach 
const optionMenu = (productsArray) => {

    newList = ''

    productsArray.forEach(product => {
        newList = newList +
            `
        <li>
            <img src= ${product.src}>

            <p> ${product.name}</p>
            <p class="value"> ${currency (product.price.toFixed(2))}</p>
        </li>
    `
    })

    list.innerHTML = newList
}

// Criação do Map, pegar cada item da nossa lista array e dá um desconto de 10% em cada produto da lista e colocar na tela para o usuário final. 
const newPrice = () => {
    const discountedPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9 // dar 10% de desconto
    }))
    optionMenu(discountedPrice)
}

// Criação do reduce para pegar todos os produtos existentes em nossa lista e colocar o valor total na tela para o usuário final.
const finalPrice = () => {
    const totalPrice = menuOptions.reduce((acc, value) => {
        return acc + value.price;
    }, 0)

    list.innerHTML =
        `
        <li>
            <p> O valor total de todos os produtos é de ${currency (totalPrice.toFixed(2))}</p>
        </li>
    `

}

// Criação do filter para filtrar os produtos mais pedidos pelos clientes do nosso array e colocar na tela para o cliente final
const search = () => {
    const salesChampions = menuOptions.filter(product => product.bestSellers === true) 

    optionMenu(salesChampions)
}





buttonMenu.addEventListener('click', () => optionMenu(menuOptions))
buttonDiscount.addEventListener('click', newPrice)
buttonTotalValue.addEventListener('click', finalPrice)
buttonFilter.addEventListener('click', search)
const product = [
    {
        id: 1,
        name: 'shirt',
        color: 'red'
    },
    {
        id: 2,
        name: 'shirt',
        color: 'green'
    },
    {
        id: 3,
        name: 'shirt',
        color: 'red'
    },
    {
        id: 4,
        name: 't-shirt',
        color: 'green'
    },
    {
        id: 5,
        name: 't-shirt',
        color: 'black'
    }
]
const buttonClick = () =>{
    const filter = document.getElementById("filter").value;
    const name = document.getElementById("name").value;
    const newProduct = product.filter(data => data.name === name);
    const lastProduct = newProduct.filter(data => data.color === filter)
    console.log(lastProduct)
}
import React from 'react';

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
const react = () => {
    const [filter, setFilter] = useState();
    const [name, setName] = useState();
    const buttonClick = () => {
        // const newProduct = product.filter(data => data.name === name);
        // const lastProduct = newProduct.filter(data => data.color === filter)
        // console.log(lastProduct)
        const url = `http://localhost:/5000/product?name=${name}&filter=${filter}`;
        fetch(url).then(res=>res.json()).then(data=>console.log(data))
    }

    return (
        <div>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                <select name="filter" id="filter" onChange={(e) => setFilter(e.target.value)}>
                    <option value="black">black</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                </select>
                <button type="" onClick={()=>buttonClick()}>submit</button>
        </div>
    );
};

export default react;
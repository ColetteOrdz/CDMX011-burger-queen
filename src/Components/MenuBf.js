import React from 'react';
// import React, {useState} from 'react';
import Data from '../Data/menu.json'
import './Styles/Cards.css';
// import AddItem from './AddItem';
// import TotalItems from './TotalItems';

function MenuBf() {
const breakfast = Data.items.filter(item => item.category === "Desayuno")
// const [cost, setCost] = useState(0)
// const [keyItem, setKeyItem] = useState(0)

// const catchvalue = (e, k) => {
//     console.log(e)
//     setCost(e)
//     setKeyItem(k)

// }

return (
    <section className="op-container-bf">
        {breakfast.map(({name, price, id, }) => {
        return (
            <button className= "add-bf" key={name} id = {id} price = {price}> 
                {name} <br/> ${price}
            </button>

        )
        })}                   

    </section>
      
)
}

export default MenuBf

/* <table className="menu-bf">
                <thead>
                    <tr>
                        <th>Platillo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {breakfast.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <AddItem 
                                    //propiedad = {funcion, string, booleano, etc}
                                       sendvalue={catchvalue}
                                       keyI={i}
                                    />
                                </td>
                                <td>
                                       <TotalItems
                                           price={item.price}
                                           cost={cost}
                                       />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */
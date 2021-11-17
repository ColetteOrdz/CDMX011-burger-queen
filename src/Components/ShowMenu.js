import React, { useState } from 'react';
import MenuBf from './MenuBf';
import MenuMeals from './MenuMeal';
import './Styles/ShowMenu.css';

function ShowMenu(props) {
  //Se declara lo que quiero que cambie
  const [typeOfFood, setTypeOfFood] = useState('Desayuno');

    //Cachar el nombre del cliente y mesa
    const handleInputChange = (e) => {
      const {name, value} = e.target;
      //console.log(name, value)
      setValues({...values, [name]: value})     
    };

    //Estado inicial de la toma de orden
    const initialStateValues = {      
      client: '',
      table: '',
      category: '',
      order: [],
      total: 0    
    };
    const [values, setValues] = useState(initialStateValues);
    //console.log(values.client)

    //Enviar datos del formulario y resetear
    const handleSubmit = (e) => {
      e.preventDefault()
      //console.log(values)
      props.addOrEdit(values);
      setValues({...initialStateValues})
    };
    const selectCategory = (e) => {
      setTypeOfFood(e.target.value)
      handleInputChange(e)
    }
    
    return (
      <div id="menu-container">
        <div id="btn-options">
          <input type="button" className="btn-op menu-bf" name="category" value="Desayuno" onClick={selectCategory}/>
          <input type="button" className="btn-op menu-m" name="category" value="Comida" onClick={selectCategory}/>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <div id="order">
          <label>Cliente: </label> 
          <input 
            type="text" 
            name="client"
            value={values.client}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          <label>Mesa: </label>           
          <input id="input-table" name="table" value={values.table} onChange={handleInputChange} type="text" placeholder="0" ></input>
          {/* <p>Conteo: {count}</p>           */}
        </div>
        <div id="menu">
          {
            typeOfFood === 'Desayuno'? <MenuBf/>:<MenuMeals/>
          }
        </div>
        <section id="resumen">
          <div id="resumen-header">
            <label className="resume-values">Cliente: {values.client}</label>
            <label className="resume-values">Mesa: {values.table}</label>
            <label className="resume-values">{values.category}</label>
          </div>
          <hr/>
          <div id="items">
            {/* Aquí se insertarían los platillos, no sé si sea mejor hacer un componente de esto Dx */}
          </div>
        </section>
        <div id="btn-send">
          <button className="btn-op cancel" >Cancelar</button>
          <button className="btn-op confirm" type="submit" onClick={handleSubmit} >Confirmar</button>
        </div>
        {/* </form> */}
      </div>  
    )  
}

export default ShowMenu

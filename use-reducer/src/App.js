import React, {useReducer, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {reducer, ACTION_ADD, ACTION_EDIT} from './Component/Reducer';
import './App.scss';

// Crear un nuevo proyecto, donde vamos a tener textos mostrando un state (de un useReducer),
//  que va a ser un objeto de forma:
// { name: "Company Name", address: "Av. San Martin 192", category: "IT" }

// Hacer un reducer que me permita editar este objeto. 
// No va a ser un array, solo un objeto. Usar spread operator,
//  y las cases necesarias para editar cada uno de los campos.

let userId = 1;

function App() {

const [state, dispatch] = useReducer(reducer, []);
const [name, setName] = useState('');
const [adress, setAdress] = useState();
const [category, setCategory] = useState();

const [editName, setEditName] = useState('');
const [editAdress, setEditAdress] = useState();
const [editCategory, setEditCategory] = useState();
const [editId, setEditId] = useState();


const añadir = () => {
 const payload = {
    userId,
    name, 
    adress, 
    category
  }
  userId++
  
  dispatch({
    type: ACTION_ADD, payload
  })
  console.log('esto es state', state)
}

const editar = () => {
  dispatch({
    type: ACTION_EDIT, payload: { id:parseInt(editId), editName, editAdress, editCategory }
  })
}



return(
  <React.Fragment> 

  <div>
    {
      state.map(item => {
        return(
          <div>
            <h2>{item.userId}</h2>
            <h2>{item.name}</h2>
            <h2>{item.adress}</h2>
            <h2>{item.category}</h2>
            </div>
        )
      })
    }

  </div>

  <div>
      <input type="text" placeholder="nombre" onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="direccion" onChange={e => setAdress(e.target.value)} />
      <input type="text" placeholder="categoria" onChange={e => setCategory(e.target.value)} />
      <button type="button" onClick={añadir}>
        Añadir
      </button>
    </div>

    <div>
    <input type="text" placeholder="nombre" onChange={e => setEditName(e.target.value)} />
      <input type="text" placeholder="direccion" onChange={e => setEditAdress(e.target.value)} />
      <input type="text" placeholder="categoria" onChange={e => setEditCategory(e.target.value)} />
      <input type="text" placeholder="id" onChange={e => setEditId(e.target.value)} />
      <button type="button" onClick={editar}>
        Editar
      </button>
    </div>
    </React.Fragment>
  )

}

export default App;

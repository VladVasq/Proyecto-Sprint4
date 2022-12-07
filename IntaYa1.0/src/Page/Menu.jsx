import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import NewOrder from './NewOrder';
import ListarOrdenes from './ListarOrdenes'

export const Menu = (usuario) => {
const[miNew, setNew]=useState("")
const[miListar, setListar]= useState("");

function CerrarSesion(){
  localStorage.removeItem("token");
  //localStorage.removeItem("usuario");
  localStorage.removeItem("id");
  window.location="/";
}

function opNeworden(){
    setNew("1");
    setListar("0");
     
  }
  function opListar(){
    setNew("0");
    setListar("1");
      
  }
    return (
      <div>
           <div className="container-fluid"  style={{textAlign:"left",background:"#dae6ec7e"}}>
      <strong className="h3"> Bienvenido Usuario: </strong> 
      <header>
        
        <b><ul className="nav justify-content-end" >
           
           <NavLink to="/Menu" className="nav-link  h5  text-center" onClick={opListar}  >ListaOrdenes</NavLink>       
           <NavLink to="/Menu" className="nav-link  h5  text-center" onClick={opNeworden} >NewOrder</NavLink>
           <NavLink to="/Menu" className="nav-link  h5  text-center" onClick={CerrarSesion} >LogOut</NavLink>

           </ul>
        </b> 
    
</header>
        {miNew === "1" && <NewOrder/>}
        {miListar === "1" && <ListarOrdenes/>}
      </div>
      
    </div>
  )
}

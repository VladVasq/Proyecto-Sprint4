import React, { Component } from 'react'
import Footer from '../components/Footer'
import Imagen from '../components/Imagen'
import { Api } from '../Service/Api';
import axios from 'axios'

var infUser = localStorage.getItem("id");


export default class ListarOrdenes extends Component {

  state={
    orders:[]

}
opActualizar(id){
  window.location= `/Actualizar/ ${id}`
  //this.props.history.push("/Actualizar/"+ id)

}

componentDidMount(){
  let url= Api + "api/orders"
  console.log(url)
  axios.get(url)
  .then(res =>{ 
    this.setState({
        orders:res.data}
    )
  })
}

  render() {
    return (
    <div>
      <div className="container" style={{background:"#dae6ec7e",width : "1180px" , height:"auto", padding: "10px" }} id= "ListaOrdenes">
          <div className="row align-items-center">
              <div className="col">  
                  <Imagen />
              </div>
              <div className="col">
              <div>
                <h3 className="h3" style={{textAlign:"center"}}><strong><br/>
                      Listado De Ordenes</strong>
                  </h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col"># orden</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad Entrega</th>
                        <th scope="col">DireccionEntrega</th>
                        <th scope="col">Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((value,index)=>{
                          if(value.id_user===infUser){
                            return(
                              <tr key={index} >  
                                  <th id="register-link" className="text-center">
                                  <a color="blue" href="#"  className="text-decoration-none" onClick={()=>this.opActualizar(value._id)}>{index+1}</a></th>
                                  <td>{value.date}</td>
                                  <td>{value.CiudadEnvio}</td>
                                  <td>{value.DirEnvio}</td>
                                  <td>{value.Estado}</td>
                                  </tr>
                            )
                          }
                          })
                         }
                          
                    </tbody>
                  </table>
              </div>
              </div><br/>                
          </div>
      </div>
    <Footer/>
  </div>
    )
  }
}


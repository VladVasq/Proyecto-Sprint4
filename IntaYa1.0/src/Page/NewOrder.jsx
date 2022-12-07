import React, { Component } from 'react'
import Footer from '../components/Footer'
import { Api } from '../Service/Api';
import axios from 'axios'

var infUser = localStorage.getItem("id");
 console.log(infUser);
export default class NewOrder extends Component {
 
  state={
    form:{
      id_user: infUser,
      date:"",
      hours:"", 
      largo:"",
      Ancho:"",
      Alto:"",
      peso:"",
      Delicado:"",
      DirRecogida:"",
      CiudadRecogida:"",
      usuarioEnviado:"",
      DocRem:"",
      DirEnvio:"",
      CiudadEnvio:"",
      Estado:"guardado"
    },
    error: false,
    errorMsg: "Los datos no se guardaron correctamente"
}

manejadorSubmit=e=>{
        e.preventDefault();
    }

manejadorChange= async e =>{
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]:e.target.value
        }
    })
    
}
presionarBoton=()=>{
    
    let url= Api + "api/orders";
    axios.post(url,(this.state.form))
    .then(res=>{
      console.log(res)
      if(res== res){
        window.location="/Menu";
          alerta("Orden Creada correctamente")          
      }else{
          this.setState({
              error:true,
              errorMsg: res.data.mensaje
          })
      }
    }).catch( error =>{
        console.log(error);
        this.setState({
            error:true,
            errorMsg:"Error, problemas con la conexion"
        })
    })
  }

  render() {
    return (
      <div>
      <div className="container-fluid" style={{background:"#dae6ec7e", padding:"40px", fontsize:"small"}}>
      <div>
                <form id="Neworden" onSubmit={this.manejadorSubmit} >
          
          <h2 className="text-center" style={{color:"blue"}}><b>NEW ORDEN</b></h2><br/>
          
          <b><label htmlFor="start" >Start date:</label>
          <input type="date" id="start" name="date"
              min="1900-01-01" max="2100-12-31" onChange={this.manejadorChange} required/>             
          <label htmlFor="start" >Start time:</label>
          <input type="time" name="hours" min="8:00" max="21:00" step="60" onChange={this.manejadorChange} required/><br/>
          <br/><h4><strong>Product Dimensions</strong></h4>
          <label>Length  (cm)</label>
          <input type="number" name="largo" style={{width :"100px"}} onChange={this.manejadorChange} required/>
          <label>Width (cm)</label>
          <input type="number" name="Ancho" style={{width :"100px"}} onChange={this.manejadorChange} required/> 
          <label>Tall (cm)</label>
          <input type="number" name="Alto" style={{width :"100px"}} onChange={this.manejadorChange} required/>
          <label>Weight(gr)</label>
          <input type="number" name="peso" style={{width :"100px"}} onChange={this.manejadorChange} required/><br/>
          <br/><a>Delicate:
          <input type="radio" required name="Delicado" id="r1" value="yes"onChange={this.manejadorChange} /><label htmlFor="r1">Sí</label>
          <input type="radio" required name="Delicado" id="r2" value="no" onChange={this.manejadorChange} /><label htmlFor="r2">No</label>
          <br/></a></b>
          <br/><h4><strong>Collection and delivery data</strong></h4>
                    
          <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Direccion de recogida</strong></label>
                <input type="text" name="DirRecogida" id="name" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Ciudad de Recogida</strong></label>
                <input type="text" name="CiudadRecogida" id="CiudadRecogida" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInput"  className="form-label"><strong>Usuario A enviar</strong></label>
                <input type="text" name="usuarioEnviado" id="usuarioEnviado" className="form-control" onChange={this.manejadorChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Identificacion </strong></label>
                <input type="text" name="DocRem" id="DocRem" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Direccioin de Envio</strong></label>
                <input type="text" name="DirEnvio" id="DirEnvio" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInput"  className="form-label"><strong>Ciudad de envio</strong></label>
                <input type="text" name="CiudadEnvio" id="CiudadEnvio" className="form-control" onChange={this.manejadorChange} required/>
            </div>
            <button type="submit" className="btn btn-primary" value="submit"onClick={this.presionarBoton}>Submit</button>
             
             </form>
             {this.state.error === true &&
               <div className="alert alert-warning" role="alert">
                   {this.state.errorMsg}
                   </div>}
       
            </div>
      </div> 
      <Footer />
    </div>
    )
  }
}

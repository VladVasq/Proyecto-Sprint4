import React, { Component } from 'react'
import { Api } from '../Service/Api'
import axios from 'axios'

var infUser = localStorage.getItem("id");

export default class Actualizar extends Component {
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
      Estado:"",
      idOrder:""
    },
    error: false,
    errorMsg: "Los datos no se guardaron correctamente"
}
manejadorSubmit=e=>{
  e.preventDefault();
}
manejadorRegreso=e=>{
  window.location="/Menu";
}
manejadorChange= async e =>{
  await this.setState({
      form:{
          ...this.state.form,
          [e.target.name]:e.target.value
      }
  })
 
}

presionar=()=>{
  console.log(this.state.form)
  let orderId= this.props.match.params.id;   
  const texto =`api/orders/${orderId}`
  let U = texto.replace(/\s+/g, '') 
  let url= Api+U
  console.log(url)
  axios.put(url,this.state.form)
  .then(res=>{
    console.log(res)
    if(res.data ==="Orden Actualizada"){
      //this.props.history.push("/Menu")
      window.location="/Menu"
    }else{
      this.setState({
        error:true,
        errorMsg: res.data.mensaje
    })
    }
  })
}
 componentDidMount(){
  
    let orderId= this.props.match.params.id;   
    const texto =`api/orders/${orderId}`
    let U = texto.replace(/\s+/g, '') 
    let url= Api+U
    console.log(url)
    axios.get(url)
    .then(res=>{
      console.log(res)
      this.setState({
        form:{
          date:res.data.date,
          hours:res.data.hours, 
          largo: res.data.largo,
          Ancho: res.data.Ancho,
          Alto:res.data.Alto,
          peso:res.data.peso,
          Delicado:res.data.Delicado,
          DirRecogida:res.data.DirRecogida,
          CiudadRecogida:res.data.CiudadRecogida,
          usuarioEnviado:res.data.usuarioEnviado,
          DocRem:res.data.DocRem,
          DirEnvio:res.data.DirEnvio,
          CiudadEnvio:res.data.CiudadEnvio,
          Estado:res.data.Estado,
          idOrder:orderId
        }
       
      })
    })
    }
  
  render() {const form=this.state.form
    return (
      <div>
        <div className="container-fluid" style={{background:"#dae6ec7e", padding:"40px", fontsize:"small"}}>
        <div>
          <form id="Neworden" onSubmit={this.manejadorSubmit} >
          
          <h2 className="text-center" style={{color:"blue"}}><b>ACTUALIZAR ORDER</b></h2><br/>
          <b><label>Id Order</label>
          <input type="Text" value={form.idOrder} className="form-control" name="idOrder"  required/><br/>
          <label htmlFor="start" >Start date:</label>
          <input type="text" id="start" name="date" value={form.date}
              min="1900-01-01" max="2100-12-31"  onChange={this.manejadorChange} />             
          <label htmlFor="start" >Start time:</label>
          <input type="text"  value={form.time} name="hours" min="8:00" max="21:00" step="600" onChange={this.manejadorChange} /><br/>
          <label>Estado</label>
          <input type="Text" value={form.Estado} name="Estado" style={{width :"100px"}} onChange={this.manejadorChange} required/>
          <br/><h4><strong>Product Dimensions</strong></h4>
          <label>Length  (cm)</label>
          <input type="number" name="largo" value={form.largo}style={{width :"100px"}} onChange={this.manejadorChange} required/>
          <label>Width (cm)</label>
          <input type="number" name="Ancho" value={form.Ancho} style={{width :"100px"}} onChange={this.manejadorChange} required/> 
          <label>Tall (cm)</label>
          <input type="number" name="Alto" value={form.Alto} style={{width :"100px"}} onChange={this.manejadorChange} required/>
          <label>Weight(gr)</label>
          <input type="number" name="peso" value={form.peso} style={{width :"100px"}} onChange={this.manejadorChange} required/><br/>
          <br/><label>Delicate</label>
          <input type="text" name="Delicado" value={form.Delicado} style={{width :"100px"}} onChange={this.manejadorChange} required/><br/>
          <br/></b>
          <br/><h4><strong>Collection and delivery data</strong></h4>
                    
          <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Direccion de recogida</strong></label>
                <input type="text" name="DirRecogida" id="name" value={form.DirRecogida} className="form-control" onChange={this.manejadorChange} aria-describedby="emailHelp"  required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Ciudad de Recogida</strong></label>
                <input type="text" name="CiudadRecogida" id="CiudadRecogida" value={form.CiudadRecogida} className="form-control" onChange={this.manejadorChange} aria-describedby="emailHelp"  required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInput"  className="form-label"><strong>Usuario A enviar</strong></label>
                <input type="text" name="usuarioEnviado" id="usuarioEnviado" value={form.usuarioEnviado} onChange={this.manejadorChange} className="form-control" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Identificacion </strong></label>
                <input type="text" name="DocRem" id="DocRem" className="form-control" value={form.DocRem} onChange={this.manejadorChange} aria-describedby="emailHelp"  required/>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>Direccioin de Envio</strong></label>
                <input type="text" name="DirEnvio" id="DirEnvio" className="form-control" value={form.DirEnvio} onChange={this.manejadorChange} aria-describedby="emailHelp"  required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInput"  className="form-label"><strong>Ciudad de envio</strong></label>
                <input type="text" name="CiudadEnvio" id="CiudadEnvio" value={form.CiudadEnvio} className="form-control" onChange={this.manejadorChange} required/>
            </div>
            <button type="submit" className="btn btn-primary" value="submit" onClick={this.presionar}>Actualizar</button>
            <button type="submit" className="btn btn-secondary" value="submit" onClick={this.manejadorRegreso}>Regresar</button>
             
             </form>
             {this.state.error === true &&
               <div className="alert alert-warning" role="alert">
                   {this.state.errorMsg}
                   </div>}
       
            </div>
            </div>
      </div>
    )
  }
}

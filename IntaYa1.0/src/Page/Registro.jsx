import React, { Component } from 'react'
import Footer from '../components/Footer'
import Imagen from '../components/Imagen'
import { Api } from '../Service/Api';
import axios from 'axios'

export default class Registro extends Component {

  state={
    form:{
        name:"",
        usuario:"",
        password:"",
        email:""
    },
    error: false,
    errorMsg: ""
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
    console.log(this.state.form)
    let url= Api + "api/users";
    axios.post(url,(this.state.form))
    .then(res=>{
        console.log(res)
        if(res.data ==="Usuario Creado"){
            window.location="/"
            this.props.state.push("/")
            alerta("Usuario Creado correctamente: Bienvenido usuario")          
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
        <div className="container-fluid" style={{background:"#dae6ec7e", padding: "10px" }}>
            
            <div className="row align-items-center">
                <div className="col">  
                    <Imagen />
                </div>
                <div className="col">
                <form id="registro" onSubmit={this.manejadorSubmit}>
                    <h2 className="text-center" style={{color:"blue"}}>REGISTRATION FORM</h2>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label"><strong>Name</strong></label>
                        <input type="text" name="name" id="name" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label"><strong>Username</strong></label>
                        <input type="text" name="usuario" id="usuario" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1"  className="form-label"><strong>Password</strong></label>
                        <input type="password" name="password" id="password" className="form-control" onChange={this.manejadorChange} required/>
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                        </span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label"><strong>Email</strong></label>
                        <input type="email" name="email" id="email" className="form-control"aria-describedby="emailHelp" onChange={this.manejadorChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary" value="submit"onClick={this.presionarBoton}>Submit</button>
                    
                  </form>
                  {this.state.error === true &&
                    <div className="alert alert-warning" role="alert">
                        {this.state.errorMsg}
                        </div>}
                </div>                
            </div>           
        </div>
        <Footer/>
    </div>
    )
  }
}

import React, { Component } from 'react';
import Footer from '../components/Footer';
import Imagen from '../components/Imagen';
import { Api } from '../Service/Api';
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props);
        }
    state={
        form:{
            usuario:"",
            password:""
        },
        error: false,
        errorMsg: ""
    }
    opRegistro(){
        this.props.state.history.push("/Registro")
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
        console.log(this.state.form)
    }
    presionarBoton=()=>{
        let url= Api + "login";
        axios.post(url,(this.state.form))
        .then(res=>{
            console.log(res)
            if(res.data.mensaje === "Usuario logeado correctamente"){
                localStorage.setItem("token",res.data.usuario.token);
                localStorage.setItem("id",res.data.usuario.id);
                localStorage.setItem("usuario",res.data.usuario.usuario.usuario);
                this.props.history.push("/Menu");
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
         <div >
              <div id="login">
                <div className="container-fluid"style={{background:"#dae6ec7e"  , padding: "10px" }} >
                <p className="text-center">
                            <strong> Welcome to our application, you can make your shipments with confidence and security</strong>
                        </p><br/>
                    <div className="row align-items-center">
                        <div className="col">  
                            <Imagen/>
                        </div>
                        <div className="col">
                    
                        <div id="register-link" className="text-end">
                            <a color="blue" href="/Registro"  className="text-decoration-none" onClick={this.opRegistro} >Creat your account</a>
                        </div>
                        <form id="login1" onSubmit={this.manejadorSubmit}>
                            <div className="mb-3">
                                <h2 className="text-center" style={{color:"blue"}}>LOGIN</h2>
                                <label htmlFor="username" className="form-label"><strong>Username</strong></label>
                                <input type="text" onChange={this.manejadorChange} name="usuario"  id="username" className="form-control"aria-describedby="emailHelp"   required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1"  className="form-label"><strong>Password</strong></label>
                                <input type="password" onChange={this.manejadorChange} name="password" id="password" className="form-control"    required/>
                            </div>
                            <div className="col-auto">
                                <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                                </span>
                            </div><br/>
                            <button type="submit" className="btn btn-primary" value="submit" onClick={this.presionarBoton} >Submit</button>
                        </form>
                        {this.state.error === true &&
                        <div className="alert alert-warning" role="alert">
                            {this.state.errorMsg}
                            </div>}
                        </div><br/>                
                    </div>   
                    
                </div>
                <Footer/>
              </div>        
             
         </div>
        );
    }
}

export default Login;

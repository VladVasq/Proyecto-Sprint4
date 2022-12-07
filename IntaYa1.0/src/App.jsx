import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch,Route,Link} from 'react-router-dom';
import Login from './Page/Login'
import Actualizar from './Page/Actualizar';
import NewOrder from './Page/NewOrder';
import Registro from './Page/Registro';
import {Menu} from './Page/Menu'


function App() {
 

  return (
    <Router>
      <Switch>
      <Route path="/" exact render={ props =>(<Login {...props}/>)}></Route>
      <Route path="/Menu" exact render={ props =>(<Menu {...props}/>)}></Route>
      <Route path="/Actualizar/:id" exact render={ props =>(<Actualizar {...props}/>)}></Route>
      <Route path="/NewOrder" exact render={ props =>(<NewOrder {...props}/>)}></Route>
      <Route path="/Registro" exact render={ props =>(<Registro {...props}/>)}></Route>
      </Switch>
    </Router>
  )
}


export default App

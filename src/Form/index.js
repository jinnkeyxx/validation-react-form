import React , {lazy , Suspense} from 'react'
import { Spinner } from 'react-bootstrap'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
const HomePage = lazy (() => import('./Pages/Home'))
const FormPage = lazy (() => import('./Pages/Form'))
class App extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            email : '',
            password : '',

        }
    }
    validation = (event) => {
        event.preventDefault()
        if(this.state.email === ""){
            alert('email khong duoc bo trong')
        }
        else if(this.state.password === ""){
            alert('password khong duoc bo trong')
        }
        else {
            alert('submit success')
        }
    }
    change = (e) => {
        let name = e.target.name
        if(name === 'email'){
            this.setState({email : e.target.value})
        }
        else if(name === "password"){
            this.setState({password : e.target.value})
        }
    }
    render(){
        return(
            <Suspense fallback={<Spinner animation="grow" />}>
                <Router>
                    <Switch>
                        <Route path="/Home">
                            <HomePage />
                        </Route>
                        <Route path="/Form">
                            <FormPage submit={this.validation} email={this.state.email} nameEmail="email" namePassword="password" password={this.state.password} change={this.change}/>
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        )
    }

}
export default React.memo(App)
import react from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
function App(){
    return (
        <Router>
            <div className= "app">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <h2>checkout</h2>
                    </Route>
                    <Route path="/login">
                        <Header/>
                        <h2> login</h2>
                    </Route>
                    {/* default case*/}
                    <Route path="/">
                        <Header/>
                        <h1>HOME PAGE!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    
    );
    
}

export default App;
import react, { useState, useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import useStateValue from "./components/StateProvider";
import { getAuth } from "firebase/auth";
function App(){
    const [{basket}, dispatch]= useStateValue();
    useEffect(() => {
        
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch({
            type: "SET_USER",
            user: user
        })
        } else {
        // No user is signed in.
        dispatch({
            type: "SET_USER",
            user: null,
        })
        }


    }, [])
    return (
        

        <Router>
            <div className= "app">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/login">
                        <Header/>
                        <Login/>
                    </Route>
                    {/* default case*/}
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    
    );
    
}

export default App;
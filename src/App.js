import React from 'react';

import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import ThanksPage from "./components/ThanksPage";


function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/cart" component={Cart} exact />
            </div>
            <Route path="/" component={Home} exact />
            <Route path="thanks" component={ThanksPage} exact />
        </div>
    );
}

export default App;

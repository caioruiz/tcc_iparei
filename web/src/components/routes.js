import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from  './Login/index';
import CadastroEstabelecimento from  './CadastroEstabelecimento/index';
import Cadastro from  './Cadastro/index';
//import Dashboard from  './pages/Dashboard';
//import CardapioCadastro from  './pages/CardapioCadastro';
//import NewCardapio from  './pages/NewCardapio';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/CadastroEstabelecimento" component={CadastroEstabelecimento}/>
                <Route path="/Cadastro" component={Cadastro}/>
                {/* <Route path="/cardapio" component={Dashboard}/>
                <Route path="/cadastroCardapio" component={CardapioCadastro}/>
                <Route path="/newCardapio" component={NewCardapio}/> */}
            </Switch>
        </BrowserRouter>
    );
}
import React, { useState } from 'react'
import api from '../../../services/api';

import logo from '../../../images/logo2.png';

import '../Estilo.css';


export default function Login({ history }){
    
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function handleSubmit(event){
    event.preventDefault();

     const response = await api.get('/LoginEstabelecimento', {
      email,
      //password
    });
    console.log(response);
    const { _id } = response.data;
    console.log(_id)
    localStorage.setItem('user', _id);

    history.push('/Dashboard');
  } 

// async function handleSubmit(e) {
//     e.preventDefault();

//     // await onSubmit({
//     //     email,
//     //     password,
        
//     //   });

    
//     setEmail('');
//     setPassword('');
//   }

    return (
        <>

        <div className="container">
        {/* <h2>IParei</h2> */}
        <img className="imageLogo" src={logo} alt="IParei"/>

      <div className="content">
        
      <p>
          Ofereça um <strong>estacionamento</strong> de qualidade para todos os seus <strong>clientes</strong>!
        </p>

        <form onSubmit={handleSubmit} >
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" placeholder="Seu e-mail de login" value={email} onChange={event => setEmail(event.target.value) }  />
          <label htmlFor="password">Senha *</label>
          <input type="password" id="password" placeholder="Sua senha" value={password} onChange={event => setPassword(event.target.value) } />

          <button className="btn" type="submit">Entrar</button>
          <p>
            Ainda não tem conta? <a href="cadastro" >Clique aqui</a> e se cadastre
          </p>
        </form>
        
      </div>

        </div>

        
        

        </>
    )
}
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';
export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Sua ID" />
          <button  className="button" type="submit">Entrar</button>

          <a href="/register"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</a>
        </form>
      </section>
      <img src={herosImg} alt="Heroes" />
    </div>
  );
}

import React, { Component } from 'react';
import logoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'

export default class NewIncident extends Component {
    render() {
        return <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar  um herói para resolver isso.</p>
                    <Link to="/profile" className="back-link"><FiArrowLeft size={16} color="#E02041" />Voltar para home</Link>

                </section>
                <form>
                    <input placeholder="Titulo do caso" />
                    <textarea  placeholder="Descricao" />
                    <input placeholder="Valor em reais" />
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>;
    }
}

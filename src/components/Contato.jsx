import React from 'react';
import '../styles/contato.css';

const Contato = () => {
    return (
        <div className='barra'>
            <div className='contato'>
                <h1>Entre em contato conosco</h1>
                <p>Fale conosco pelo telefone ou preencha o formulário
                    ao lado para receber uma resposta o mais breve possível.</p>
            </div>
            <div className='formulario'>
                <form action="">
                    <input type="text" placeholder='Nome' />
                    <input type="email" placeholder='Email' />
                    <input type="tel" placeholder='Telefone' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Mensagem'></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
};

import React from 'react'
import '../styles/navbar.css'
import logo from '../assets/Logotipo_quadrado.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <a href=""><img src={logo} alt="Logo da AD CONTEC" /></a>
            </div>

            <div className='indices'>
                <ul className='lista'>
                    <li className='opcoes'>ínicio</li>
                    <li className='opcoes'>Sobre a AD CONTEC</li>
                    <li className='opcoes'>Serviços</li>
                    <li className='opcoes'>Área do cliente</li>
                    <li className='opcoes'>Trabalhe conosco</li>
                    <li className='opcoes'>Contato</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
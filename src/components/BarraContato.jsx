import React from 'react';
import '../styles/barracontato.css';
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const BarraContato = () => {
    return (
        <div className='barraContato'>
            <div className='telefone'>
                <FaPhoneAlt />
                <p className='numero'>(51) 3793-3600</p>
            </div>

            <div>
                <ul className='redesSociais'>
                    <a href="https://www.instagram.com/adcontec/" target='_blank' rel="noreferrer">
                        <li className='icones'><GrInstagram /></li>
                    </a>
                    <a href="https://www.linkedin.com/company/adcontec/" target='_blank' rel="noreferrer">
                        <li className='icones'><FaLinkedin /></li>
                    </a>
                </ul>
            </div>
        </div>

    );
};

export default BarraContato;

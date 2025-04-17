import Reac from 'react';
import Example from '../components/Example';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Bem vindo a AD CONTEC</h1>
            <Example />
        </div>
    );
};

export default Home;
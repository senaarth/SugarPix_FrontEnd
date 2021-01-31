import React from 'react';
import './Signup.css';
import decoration from '../About/decoration.png';
import Form from '../../components/Form/Form.jsx';

function Signup() {
  return (
    <div className='signup'>
        <h1 className="title">Crie o seu BabyPix</h1>
        <Form />
        <img 
            src={decoration}
            alt=""
            className="decoration"
        />
    </div>
  );
}

export default Signup;

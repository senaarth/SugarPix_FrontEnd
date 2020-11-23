import React, { Component } from 'react';

import api from '../../services/api';
import './Form.css'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          instagram: '',
          pix: '',
          bio: ''
        };
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();

        const data = this.state;

        try {
            await api.post('/create', data)
                .then( (res) => {
                    const validation = res.data.message.split(' ');
                    let empty = false;
                    let length = false;

                    for(let i = 0; i < validation.length; i++) {
                        if (validation[i] === 'empty') {
                            empty = true;
                        } else if (validation[i] === 'length') {
                            length = true;
                        }
                    }
                    
                    if (empty) {
                        alert('Ops.. parece que você deixou algo importante sem preencher!');
                    } else if (length) {
                        alert('Algumas das suas informações estão curtas demais...');
                    } else {
                        this.setState({
                            name: '',
                            instagram: '',
                            pix: '',
                            bio: ''
                        });
                        alert(res.data.message);
                    }
                });
        } catch (err) {
            console.log(err);
        }
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name='name'
                        type='text'
                        placeholder='Nome'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        name='instagram'
                        type='text'
                        placeholder='Instagram'
                        value={this.state.instagram}
                        onChange={this.handleInputChange}
                    />
                </div>
                <input
                    name='pix'
                    type='text'
                    placeholder='PIX'
                    value={this.state.pix}
                    onChange={this.handleInputChange}
                />
                <textarea
                    name='bio'
                    type='text'
                    placeholder='Bio'
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    className="bio"
                />
                <button type='submit'>Enviar</button>
            </form>
        );
    }
}

export default Form;

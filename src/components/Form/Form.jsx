import React, { Component } from 'react';
import api from '../../services/api';

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
            await api.post('/create', data);
        } catch (err) {
            console.log(err);
        }

        this.setState({
            name: '',
            instagram: '',
            pix: '',
            bio: ''
        });
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
                <input
                    name='bio'
                    type='text'
                    placeholder='Bio'
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                    style={{height: "80px"}}
                />
                <button type='submit'>Enviar</button>
            </form>
        );
    }
}

export default Form;

import React, { Component } from 'react';
import api from '../../services/api';

import './index.css';

class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            instagram: '',
            pix: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const data = this.state;

        try {
            api.post('/create', data);
        } catch(err) {
            console.log(err);
        }

        this.setState({
            name: '',
            instagram: '',
            pix: ''
        });

    }
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    
    render() {
        return (
            <div className="landing">
                <form onSubmit={this.handleSubmit}>
                    <input name="name" type="text" placeholder="Nome" value={this.state.name} onChange={this.handleInputChange}/>
                    <input name="instagram" type="text" placeholder="Instagram" value={this.state.instagram} onChange={this.handleInputChange}/>
                    <input name="pix" type="text" placeholder="PIX" value={this.state.pix} onChange={this.handleInputChange}/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Landing;

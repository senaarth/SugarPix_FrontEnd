import React, { Component } from 'react';

import api from '../../services/api';
import ModalError from '../Modals/ModalError/ModalError';
import ModalSuccess from '../Modals/ModalSuccess/ModalSuccess';
import './Form.css'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          instagram: '',
          pix: '',
          bio: '',
          selectedFile: null,
          url: '',
          messageFile: 'Envie uma foto',
          err: false,
          messageErr: '',
          success: false,
          messageSuccess: 'Pix registrado com sucesso!'
        };
    }

    handleFileUpload = async () => {
        const data = new FormData();
        if ( this.state.selectedFile ) {
            data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name ); 
            api.post( 'cards/profile-img-upload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then( async (response) => {
                if ( 200 === response.status ) {
                    if( response.data.error ) {
                        if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                            this.setState({ err: true, messageErr: 'Tamanho máximo de 2MB excedido'})
                        } else {
                            alert( response.data.error);
                        }
                    } else {
                        let fileName = response.data;
                        this.setState({
                            url: fileName.location
                        });
                        await this.handleCardUpload();
                    }
                }
            })
            .catch( err => {
                alert(err);
            });
        } else {
            this.setState({ err: true, messageErr: 'Favor enviar uma foto de perfil'})
        }
    };

    handleCardUpload = async () => {
        const data = {
            name: this.state.name,
            instagram: this.state.instagram,
            pix: this.state.pix,
            bio: this.state.bio,
            url: this.state.url
        };

        try {
            await api.post('cards/create', data)
                .then( (res) => {

                    let validation = res.data.message;
                    let empty = false;
                    let length = false;
                    
                    if (validation) {
                        validation = res.data.message.split(' ');
    
                        for(let i = 0; i < validation.length; i++) {
                            if (validation[i] === 'empty') {
                                empty = true;
                            } else if (validation[i] === 'length') {
                                length = true;
                            }
                        }
                    } 
                    
                    if (empty) {
                        this.setState({ err: true, messageErr: 'Ops.. parece que você deixou algo importante sem preencher!'})
                    } else if (length) {
                        this.setState({ err: true, messageErr: 'Algumas das suas informações estão curtas demais...'})
                    } else {
                        this.setState({
                            name: '',
                            pix: '',
                            instagram: '',
                            bio: '',
                            selectedFile: null,
                            url: ''
                        });
                        this.setState({ success: true })
                    }
                });
        } catch (err) {

            let message = err.message;

            if (message) {
                message = message.split(' ');
                for(let i = 0; i < message.length; i++) {
                    if (message[i] === '429') {
                        this.setState({ err: true, messageErr: 'Parece que você já se cadastrou recentemente...'})
                    } 
                }
            } 

        }
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.handleFileUpload();
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleInputFileChange = async (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            messageFile: 'Foto Enviada!'
        });
    }

    render() {
        return(
            <>
            <ModalError onHide={() => this.setState({ err: false })} show={this.state.err} messageErr={this.state.messageErr} />
            <ModalSuccess onHide={() => this.setState({ success: false })} show={this.state.success} messageSuccess={this.state.messageSuccess} />
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
                <label htmlFor="profile_pic">{this.state.messageFile}</label>
                <input
                    name='profile_pic'
                    type='file'
                    onChange={this.handleInputFileChange}
                    id='profile_pic'
                />
                <button type='submit'>Cadastrar</button>
            </form>
            </>
        );
    }
}

export default Form;

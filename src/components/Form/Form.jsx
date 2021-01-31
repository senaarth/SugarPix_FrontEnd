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
          bio: '',
          selectedFile: null,
          url: '',
          messageFile: 'Envie uma foto'
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
                            alert( 'Tamanho máximo de 2MB excedido.');
                        } else {
                            console.log( response.data );
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
            alert('Favor enviar uma foto de perfil.');
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
                    console.log(res.data.message)
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
                        alert('Ops.. parece que você deixou algo importante sem preencher!');
                    } else if (length) {
                        alert('Algumas das suas informações estão curtas demais...');
                    } else {
                        this.setState({
                            name: '',
                            pix: '',
                            instagram: '',
                            bio: '',
                            selectedFile: null,
                            url: ''
                        });
                        alert('Pix registrado com sucesso!');
                        this.props.getData(false);
                    }
                });
        } catch (err) {
            console.log(err);
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
        );
    }
}

export default Form;

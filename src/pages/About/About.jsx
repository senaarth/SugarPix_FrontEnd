import React from 'react';
import decoration from './decoration.png';
import Card from '../../components/Card/Card.jsx';
import './About.css';

function About() {
  return (
    <div className='about'>
        <h1 className="title">Sobre o SugarPix</h1>
        <br/>
        <p className="textAbout textSpecial">Babies,</p>
        <p className="textAbout">
          Já pensaram que SUGAR seria uma plataforma que te permitisse se descrever e deixar seu PIX para que qualquer daddy que entrasse e se interessasse pudesse te mimar? Basta ir pra nossa página de cadastro e criar seu card!
          <br/>
        </p>
        <p className="textAbout textSpecial">E você Daddy,</p>
        <p className="textAbout">
          Já quis visualizar uma lista com candidatas a babies? A gente te oferece exatamente isso, um feed com diversos cards com diversas babies e seus PIX pra que você possa enviar aquele mimo açucarado, só ir pra nossa página inicial e escolher!
          <br/>
        </p>
        <p className="textAbout textSpecial">E o SugarCard, hein?</p>
        <p className="textAbout">
          Um card simples com uma foto, nome e a chave pix. Caso o interesse seja maior basta clicar em detalhes para receber uma descrição ou clicar no @, que leva diretamente pro insta da baby.
          <br/>
        </p>
        <Card
          card={
            {
              name: "Sugarpix",
              instagram: "sug4rpix",
              pix: "sug4rpix@gmail.com",
              url: "https://sugarpix.s3.us-east-2.amazonaws.com/WhatsApp+Image+2021-01-30+at+16.04.38.jpeg",
              bio: "Projeto de dois desenvolvedores independentes que gostam de colocar ideias em prática por mais bobas que pareçam ser."
            }
          }
        />
        <img 
            src={decoration}
            alt=""
            className="decoration"
        />
    </div>
  );
}

export default About;

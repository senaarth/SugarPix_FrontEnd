import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor() {
    super();
    this.showBio = this.showBio.bind(this);
  }

  showBio() {
    const bio = document.querySelector('p');
    const img = document.querySelector('img');
    if (bio.style.display === 'block') {
      bio.style.display = 'none';
      img.style.transform = 'scale(1.0)';
    } else {
      bio.style.display = 'block';
      img.style.transform = 'scale(1.5)';
    }
  }
  render() {
    return (
      <div className='cardComponent'>
        <img
          src='https://avatars0.githubusercontent.com/u/64823667?s=88&u=b28f3ba7506289fc5d72103289d40a40be212a11&v=4'
          alt=''
        />
        <div className='text'>
          <h1>Lucas Andrade</h1>
          <h2>5537293847</h2>
          <a target="blank" href="https://www.instagram.com/lucasdabandana">@lucasdabandana</a>
          <button onClick={this.showBio}>DETALHES</button>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    );
  }
}

export default Card;

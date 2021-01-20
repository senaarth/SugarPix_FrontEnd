import React from 'react';
import './Card.css';

function Card({ key, card }) {
  const instaURL = 'https://www.instagram.com/' + card.instagram;
  const imgID = 'img' + card._id;
  const bioID = 'bio' + card._id;

  function showBio() {
    const bio = document.getElementById(bioID);
    const img = document.getElementById(imgID);

    if (bio.style.display === 'block') {
      bio.style.display = 'none';
      img.style.transform = 'scale(1.0)';
    } else {
      bio.style.display = 'block';
      img.style.transform = 'scale(1.35)';
    }
  }

  return (
    <div className='cardComponent'>
      <img
        src='https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?resize=300%2C300&ssl=1'
        alt=''
        id={imgID}
      />
      <div className='text'>
        <h1>{card.name}</h1>
        <h2>{card.pix}</h2>
        <a target='blank' href={instaURL}>
          @{card.instagram}
        </a>
        <button onClick={showBio}>DETALHES</button>
        <p id={bioID}>{card.bio}</p>
      </div>
    </div>
  );
}

export default Card;

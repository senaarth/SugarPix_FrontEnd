import React from 'react';
import './Card.css';

function Card({ key, card }) {
  const instaURL = 'https://www.instagram.com/' + card.instagram;
  const imgID = 'img' + card._id;
  const bioID = 'bio' + card._id;
  const url = card.url;

  function showBio() {
    const bio = document.getElementById(bioID);
    const img = document.getElementById(imgID);

    if (bio.style.display === 'block') {
      bio.style.display = 'none';
      img.style.transform = 'scale(1.0)';
    } else {
      bio.style.display = 'block';
      img.style.transform = 'scale(1.25)';
    }
  }

  return (
    <div className='cardComponent'>
      <img
        src={url}
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

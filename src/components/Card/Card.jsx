import React, { useState } from 'react';
import './Card.css';

function Card({ key, card }) {
  const instaURL = 'https://www.instagram.com/' + card.instagram;
  const imgID = 'img' + card._id;
  const bioID = 'bio' + card._id;

  // const [profilePic, setProfilePic] = useState('');
  // async function picUrl() {
  //   try {
  //     const res = await fetch(instaURL + '/?__a=1');
  //     const json = await res.json();
  //     console.log('json', json)
  //   } catch (err) {
  //     console.error('err', err);
  //   }
  // }
  // picUrl();

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
        src={'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-15/e35/106368633_154548092816106_2260210631900495517_n.jpg?_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=2wq7Ol40HDUAX_UPMZQ&tp=1&oh=ae9a357eee7cba9c50dc60fb40717922&oe=602ED120'}
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

import React, { useState } from 'react';

import Form from '../../components/Form/Form.jsx';
import Card from '../../components/Card/Card.jsx';
import api from '../../services/api';
import './Landing.css';

function Landing() {
  const [cards, setCards] = useState([]);

  const [name] = useState('');
  const [instagram] = useState('');
  const [pix] = useState('');

  function getData() {
    setTimeout(() => {
      api.get('list', {
        params: {
          name,
          instagram,
          pix,
        },
      }).then((res) => {
        setCards(res.data.card);
      });
    }, 0);
  }

  getData();

  return (
    <div className='landing'>
      <Form />
      <div className='feed'>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default Landing;

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
  const [initialIndex, setInitialIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(5)
  
  function previousValue() {
    setPageCount(prevState => prevState - 1)
    setInitialIndex(prevState => prevState - 5)
    setLastIndex(prevState => prevState - 5)
  }

  function nextValue() {
    setPageCount(prevState => prevState + 1)
    setInitialIndex(pageCount * itemsPerPage)
    setLastIndex(pageCount * itemsPerPage + 5)
  }

  useEffect(() => {
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
          setMaxPages(Math.ceil(res.data.card.length / 5))
          setSelectedCards(spliceItems(cards))
        });
      }, 0);
    }
  
    function spliceItems(items) {
      return items.slice(initialIndex, lastIndex)
    }

    getData();
  }, [cards, initialIndex, instagram, lastIndex, name, pix])

  return (
    <div className='landing'>
      <Form />
      <div className='feed'>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      {/* <button onClick={() => paginate()}>Direita</button> */}
    </div>
  );
}

export default Landing;

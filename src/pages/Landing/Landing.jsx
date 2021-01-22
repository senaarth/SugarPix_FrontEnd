import React, { useState, useEffect } from 'react';
import Form from '../../components/Form/Form.jsx';
import Card from '../../components/Card/Card.jsx';
import api from '../../services/api';
import './Landing.css';

function Landing() {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [maxPages, setMaxPages] = useState(100)
  const [name] = useState('');
  const [instagram] = useState('');
  const [pix] = useState('');
  const [initialIndex, setInitialIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(5)
  const [itemsPerPage] = useState(5);
  
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
        {selectedCards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div className="container">
          <button className="prev" onClick={previousValue} disabled={pageCount === 1 ? true : false}></button>
          <button className="next" onClick={nextValue} disabled={pageCount === maxPages ? true : false}></button>
      </div>
    </div>
  );
}

export default Landing;

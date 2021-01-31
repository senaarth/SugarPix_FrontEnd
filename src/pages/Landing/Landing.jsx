import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Card from '../../components/Card/Card.jsx';
import api from '../../services/api';
import './Landing.css';
import Pagination from '../../components/Pagination/Pagination.jsx';
import shuffle from './shuffle.png';

function Landing() {
  const [cards, setCards] = useState([]);
  const [name] = useState('');
  const [instagram] = useState('');
  const [pix] = useState('');
  const [url] = useState('');
  const [loaded, setLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  function getData(random) {
    setLoaded(false);
    setTimeout(() => {
      api.get('cards/list', {
        params: {
          name,
          instagram,
          pix,
          url
        },
      }).then((res) => {
        let data = []
        if (!random) {
          data = res.data.card.reverse();
        } else {
          data = res.data.card.sort(() => Math.random() - 0.5);
        }

        setCards(data);
        setLoaded(true);
      });
    }, 0);
  }

  useEffect(() => {
      getData(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // function paginate() {
  //   setInitialIndex(prevState => prevState + 5)
  //   setLastIndex(prevState => prevState + 5)
  // }

  return (
    <div className='landing'>
      <div className="shuffle">
        <button onClick={() => {
          getData(true);
          setCurrentPage(1);
        }}>
          <img 
            src={shuffle} 
            alt=""
            width="30"
            height="30"
          />
          Embaralhar Cards
        </button>
      </div>
      <div className='feed'>
        {loaded ? currentPosts.map((card, index) => {
          return <Card card={card} key={card._id}/>;
        }) : <ReactLoading className='loading' type='spin' />}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cards.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Landing;

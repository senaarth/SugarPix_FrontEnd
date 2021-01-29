import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Form from '../../components/Form/Form.jsx';
import Card from '../../components/Card/Card.jsx';
import api from '../../services/api';
import './Landing.css';
import Pagination from '../../components/Pagination/Pagination.jsx';

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

  useEffect(() => {
    function getData() {
      setTimeout(() => {
        api.get('list', {
          params: {
            name,
            instagram,
            pix,
            url
          },
        }).then((res) => {
          console.log(res.data)
          setCards((res.data.card));
          setLoaded(true)
        });
      }, 0);
    }
    getData();
  })

  // function paginate() {
  //   setInitialIndex(prevState => prevState + 5)
  //   setLastIndex(prevState => prevState + 5)
  // }


  return (
    <div className='landing'>
      <Form />
      <div className='feed'>
        {loaded ? currentPosts.map((card) => {
          return <Card key={card.id} card={card} />;
        }) : <ReactLoading className='loading' type='spin' />}
      </div>
      {/* <button onClick={() => paginate()}>Direita</button> */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={cards.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Landing;

import './App.css';

import { useEffect, useState } from 'react';

import Post from './Post';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(4)
  useEffect(() => {
    async function renderElements() {
      axios.get('https://animall-backend-assesment.herokuapp.com/data')
        .then(res => {
          console.log(typeof (res.data.data[0].animalType));
          const newData = res.data.data;
          setData(newData);
        })
    }
    renderElements();
  }, [])
  console.log(data)

  // Logic for displaying current todos
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);


  const onSubmitIncrease = () => {
    if (indexOfLastCard <= data.length - 1)
      setCurrentPage(currentPage + 1)
  }

  const onSubmitDecrease = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src="https://static-assets.animall.in/static/images/animall-logo-2021.png" alt="Animall" width="147" height="51" />
      </div>
      <div className="holder">
        {currentCards.map((post, index) => {
          return (<Post key={index} data={post} />)
        })
        }
      </div>
      {
        indexOfLastCard <= data.length - 1 ? <button className={"btn"} onClick={onSubmitIncrease}>Next</button> : null
      }
      {
        currentPage > 1 ? <button className={"btn"} onClick={onSubmitDecrease}>Prev</button> : null
      }
    </div>
  );
}

export default App;

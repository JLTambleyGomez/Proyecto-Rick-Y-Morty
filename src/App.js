import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState} from 'react';
import  axios  from 'axios';
import {Routes,Route } from 'react-router-dom'; //necesario para usar el route

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '921c53ed19ee.c07a3c34e20b05d4765f';

function App() {
   
   let [characters, setCharacters]=useState([]);
   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   let onClose = (id) => {
      const characterfiltered= characters.filter(characters=>
      characters.id !==Number(id))
      setCharacters(characterfiltered)}


   return (
      <div className='App' style = {{padding: "26px",}}>
      <div className={style.navbar}>
     </div> 
     <Nav onSearch={onSearch}/>
      <Routes>
      <Route path='/home' element ={ <Cards characters={characters} 
      onClose={onClose}  />} />
      <Route path='/About' element ={<About/>}></Route>
      <Route path='/Detail/:id' element ={<Detail/>}/>
      </Routes>
     <div>
  </div>
  <hr/>
</div>
      
    
   );
   }
export default App;

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import  axios  from 'axios';
import {Routes,Route } from 'react-router-dom'; //necesario para usar el route
import Forms from './components/Forms/forms';
import Favorites from './components/favorites/favorites';

function App() {
   //!HOOKS
   let [characters, setCharacters]=useState([]);
   const {pathname}=useLocation();
   const [access, setAccess]= useState(false);
   const navigate = useNavigate();

   useEffect(()=>{
      !access && navigate("/");
   },[access]);

   //Credenciales Fake
    const username= "jorge@gmail.com";
    const password= "koke122";

   //! EVENTHANDLERS
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
      
   const login = (userData)=>{
      if (userData.username===username && userData.password===password){
         setAccess(true);
         navigate("/home");
      }
   }; 

   return (
      <div className='App' style = {{padding: "26px",}}>
      <div className={style.navbar}>
     </div> 
     
      {pathname!=="/" && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>}
      <Routes>
      <Route path = "/" element={<Forms login= {login}/>}/>
      <Route path='/home' element ={ <Cards characters={characters} 
      onClose={onClose}  />} />
      <Route path='/About' element ={<About/>}></Route>
      <Route path='/favorites' element ={<Favorites/>}></Route>

      <Route path='/Detail/:id' element ={<Detail/>}/>
      </Routes>
     <div>
  </div>
  <hr/>
</div>
      
    
   );
   }
export default App;

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import style from './App.module.css';

function App() {
   return (
      
      <div
      className='App' style = {{padding: "26px",}}>
      
          <div className={style.navbar}>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />

         </div> 
         <div>
         <Cards characters={characters} 
          onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
      </div>
      <hr/>
      </div>
   );
}


export default App;

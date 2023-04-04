import style from './Search.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <div className={style.bar}>
    <input type="search" className={style.searchinput} />
    <button 
    className={style.searchbutton}
      onClick={(id)=>{
      onSearch(id);
    }}
    >
  Agregar 
</button> 
</div>
);
  }

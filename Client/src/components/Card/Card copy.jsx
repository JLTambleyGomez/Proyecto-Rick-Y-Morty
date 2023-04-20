import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Card=({id, name, status, species, gender, origin, image, onClose })=>{

    return (
      <div className={style.container}>
         <img src={image} alt='' />
         <NavLink to={`/Detail/${id}`} className={style.link}>
         <h2>{name}</h2>
         </NavLink>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <button onClick={()=>onClose(id)} class={style.closebutton}>X</button>

      </div>
   );
}

export default Card;

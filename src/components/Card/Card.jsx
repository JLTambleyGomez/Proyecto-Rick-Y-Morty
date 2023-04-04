import style from "./Card.module.css";

const Card=({name, status, species, gender, origin, image, onClose })=>{

    return (
      <div className={style.container}>
         <img src={image} alt='' />
         <h2>{name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <button onClick={onClose} class={style.closebutton}>X</button>

      </div>
   );
}

export default Card;

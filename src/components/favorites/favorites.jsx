import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Card.module.css";


const Favorites =()=>{
    const favorites = useSelector(state => state.myFavorites);
    return (
        <>
            {favorites.map(({ id, name, status, species, gender, origin, image,onClose }) => (
                <div className={style.container} >
                    <Card
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin}
                        image={image}
                        onClose={onClose}
                    />
                </div>
            ))}
        </>
    );
};

export default Favorites;

import styles from '../styles/Card.module.css'
import { Link } from "react-router-dom";

function CardsCountries (props) {
    const { id, nombre, image, continent } = props;
    
    return(
        <div className={styles.card}>
            <div className={styles.carddetails}>
            <h1 className={styles.texttitle}>{nombre}</h1>
            <h3 className={styles.textbody}>{continent}</h3>
            <Link to={`/detail/${id}`}><img src={image} alt={`bandera de ${nombre}`} /></Link>
            </div>
        </div>
    )
}


export default CardsCountries;
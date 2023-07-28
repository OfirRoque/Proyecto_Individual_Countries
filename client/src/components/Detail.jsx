import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css"

function Detail () {

    const [ country, setCountry ] = useState({});

    const { id } = useParams();
    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`).then(({data}) => {
            if(data.name) {
                setCountry(data);
            } 
        })
        return setCountry({});
    }, [id])


    return(
        <>
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.heading}>{country.name}: {country.id}</h2>
                <p className={styles.para}>Continente: {country.continent}</p>
                <p className={styles.para}>Capital: {country.capital}</p>
                <p className={styles.para}>Subregion: {country.subregion}</p>
                <p className={styles.para}>Area: {country.area}</p>
                <p className={styles.para}>Poblacion: {country.population}</p>
                <img src={country.image} alt={`Bandera de ${country.name}`} />
                <Link to="/homePage/Countries"><button className={styles.btn}>Volver</button></Link> 
            </div>
        </div>
        </>
    )
}


export default Detail;
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import validation from "../controller/validation.js"
import axios from "axios";
import styles from "../styles/Form.module.css";

function SaveActivities () {
    const URL = "http://localhost:3001/activities";
    const namesCountries = useSelector(state => state.countriesNames);

    const [ body, setBody ] = useState({
        nameCountry: [],
        name: "",
        dificulty: 0,
        duration: 0,
        season: ""
    });
    const [ errors, setErrors ] = useState({});


    const handleChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value 
        });
    }
    
    
    useEffect(() => {
        setErrors(validation({
            ...body
        }))
    }, [body])

    const nameCountries = (e) => {
        setBody({
            ...body,
            nameCountry: [...body.nameCountry, e.target.value]
        })
    }

    const DurationAndDificulty = (e) => {
        const duration = e.target.value;
        const integer = parseInt(duration);
        setBody({
            ...body,
            [e.target.name]: integer,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(body.nameCountry.length === 0){
            window.alert("Debe agregar por lo menos un pais para la relacion")
        } else if(body.season === "" || body.season === "0"){
            window.alert("No agrego una temporada");
        } else {
            axios.post(URL, body)
            .then(({data}) => {
                window.alert(data.message)
            })
            .catch(() => {
                window.alert("La actividad no se creo por que ya existe una actividad con ese nombre")
            })
        }
    }

    const deleteCountri = (e, country) => {
        e.stopPropagation();
        const value = body.nameCountry.filter((e) => e !== country);
        setBody({
            ...body,
            nameCountry: value,
        })
    }

    return (
        <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.card2}>
            <div className={styles.form}>
                <p className={styles.title}>Crear actividad</p>
                <div className={styles.box}>
                <Link to="/homePage/Countries">
                    <button className={styles.create}>Volver</button>
                </Link>
                    
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.text}>Nombre: </label>
                        <input className={styles.input} type="text" name="name" value={body.name} onChange={handleChange}/>
                        <h4>{errors.name}</h4>
                        
                        
                        <label htmlFor="" className={styles.text}>Dificultad: </label>
                        <input className={styles.input} type="number" name="dificulty" value={body.dificulty} onChange={DurationAndDificulty}/>
                        <h4>{errors.dificulty}</h4>
                        
                        
                        <label htmlFor="" className={styles.text}>Duracion: </label>
                        <input className={styles.input} type="number" name="duration" value={body.duration} onChange={DurationAndDificulty}/>
                        <h4>{errors.duration}</h4>
                        </div>
                        
                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="">Temporada:
                                <select className={styles.custom1} name="season" onChange={handleChange}>
                                    <option value="0">Estacion: </option>
                                    <option value="Primavera" defaultValue>Primavera</option>
                                    <option value="Verano" >Verano</option>
                                    <option value="Otoño">Otoño</option>
                                    <option value="Invierno">Invierno</option>
                                </select>
                            </label>
                            

                            
                            <label htmlFor="">Pais/es:
                                <div className={styles.content}>
                                <div className={styles.countries}>
                                {body.nameCountry.map(e => (
                                    <div className={styles.country}>
                                        <button className={styles.close} type="button" onClick={(event) => deleteCountri(event, e)}>X</button>
                                        <p className={styles.info__title}>{e}</p>
                                    </div>
                                ))}
                                </div>
                        
                                <select className={styles.custom} name="countries" onChange={nameCountries}>
                                    {
                                        namesCountries.map(e => (
                                            <option value={e}>{e}</option>
                                        ))
                                    }
                                </select>
                                </div>
                            </label>
                            
                        </div>

                        <button className={styles.create} type="submit"> + Crear</button>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveActivities;
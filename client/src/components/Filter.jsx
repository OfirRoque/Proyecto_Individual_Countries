import { useDispatch } from "react-redux";
import { filterContinent } from "../redux/actions";
import styles from "../styles/Select.module.css"

function Filter () {
    const dispatch = useDispatch();


    const filter = (e) => {
        dispatch(filterContinent(e.target.value))
    }

    
    return(
        <>
        <div className={styles.container}>
            <label htmlFor="">Continentes:
                <select className={styles.custom1} name="continentes" onChange={filter}>
                    <option value="0">Continentes: </option>
                    <option value="todos" >Todos</option>
                    <option value="Asia" defaultValue>Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </label>
        </div>
        </>
    )
}


export default Filter;
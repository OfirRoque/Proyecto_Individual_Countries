import { useDispatch, useSelector } from "react-redux";
import { azCountries } from "../redux/actions";
import styles from "../styles/Select.module.css"

function Ordenar () {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);

    const handleChange = (e) => {
        const option = e.target.value;
    switch (option) {
        case "A-Z":
            const a_z = [...countries].sort((a, b) => a.name.localeCompare(b.name));
            dispatch(azCountries(a_z));
            break;
        case "Ascendente":
            const ascendente = [...countries].sort((a, b) => b.name.localeCompare(a.name));
            dispatch(azCountries(ascendente))
            break; 
        case "poblacion-":
            const menorPoblacion = [...countries].sort((a, b) => a.population - b.population);
            dispatch(azCountries(menorPoblacion))
            break;
        case "poblacion+":
            const mayorPoblacion = [...countries].sort((a, b) => b.population - a.population);
            dispatch(azCountries(mayorPoblacion))
            break;
        }
    }


    return(
        <>
            <div className={styles.container}>
                <label htmlFor="">Ordenar por: 
                    <select className={styles.custom1} name="ordenar" onChange={handleChange}>
                        <option value="0">Ordenar: </option>
                        <option value="A-Z">A-Z</option>
                        <option value="Ascendente">Z-A</option>
                        <option value="poblacion+">Mayor Poblacion</option>
                        <option value="poblacion-">Menor Poblacion</option>
                    </select>
                </label>
            </div>
        </>
    )
}

export default Ordenar;
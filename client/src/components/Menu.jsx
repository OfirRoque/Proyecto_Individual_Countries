import Filter from "./Filter";
import Activities from "./Actividades";
import Ordenar from "./Orden";
import { Link } from "react-router-dom";
import Search from "./Search";
import styles from "../styles/Search.module.css"
import style from "../styles/Menu.module.css"

function Menu () {

    
    return (
        <>
        <nav className={style.navbar}>
            <div className={style.container}>
            <h3>Countries</h3>
                <Filter />

                <Activities />
            
                <Ordenar />
                <Link to="/saveActivities">
                    <button className={styles.searchButton}>Crear Actividad: </button>
                </Link>
                <Search />
            </div>
        </nav>
        </>
    )
}

export default Menu;
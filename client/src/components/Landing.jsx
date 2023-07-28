import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getNamesCountries } from "../redux/actions";
import styles from "../styles/Landing.module.css";

function LandingPage  () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
        dispatch(getNamesCountries());
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.cont}>
                <h1 className={styles.title}>Countries</h1>
                <Link to="/homePage/Countries"><button className={styles.centeredbutton}>Ingresar</button></Link>
            </div>
        </div>
    )
}


export default LandingPage;
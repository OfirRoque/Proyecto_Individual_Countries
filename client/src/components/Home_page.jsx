import { useDispatch, useSelector } from 'react-redux';
import CardsCountries from "./CardsCountries";
import styles from "../styles/CardsContainer.module.css"
import { setPages } from '../redux/actions';
import Menu from './Menu';



function HomePage () {
    const dispatch = useDispatch();
    const allCountry = useSelector(state => state.countries);
    const page = useSelector(state => state.page);
    const cardsPages = 10;
    const totalPages = Math.ceil(allCountry.length / cardsPages);

    const handleChange = (number) => {
        dispatch(setPages(number));
    }

    return (
        <>
            <Menu />
            <div className={styles.buttons}>
                {
                    Array.from({length: totalPages}, (_, index ) => (
                        <button className={styles.button} key={index} onClick={() => handleChange(index)}><span>{index + 1}</span><span></span></button>
                    ))
                }
            </div>
            <div className={styles.galeria}>
                {
                    allCountry.slice(page * cardsPages, (page + 1) * cardsPages).map(country => (
                        <CardsCountries
                            id={country.id}
                            key={country.id}
                            image={country.image}   
                            nombre={country.name}
                            continent={country.continent}
                            capital={country.capital}
                            subregion={country.subregion}
                            area={country.area}
                            population={country.population}
                        />
                    ))
                }
            </div>
        </>
    )
}


export default HomePage;
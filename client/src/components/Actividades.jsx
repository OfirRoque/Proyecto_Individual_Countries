import { useSelector, useDispatch } from "react-redux";
import { filterActivities, getActivities } from "../redux/actions";
import { useEffect } from "react";
import styles from "../styles/Select.module.css";

function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const handleChange = (e) => {
    dispatch(filterActivities(e.target.value));
  };

  const countries = useSelector((state) => state.filter);
  return (
    <>
      <div className={styles.container}>
        <label htmlFor="">
          Actividades:
          <select
            className={styles.custom1}
            name="activities"
            onChange={handleChange}
          >
            <option value="activity">Todo</option>
            {activities.map((e, i) => (
              <option key={i} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
}

export default Activities;

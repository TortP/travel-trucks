import { useDispatch, useSelector } from 'react-redux';
import { setType, toggleAmenity } from '../../redux/filters/filtersSlice';
import LocationAutocomplete from '../LocationAutocomplete/LocationAutocomplete';
import styles from './Filters.module.css';
import { iconsMap } from '../../assets/icons';

const vehicleEquipment = [
  'AC',
  'Automatic',
  'Kitchen',
  'TV',
  'Bathroom',
  'Refrigerator',
  'Microwave',
  'Water',
  'Gas',
];
const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

const Filters = ({ onApply }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Location</label>
      <LocationAutocomplete />

      <p className={styles.title}>Filters</p>

      {}
      <div className={styles.group}>
        <p className={styles.subtitle}>Vehicle equipment</p>
        <div className={styles.buttons}>
          {vehicleEquipment.map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.filterButton} ${
                filters.amenities.includes(item) ? styles.active : ''
              }`}
              onClick={() => dispatch(toggleAmenity(item))}
            >
              {iconsMap[item] && (
                <img src={iconsMap[item]} alt={item} className={styles.icon} />
              )}
              <span>{item}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle type */}
      <div className={styles.group}>
        <p className={styles.subtitle}>Vehicle type</p>
        <div className={styles.buttons}>
          {vehicleTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`${styles.filterButton} ${
                filters.type === type ? styles.active : ''
              }`}
              onClick={() => dispatch(setType(type))}
            >
              {iconsMap[type] && (
                <img src={iconsMap[type]} alt={type} className={styles.icon} />
              )}
              <span>{type}</span>
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default Filters;

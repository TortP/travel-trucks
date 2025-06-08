import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './LocationAutocomplete.module.css';
import { setLocation } from '../../redux/filters/filtersSlice';
import { iconsMap } from '../../assets/icons';

const LocationAutocomplete = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.list);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const uniqueLocations = [...new Set(campers.map((c) => c.location))];

  const filteredLocations = uniqueLocations.filter((location) =>
    location.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (location) => {
    setInputValue(location);
    setShowDropdown(false);
    dispatch(setLocation(location));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <img
          src={inputValue ? iconsMap.MapFill : iconsMap.Map}
          alt="location"
          className={styles.inputIcon}
        />
        <input
          type="text"
          placeholder="City"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          className={styles.input}
        />
      </div>

      {showDropdown && filteredLocations.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredLocations.map((location, index) => (
            <li key={index} onClick={() => handleSelect(location)}>
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;

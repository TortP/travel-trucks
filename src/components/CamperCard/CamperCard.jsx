import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CamperCard.module.css';
import { toggleFavorite } from '../../redux/favorites/favoritesSlice';
import { iconsMap } from '../../assets/icons';

const CamperCard = ({ camper }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    engine,
    transmission,
    AC,
    kitchen,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={styles.card}>
      <img src={gallery[0]?.thumb} alt={name} className={styles.image} />

      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.priceWrapper}>
            <span className={styles.price}>
              €{price.toFixed(2).replace('.', ',')}
            </span>
            <div
              className={`${styles.favoriteIcon} ${
                isFavorite ? styles.active : ''
              }`}
              onClick={handleToggleFavorite}
              aria-label="Toggle favorite"
            >
              <img
                src={
                  isFavorite
                    ? iconsMap.HeartFill
                    : iconsMap.Heart || iconsMap.HeartFill
                }
                alt="Favorite"
                className={styles.iconSmall}
              />
            </div>
          </div>
        </div>

        <div className={styles.subheader}>
          <span className={styles.rating}>
            <img
              src={rating > 0 ? iconsMap.StarFill : iconsMap.Star}
              alt="Rating"
              className={styles.iconSmall}
            />
            {rating > 0 ? `${rating} / 5` : 'No rating'}
          </span>
          <span className={styles.location}>
            <img
              src={iconsMap.MapFill}
              alt="Location"
              className={styles.iconSmall}
            />
            {location}
          </span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.features}>
          {transmission && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Automatic}
                alt="Transmission"
                className={styles.iconSmall}
              />
              {transmission}
            </span>
          )}
          {engine && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Fuel}
                alt="Engine"
                className={styles.iconSmall}
              />
              {engine}
            </span>
          )}
          {AC && (
            <span className={styles.feature}>
              <img src={iconsMap.AC} alt="AC" className={styles.iconSmall} />
              AC
            </span>
          )}
          {kitchen && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Kitchen}
                alt="Kitchen"
                className={styles.iconSmall}
              />
              Kitchen
            </span>
          )}
          {bathroom && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Bathroom}
                alt="Bathroom"
                className={styles.iconSmall}
              />
              Bathroom
            </span>
          )}
          {TV && (
            <span className={styles.feature}>
              <img src={iconsMap.TV} alt="TV" className={styles.iconSmall} />
              TV
            </span>
          )}
          {radio && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Radio}
                alt="Radio"
                className={styles.iconSmall}
              />
              Radio
            </span>
          )}
          {refrigerator && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Refrigerator}
                alt="Refrigerator"
                className={styles.iconSmall}
              />
              Refrigerator
            </span>
          )}
          {microwave && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Microwave}
                alt="Microwave"
                className={styles.iconSmall}
              />
              Microwave
            </span>
          )}
          {gas && (
            <span className={styles.feature}>
              <img src={iconsMap.Gas} alt="Gas" className={styles.iconSmall} />
              Gas
            </span>
          )}
          {water && (
            <span className={styles.feature}>
              <img
                src={iconsMap.Water}
                alt="Water"
                className={styles.iconSmall}
              />
              Water
            </span>
          )}
        </div>

        <div className={styles.footer}>
          <Link to={`/catalog/${id}`} className={styles.moreBtn}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;

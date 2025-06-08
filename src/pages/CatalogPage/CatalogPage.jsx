import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/campers/campersThunks';
import { resetCampers } from '../../redux/campers/campersSlice';
import CamperCard from '../../components/CamperCard/CamperCard';
import Loader from '../../components/Loader/Loader';
import Filters from '../../components/Filters/Filters';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.list);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const error = useSelector((state) => state.campers.error);
  const filters = useSelector((state) => state.filters);
  const favorites = useSelector((state) => state.favorites.items);

  const pageSize = 4;
  const currentPage = Math.ceil(campers.length / pageSize);

  const total = useSelector((state) => state.campers.total);
  const isMoreAvailable = campers.length < total;

  useEffect(() => {
    dispatch(resetCampers());
    dispatch(getCampers({ page: 1, limit: pageSize }));
  }, [dispatch]);

  const typeMap = {
    Van: 'panelTruck',
    'Fully Integrated': 'fullyIntegrated',
    Alcove: 'alcove',
  };

  const amenitiesMap = {
    AC: 'AC',
    Automatic: 'transmission',
    Kitchen: 'kitchen',
    TV: 'TV',
    Bathroom: 'bathroom',
    Gas: 'gas',
    Refrigerator: 'refrigerator',
    Microwave: 'microwave',
    Water: 'water',
  };

  const buildParams = (page) => {
    const params = {
      page,
      limit: pageSize,
    };

    if (filters.location) {
      params.location = filters.location;
    }

    if (filters.type && typeMap[filters.type]) {
      params.form = typeMap[filters.type];
    }

    filters.amenities.forEach((key) => {
      if (key === 'Automatic') {
        params.transmission = 'automatic';
      } else {
        const mappedKey = amenitiesMap[key];
        if (mappedKey) {
          params[mappedKey] = true;
        }
      }
    });

    return params;
  };

  const handleApplyFilters = () => {
    dispatch(resetCampers());
    dispatch(getCampers(buildParams(1)));
  };

  const handleLoadMore = () => {
    dispatch(getCampers(buildParams(currentPage + 1)));
  };

  const favoriteCampers = campers.filter((camper) =>
    favorites.includes(camper.id)
  );
  const nonFavoriteCampers = campers.filter(
    (camper) => !favorites.includes(camper.id)
  );

  const sortedCampers = [...favoriteCampers, ...nonFavoriteCampers];

  const uniqueCampers = Array.from(
    new Map(sortedCampers.map((camper) => [camper.id, camper])).values()
  );

  return (
    <div className={styles.pageWrapper}>
      <aside className={styles.sidebar}>
        <Filters onApply={handleApplyFilters} />
      </aside>

      <section className={styles.campersList}>
        {isLoading && campers.length === 0 && <Loader />}
        {error && error.includes('404') && (
          <p className={styles.notFound}>
            Sorry, nothing was found with the selected filters. Try choosing
            something else.
          </p>
        )}
        {error && !error.includes('404') && (
          <p className={styles.notFound}>
            Something went wrong. Please try again later.
          </p>
        )}

        {uniqueCampers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}

        {!isLoading && isMoreAvailable && !error && (
          <button onClick={handleLoadMore} className={styles.loadMore}>
            Load More
          </button>
        )}

        {isLoading && campers.length > 0 && <Loader />}
      </section>
    </div>
  );
};

export default CatalogPage;

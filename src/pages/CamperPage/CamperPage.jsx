import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperById } from '../../redux/campers/campersThunks';
import { clearSelectedCamper } from '../../redux/campers/campersSlice';
import Loader from '../../components/Loader/Loader';
import Gallery from '../../components/Gallery/Gallery';
import BookingDatePicker from '../../components/BookingDatePicker/BookingDatePicker';
import { iconsMap } from '../../assets/icons';
import styles from './CamperPage.module.css';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.selected);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const [activeTab, setActiveTab] = useState('features');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    dispatch(getCamperById(id));
    return () => dispatch(clearSelectedCamper());
  }, [dispatch, id]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? iconsMap.StarFill : iconsMap.Star}
          alt="star"
          className={styles.iconSmall}
        />
      );
    }
    return stars;
  };

  if (isLoading || !camper) return <Loader />;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.detailsSection}>
        <div className={styles.infoRow}>
          <div className={styles.leftInfo}>
            <h2 className={styles.title}>{camper.name}</h2>
            <div className={styles.topRow}>
              <div className={styles.ratingWrapper}>
                <img
                  src={iconsMap.StarFill}
                  alt="rating"
                  className={styles.iconSmall}
                />
                <a href="#reviews" className={styles.reviewsLink}>
                  <span>{camper.rating.toFixed(1)}</span>(
                  {camper.reviews?.length} Reviews)
                </a>
              </div>

              <div className={styles.ratingWrapper}>
                <img
                  src={iconsMap.Map}
                  alt="location"
                  className={styles.iconSmall}
                />
                <span>{camper.location}</span>
              </div>
            </div>
            <p className={styles.price}>
              €
              {camper.price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>

          <div className={styles.gallerySection}>
            <Gallery images={camper.gallery} />
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.tabs}>
          <button
            className={activeTab === 'features' ? styles.active : ''}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button
            className={activeTab === 'reviews' ? styles.active : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>

        <div className={styles.tabContentWrapper}>
          <div
            className={`${styles.tabContentLeft} ${
              activeTab === 'features' ? styles.reviewsBg : ''
            }`}
          >
            {activeTab === 'features' && (
              <>
                <div className={styles.features}>
                  {camper.transmission && (
                    <span>
                      <img
                        src={iconsMap.Automatic}
                        alt="Transmission"
                        className={styles.iconSmall}
                      />
                      {camper.transmission}
                    </span>
                  )}
                  {camper.AC && (
                    <span>
                      <img
                        src={iconsMap.AC}
                        alt="AC"
                        className={styles.iconSmall}
                      />
                      AC
                    </span>
                  )}
                  {camper.engine && (
                    <span>
                      <img
                        src={iconsMap.Fuel}
                        alt="Engine"
                        className={styles.iconSmall}
                      />
                      {camper.engine}
                    </span>
                  )}
                  {camper.kitchen && (
                    <span>
                      <img
                        src={iconsMap.Kitchen}
                        alt="Kitchen"
                        className={styles.iconSmall}
                      />
                      Kitchen
                    </span>
                  )}
                  {camper.TV && (
                    <span>
                      <img
                        src={iconsMap.TV}
                        alt="TV"
                        className={styles.iconSmall}
                      />
                      TV
                    </span>
                  )}
                  {camper.radio && (
                    <span>
                      <img
                        src={iconsMap.Radio}
                        alt="Radio"
                        className={styles.iconSmall}
                      />
                      Radio
                    </span>
                  )}
                  {camper.refrigerator && (
                    <span>
                      <img
                        src={iconsMap.Refrigerator}
                        alt="Refrigerator"
                        className={styles.iconSmall}
                      />
                      Refrigerator
                    </span>
                  )}
                  {camper.microwave && (
                    <span>
                      <img
                        src={iconsMap.Microwave}
                        alt="Microwave"
                        className={styles.iconSmall}
                      />
                      Microwave
                    </span>
                  )}
                  {camper.gas && (
                    <span>
                      <img
                        src={iconsMap.Gas}
                        alt="Gas"
                        className={styles.iconSmall}
                      />
                      Gas
                    </span>
                  )}
                  {camper.water && (
                    <span>
                      <img
                        src={iconsMap.Water}
                        alt="Water"
                        className={styles.iconSmall}
                      />
                      Water
                    </span>
                  )}
                  {camper.bathroom && (
                    <span>
                      <img
                        src={iconsMap.Bathroom}
                        alt="Bathroom"
                        className={styles.iconSmall}
                      />
                      Bathroom
                    </span>
                  )}
                </div>

                <div className={styles.vehicleDetails}>
                  <h3>Vehicle details</h3>
                  <div className={styles.detailRow}>
                    <span>Form:</span>
                    <span>{camper.form}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Length:</span>
                    <span>{camper.length}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Width:</span>
                    <span>{camper.width}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Height:</span>
                    <span>{camper.height}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Tank:</span>
                    <span>{camper.tank}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Consumption:</span>
                    <span>{camper.consumption}</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'reviews' && (
              <div className={styles.reviews}>
                {camper.reviews?.map((review, idx) => (
                  <div key={idx} className={styles.reviewItem}>
                    <div className={styles.avatarAndContent}>
                      <div className={styles.avatar}>
                        {review.reviewer_name.charAt(0)}
                      </div>
                      <div>
                        <p className={styles.reviewerName}>
                          {review.reviewer_name}
                        </p>
                        <div className={styles.stars}>
                          {renderStars(review.reviewer_rating)}
                        </div>
                      </div>
                    </div>
                    <p className={styles.comment}>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.tabContentRight}>
            <div className={styles.bookingForm}>
              <h3>Book your campervan now</h3>
              <p>Stay connected! We are always ready to help you.</p>
              <form>
                <input type="text" placeholder="Name*" required />
                <input type="email" placeholder="Email*" required />
                <BookingDatePicker
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />

                <textarea placeholder="Comment" />
                <button className={styles.bookingButtonSubmit} type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperPage;

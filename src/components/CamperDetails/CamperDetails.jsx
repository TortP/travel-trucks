import styles from './CamperDetails.module.css';

const CamperDetails = ({ data }) => {
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <p>
          <strong>Form:</strong> {form}
        </p>
        <p>
          <strong>Size:</strong> {length} × {width} × {height}
        </p>
        <p>
          <strong>Tank:</strong> {tank}
        </p>
        <p>
          <strong>Consumption:</strong> {consumption}
        </p>
      </div>

      <div className={styles.features}>
        <p>
          <strong>Transmission:</strong> {transmission}
        </p>
        <p>
          <strong>Engine:</strong> {engine}
        </p>
        {AC && <p>AC</p>}
        {bathroom && <p>Bathroom</p>}
        {kitchen && <p>Kitchen</p>}
        {TV && <p>TV</p>}
        {radio && <p>Radio</p>}
        {refrigerator && <p>Refrigerator</p>}
        {microwave && <p>Microwave</p>}
        {gas && <p>Gas</p>}
        {water && <p>Water</p>}
      </div>
    </div>
  );
};

export default CamperDetails;

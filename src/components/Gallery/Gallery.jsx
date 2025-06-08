import styles from './Gallery.module.css';

const Gallery = ({ images = [] }) => {
  return (
    <div className={styles.galleryGrid}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.thumb}
          alt={`Gallery image ${index + 1}`}
          className={styles.galleryImage}
        />
      ))}
    </div>
  );
};

export default Gallery;

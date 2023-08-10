import styles from "./lightbox.module.css";
import utils from "./utils.module.css";

export default function Lightbox({
  showLightbox,
  imgIndex,
  images,
  setImgIndex,
  onClose,
}) {
  // Handle slider buttons click
  const goToPrevImg = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? images.mainImgs.length - 1 : prevIndex - 1
    );
  };

  const goToNextImg = () => {
    setImgIndex((prevIndex) =>
      prevIndex === images.mainImgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={
        showLightbox
          ? `${styles.lightbox} ${styles.lightboxActive}`
          : `${styles.lightbox}`
      }
    >
      <div className={styles.bgUnderlay} onClick={onClose}></div>
      <div className={styles.lightboxGallery}>
        <svg
          className={styles.lightboxClose}
          width="20"
          height="20"
          viewBox="0 0 14 15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClose}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </svg>

        <div className={styles.lightboxGalleryCover}>
          <button className={`${styles.btnSliderPrev}`} onClick={goToPrevImg}>
            <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className={`${styles.btnSliderNext}`} onClick={goToNextImg}>
            <svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <img src={images.mainImgs[imgIndex].src} alt="Lightbox cover image" />
        </div>
        <ul className={`${styles.lightboxThumbnails} ${utils.flex}`}>
          {images.thumbnails.map((element, index) => (
            <li
              key={index}
              className={
                imgIndex === index
                  ? `${styles.lightboxThumbnail} ${styles.lightboxThumbnailActive}`
                  : styles.lightboxThumbnail
              }
              onClick={() => setImgIndex(index)}
            >
              <img src={element.src} alt={`Lightbox thumbnail ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

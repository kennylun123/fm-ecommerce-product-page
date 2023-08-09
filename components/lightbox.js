import styles from "./lightbox.module.css";
import utils from "./utils.module.css";

export default function Lightbox({
  showLightbox,
  imgIndex,
  images,
  onSelect,
  onClose,
}) {
  // Handle slider buttons click
  const onImgSlide = (direction) => {
    if (direction === "left") {
      if (imgIndex > 0) {
        onSelect(imgIndex - 1);
      } else {
        onSelect(images.thumbnails.length - 1);
      }
    }
    if (direction === "right") {
      if (imgIndex < images.thumbnails.length - 1) {
        onSelect(imgIndex + 1);
      } else {
        onSelect(0);
      }
    }
  };
  return (
    <div
      className={
        showLightbox
          ? `${styles.lightbox} ${styles.lightboxActive} ${utils.flex}`
          : `${styles.lightbox} ${utils.flex}`
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
          <button
            className={`${styles.btnSliderPrev}`}
            onClick={() => onImgSlide("left")}
          >
            <img src="images/icon-previous.svg" alt="Image Previous Button" />
          </button>
          <button
            className={`${styles.btnSliderNext}`}
            onClick={() => onImgSlide("right")}
          >
            <img src="images/icon-next.svg" alt="Image Next Button" />
          </button>
          <img src={images.mainImgs[imgIndex].src} alt="Lightbox cover image" />
        </div>
        <ul className={`${styles.lightboxThumbnails} ${utils.flex}`}>
          <li
            className={
              imgIndex === 0
                ? `${styles.lightboxThumbnail} ${styles.lightboxThumbnailActive}`
                : styles.lightboxThumbnail
            }
            onClick={() => onSelect(0)}
          >
            <img src={images.thumbnails[0].src} alt="Lightbox thumbnail 1" />
          </li>
          <li
            className={
              imgIndex === 1
                ? `${styles.lightboxThumbnail} ${styles.lightboxThumbnailActive}`
                : styles.lightboxThumbnail
            }
            onClick={() => onSelect(1)}
          >
            <img src={images.thumbnails[1].src} alt="Lightbox thumbnail 2" />
          </li>
          <li
            className={
              imgIndex === 2
                ? `${styles.lightboxThumbnail} ${styles.lightboxThumbnailActive}`
                : styles.lightboxThumbnail
            }
            onClick={() => onSelect(2)}
          >
            <img src={images.thumbnails[2].src} alt="Lightbox thumbnail 3" />
          </li>
          <li
            className={
              imgIndex === 3
                ? `${styles.lightboxThumbnail} ${styles.lightboxThumbnailActive}`
                : styles.lightboxThumbnail
            }
            onClick={() => onSelect(3)}
          >
            <img src={images.thumbnails[3].src} alt="Lightbox thumbnail 4" />
          </li>
        </ul>
      </div>
    </div>
  );
}

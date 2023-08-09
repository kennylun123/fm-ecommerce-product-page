"use client";

import { useState } from "react";
import styles from "./productGallery.module.css";
import utils from "./utils.module.css";
import Lightbox from "./lightbox";

export default function ProductGallery({ images }) {
  const [showLightbox, setShowLightbox] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className={styles.productGallery}>
      <div
        className={styles.productGalleryCover}
        onClick={() => setShowLightbox(true)}
      >
        <img src={images.mainImgs[imgIndex].src} alt="gallery-cover-image" />
      </div>
      <ul className={`${styles.productThumbnails} ${utils.flex}`}>
        <li
          className={
            imgIndex === 0
              ? `${styles.productThumbnail} ${styles.productThumbnailActive}`
              : styles.productThumbnail
          }
          onClick={() => setImgIndex(0)}
        >
          <img src={images.thumbnails[0].src} alt="product-thumbnail-1" />
        </li>
        <li
          className={
            imgIndex === 1
              ? `${styles.productThumbnail} ${styles.productThumbnailActive}`
              : styles.productThumbnail
          }
          onClick={() => setImgIndex(1)}
        >
          <img src={images.thumbnails[1].src} alt="product-thumbnail-2" />
        </li>
        <li
          className={
            imgIndex === 2
              ? `${styles.productThumbnail} ${styles.productThumbnailActive}`
              : styles.productThumbnail
          }
          onClick={() => setImgIndex(2)}
        >
          <img src={images.thumbnails[2].src} alt="product-thumbnail-3" />
        </li>
        <li
          className={
            imgIndex === 3
              ? `${styles.productThumbnail} ${styles.productThumbnailActive}`
              : styles.productThumbnail
          }
          onClick={() => setImgIndex(3)}
        >
          <img src={images.thumbnails[3].src} alt="product-thumbnail-4" />
        </li>
      </ul>
      <Lightbox
        showLightbox={showLightbox}
        imgIndex={imgIndex}
        images={images}
        onSelect={setImgIndex}
        onClose={() => setShowLightbox(false)}
      />

      <div className={styles.productGallerySlider}>
        <img src={images.sliderImgs[0].img.src} alt="Product Image 1" />
        <img src={images.sliderImgs[1].img.src} alt="Product Image 2" />
        <img src={images.sliderImgs[2].img.src} alt="Product Image 3" />
        <img src={images.sliderImgs[3].img.src} alt="Product Image 4" />
      </div>
      <button className={`${styles.btnSliderPrev}`}>
        <img src="images/icon-previous.svg" alt="Image Previous Button" />
      </button>
      <button className={`${styles.btnSliderNext}`}>
        <img src="images/icon-next.svg" alt="Image Next Button" />
      </button>
    </div>
  );
}

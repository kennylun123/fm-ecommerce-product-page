import AddToCart from "@/components/addToCart";
import styles from "./page.module.css";
import utils from "@/components/utils.module.css";
import { product } from "@/public/data";

export default function RootPage() {
  return (
    <main className={`${styles.main} ${utils.flex}`}>
      <h1 className={utils.srOnly}>
        Frontend Mentor | E-commerce product page
      </h1>
      <div className={styles.productGallery}>
        <div className={styles.productGalleryCover}>
          <img src={product.images.mainImg.src} alt="gallery-cover-image" />
        </div>
        <ul className={`${styles.productThumbnails} ${utils.flex}`}>
          <li className={styles.productThumbnail}>
            <img
              src={product.images.thumbnails[0].src}
              alt="product-thumbnail-1"
            />
          </li>
          <li className={styles.productThumbnail}>
            <img
              src={product.images.thumbnails[1].src}
              alt="product-thumbnail-2"
            />
          </li>
          <li className={styles.productThumbnail}>
            <img
              src={product.images.thumbnails[2].src}
              alt="product-thumbnail-3"
            />
          </li>
          <li className={styles.productThumbnail}>
            <img
              src={product.images.thumbnails[3].src}
              alt="product-thumbnail-4"
            />
          </li>
        </ul>
        <div className={`${styles.productGallerySlider}`}>
          <img
            src={product.images.sliderImgs[0].img.src}
            alt="Product Image 1"
          />
          <img
            src={product.images.sliderImgs[1].img.src}
            alt="Product Image 2"
          />
          <img
            src={product.images.sliderImgs[2].img.src}
            alt="Product Image 3"
          />
          <img
            src={product.images.sliderImgs[3].img.src}
            alt="Product Image 4"
          />
        </div>
        <button className={`${styles.btnSliderPrev}`}>
          <img src="images/icon-previous.svg" alt="Image Previous Button" />
        </button>
        <button className={`${styles.btnSliderNext}`}>
          <img src="images/icon-next.svg" alt="Image Next Button" />
        </button>
      </div>
      <div className={styles.productDetail}>
        <span
          className={`${styles.companyName} ${utils.upperCase} ${utils.textOrange400} ${utils.fs300} ${utils.fw700}`}
        >
          {product.company}
        </span>
        <h1 className={`${utils.textNeutral700} ${utils.fs800}`}>
          {product.title}
        </h1>
        <p>{product.description}</p>
        <div className={`${styles.productPrice} ${utils.flex}`}>
          <div className={`${styles.newPrice} ${utils.flex} ${utils.fw700}`}>
            <span className={`${utils.textNeutral700} ${utils.fs500}`}>
              ${product.currentPrice.toFixed(2)}
            </span>
            <span className={`${styles.discount} ${utils.textOrange400}`}>
              {product.discount}%
            </span>
          </div>
          <span
            className={`${utils.textNeutral300} ${utils.lineThrough} ${utils.fw700}`}
          >
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>
        <AddToCart
          name={product.title}
          price={product.currentPrice}
          thumbnail={product.images.thumbnails[0].src}
        />
      </div>
    </main>
  );
}

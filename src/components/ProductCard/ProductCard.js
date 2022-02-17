import s from './ProductCard.module.css'


const ProductCard = ({
  productImage,
  productName,
  productCount,
  productSize,
  productWeight,
  productComments}) => {
 
  return (
    <div className={s.itemContaoner} >
      <h2 className={s.itemHeader}>{productName}</h2>
      <img src={productImage} alt={productName} className={s.ImageGalleryItemImage} width = "200px" height = "150px"/>
      <ul>
        <li>
          <p className={s.itemText}>
            Count:{productCount}
          </p>
        </li>
         <li>
          <p className={s.itemText}>
            Width:{productSize.width}
          </p>
        </li>
        <li>
          <p className={s.itemText}>
            Height:{productSize.height}
          </p>
        </li>
        <li>
          <p className={s.itemText}>
            Weight:{productWeight}
          </p>
        </li>
        <li>
          <p className={s.itemText}>
            Comments:{productComments}
          </p>
        </li>
      </ul>
    </div>
   
  );
}

export default ProductCard

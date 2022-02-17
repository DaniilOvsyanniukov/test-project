import ProductCard from '../ProductCard/ProductCard';
import s from './ProductList.module.css'



const ProductList = ({ productList, openModal }) => {

  return (
      <ul className={s.productList}>
          {[...productList].map((product) => {
              return <li key={product._id} className={s.productListItem} onClick={() => {openModal(product._id)}}>
                  <ProductCard
                      productImage={product.imageUrl}
                      productName={product.name}
                      productCount={product.count}
                      productSize={product.size}
                      productWeight={product.weight}
                      productComments={product.comments}
                      productId={product._id}
                      openModal={openModal}  
              />
              </li>
          })

          }
      </ul>
   
  );
}

export default ProductList
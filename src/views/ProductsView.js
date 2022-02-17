import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import ProductsList from "../components/ProductList/ProductList"
import InputForm from "../components/InputForm/InputForm";
import selectors from '../redux/products/products-selectors';
import s from './ProductsView.module.css'
import { initUserId } from '../redux/products/products-actions';
import operations from '../redux/products/products-operations';
import shortid from "shortid";

const ProductsView = () => {
  const dispatch = useDispatch();
  const userID = useSelector(selectors.getUserId);
  const productsList = useSelector(selectors.getProducts);
  const newId =  shortid.generate()
  const [showModal, setShowModal] = useState(false);
  const [inputOf, setInputOf] = useState(false);
  const [editProductId, setEditProductId] = useState("");

  useEffect(() => {
    if (!userID) {
      dispatch(initUserId({ newId }))   
    } else {
      dispatch(operations.fatchAllproducts(userID))
    }
  }, []);
  
  const activEditModal = (memberId) => {
    setShowModal(true)
    setInputOf(true)
    setEditProductId(memberId)
  }

  return (
    <div>
      <div className={s.header}>
        <h1 className={s.text}>Products</h1>
        <button
        className={s.button}
              type="button"
              onClick={()=>setShowModal(true)}
        >Add Product</button>
      </div>
      {productsList.length === 0 ? null : <ProductsList productList={productsList} openModal={ activEditModal }/>}
      <InputForm active={showModal} setActive={setShowModal} inputOf={inputOf} setInputOf={setInputOf} editProductId={editProductId} setEditProductId={setEditProductId}/>
    </div>
  );
}




export default ProductsView;

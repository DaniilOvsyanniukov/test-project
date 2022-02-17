import {
  fatchProductRequest,
  fatchProductSuccess,
  fatchProductError,
  setProductRequest,
  setProductSuccess,
  setProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  updateProductRequest,
  updateProductSuccess,
  updateProductError,

} from "./products-actions";

import axios from "axios";

axios.defaults.baseURL = `https://test-project-server-sets.herokuapp.com/api/products`;



const fatchAllproducts = (userId) => async (dispatch) => {
  dispatch(fatchProductRequest());
  try {
    const { data } = await axios.get(`/?id=${userId}`);
    
    dispatch(fatchProductSuccess(data));
  } catch (error) {
    dispatch(fatchProductError(error));
  }
};

const addProduct = (newProduct) => (dispatch) => {
  dispatch(setProductRequest());
  axios
    .post("/", newProduct)
    .then(({ data }) => {
     dispatch(setProductSuccess(data))
    })
    .catch((error) => dispatch(setProductError(error)));
};

const deleteProduct = ( productId ) => (dispatch) => {
  dispatch(deleteProductRequest());
  axios
    .delete(`/${productId}`)
    .then(({ data }) => {
      dispatch(deleteProductSuccess(data))
    })
    .catch((error) => dispatch(deleteProductError(error)));
};

const updateProduct = (productId, newProduct) => (dispatch) => {
  dispatch(updateProductRequest());
  axios
    .put(`/${productId}`, newProduct)
    .then(({ data }) => {
      dispatch(updateProductSuccess(data))
    })
    .catch((error) => dispatch(updateProductError(error)));
};

const operations = {
  fatchAllproducts,
  addProduct,
  deleteProduct,
  updateProduct,
};

export default operations;
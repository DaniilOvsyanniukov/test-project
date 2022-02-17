import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  initUserId,
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

const isLoading = createReducer(false, {
  [fatchProductRequest]: () => true,
  [fatchProductSuccess]: () => false,
  [fatchProductError]: () => false,
  [setProductRequest]: () => true,
  [setProductSuccess]: () => false,
  [setProductError]: () => false,
  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,
  [updateProductRequest]: () => true,
  [updateProductSuccess]: () => false,
  [updateProductError]: () => false,
});

const productReducer = createReducer([], {
  [fatchProductSuccess]: (_, { payload }) => payload,
  [setProductSuccess]: (_, { payload }) => payload,
  [deleteProductSuccess]: (_, { payload }) => payload,
  [updateProductSuccess]: (_, { payload }) => payload,
});

const createUserId = createReducer("", {
  [initUserId]: (_, { payload })=> payload.newId,
});

const error = createReducer(null, {});

export default combineReducers({
  products: productReducer,
  userId: createUserId,
  isLoading,
  error,
});
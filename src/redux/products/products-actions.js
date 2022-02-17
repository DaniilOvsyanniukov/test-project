import { createAction } from "@reduxjs/toolkit";

export const initUserId = createAction("product/initUserId");

export const fatchProductRequest = createAction("product/fatchProductRequest");
export const fatchProductSuccess = createAction("product/fatchProductSuccess");
export const fatchProductError = createAction("product/fatchProductError");

export const setProductRequest = createAction("product/setProductRequest");
export const setProductSuccess = createAction("product/setProductSucces");
export const setProductError = createAction("product/setProductError");

export const deleteProductRequest = createAction("product/deleteProductRequest");
export const deleteProductSuccess = createAction("product/deleteProductSuccess");
export const deleteProductError = createAction("product/deleteProductError");

export const updateProductRequest = createAction("product/updateProductRequest");
export const updateProductSuccess = createAction("product/updateProductSuccess");
export const updateProductError = createAction("product/updateProductError");
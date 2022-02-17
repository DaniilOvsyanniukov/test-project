const getProducts = (state) => state.products.products;
const getUserId = (state) => state.products.userId;

const selectors = { getProducts, getUserId};

export default selectors;
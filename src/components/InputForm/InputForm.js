import { useState, useEffect } from 'react';
import "./InputForm.css";
import { useDispatch ,useSelector} from 'react-redux';
import operations from '../../redux/products/products-operations';
import selectors from '../../redux/products/products-selectors'
import ConfirmModal from '../ConfirmModal/ConfirmModal'

const InputForm = ({ active, setActive, inputOf, setInputOf, editProductId, setEditProductId}) => {
  const userId = useSelector(selectors.getUserId)
  const products = useSelector(selectors.getProducts)
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [comments, setComments] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const[deleteConfirmModal, setDeleteConfirmModal] = useState(false)


  useEffect(() => {
    if (editProductId) {
      findCurrentProduct()
    } return
  }, [active]);

  const findCurrentProduct = () => {
    const product = products.find((product) => {
      if (product._id === editProductId) { return true }
      return false
    })
    
    setImageUrl(product.imageUrl);
    setName(product.name);
    setCount(product.count);
    setWidth(product.size.width);
    setHeight(product.size.height);
    setWeight(product.weight);
    setComments(product.comments);
    return 
  }

  const confirmEdit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true)
    setDeleteConfirmModal(false)
  }

   const confirmDelete = () => {
    setShowConfirmModal(true)
    setDeleteConfirmModal(true)
  }

    

  const formsubmit = (e) => {
    e.preventDefault();
    dispatch(operations.addProduct({imageUrl, name, count, size: {
      width, height
    }, weight, comments, userId}))
    reset();
  };

  
  const editProduct = (e) => {
    e.preventDefault();
    dispatch(operations.updateProduct(editProductId, {
      imageUrl, name, count, size: {
      width, height
    }, weight, comments, userId}))
    reset();
  }

  const deleteProduct = (e) => {
    e.preventDefault();
    dispatch(operations.deleteProduct(editProductId))
    reset();
  }

  const reset = () => {
    setImageUrl("");
    setName("");
    setCount("");
    setWidth("");
    setHeight("");
    setWeight("");
    setComments("");
    setEditProductId("")
    setActive(false)
    setInputOf(false)
    setShowConfirmModal(false)
    setDeleteConfirmModal(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "imageUrl":
        setImageUrl(value);
        break;
      case "name":
        setName(value);
        break;
      case "count":
        setCount(value);
        break;
      case "width":
        setWidth(value);
        break;
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      case "comments":
        setComments(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={active? "formBack active" : "formBack"} onClick={() => reset() }>
    <form onSubmit={inputOf? confirmEdit : formsubmit} className='form' onClick={e => e.stopPropagation()}>
        <ul className='formInputList'>
          <li className='formInputItem'>
            <label className='label'>
              Name 
              <input
                className='input'
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
                required
              />
            </label>
          </li>
          <li  className='formInputItem'>
            <label className='label'>
              Image
              <input
                className='input'
                type="url" 
                name="imageUrl"
                value={imageUrl}
                onChange={handleInputChange}
                title="Enter image link"
                required
              /> 
            </label>
          </li>
          <li  className='formInputItem'>
            <label className='label'>
              Count 
              <input
                className='input'
                type="number"
                name="count"
                value={count}
                onChange={handleInputChange}
                title="Enter product count"
              />
            </label>
          </li>
           <li  className='formInputItem'>
            <label className='label'>
              Width 
              <input
                className='input'
                type="number"
                name="width"
                value={width}
                onChange={handleInputChange}
                title="Enter product width"
              />
            </label>
          </li>
           <li  className='formInputItem'>
            <label className='label'>
              Height 
              <input
                className='input'
                type="number"
                name="height"
                value={height}
                onChange={handleInputChange}
                title="Enter product height"
              />
            </label>
          </li>
           <li  className='formInputItem'>
            <label className='label'>
              Weight 
              <input
                className='input'
                type="text"
                name="weight"
                value={weight}
                onChange={handleInputChange}
                title="Enter product weight"
              />
            </label>
          </li>
          <li  className='formInputItem'>
            <label className='label'>
              Comments 
              <input
                className='input'
                type="text"
                name="comments"
                value={comments}
                onChange={handleInputChange}
                title="Enter product comment"
              />
            </label>
          </li>
        </ul> 
        <ul className='buttonList'>
          <li className='buttonListItem'>
            <button
          className='button'
          type="submit">
        {inputOf? "Update" : "Add"}
        </button>
          </li>
       {inputOf? <li className='buttonListItem'><button
        className='button'
              type="button"
              onClick={confirmDelete}
        >Delete</button></li> : null}

        </ul>
        

        
      </form>
      <ConfirmModal  active={showConfirmModal} setActive={setShowConfirmModal} action={deleteConfirmModal? deleteProduct : editProduct} reset={reset}/>
    </div>
  ) 

}

export default InputForm;
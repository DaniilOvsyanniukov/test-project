import "./ConfirmModal.css";
const ConfirmModal = ({ active, setActive, action }) => {
    return (
      
        <div className={active ? "modalConfirmBack active" : "modalConfirmBack"} onClick={e => e.stopPropagation()}>
            <div className ='modalConfirm'>
                <p className="modalConfirmText">Are you shure?</p>
          <ul className ='modalConfirmButtonList'>
              <li className ='modalConfirmButtonItem'>
                  <button
                      className='button'
                      type="button"
                      onClick={action}>
                      Yes
                  </button>
              </li>
              <li>
                  <button 
                      className='button'
                      type="button"
                      onClick={()=>{setActive(false)}}>
                      No
                  </button>
              </li>
          </ul></div>
          
      </div>
  ) 

}

export default ConfirmModal;
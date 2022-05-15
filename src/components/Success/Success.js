import './Success.css';

function Success(props) {
  const {
    isSuccessOpen,
    handleCloseModal,
    redirectToLogin
  } = props;

  return (
    <div className={`success ${isSuccessOpen && 'success_active'}`} onClick={(event)=>{event.stopPropagation()}}>
      <h2 className='success__title'>Registration successfully completed!</h2>
      <p className='success__redirect' onClick={redirectToLogin}>Sign in</p>
      <button className='success__close' onClick={handleCloseModal} >&#10005;</button >
    </div>
  )
}

export default Success;
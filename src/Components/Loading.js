import loadingSVG from '../Assets/loading.svg';

function Loading() {
  return (
    <div className="loading">
      <img src={loadingSVG} alt="Loading icon" className='loading-icon' />
      <p>Loading...</p>
    </div>
  );
}
export default Loading;
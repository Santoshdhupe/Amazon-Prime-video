// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={movie.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail-image"
          />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="cancel-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="player-container">
              <ReactPlayer url={movie.videoUrl} controls playing />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem

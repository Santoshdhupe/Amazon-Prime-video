// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  return (
    <Slider {...settings}>
      {movies.map(eachMovie => (
        <MovieItem key={eachMovie.id} movie={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider

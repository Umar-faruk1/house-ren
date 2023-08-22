import {FaQuoteLeft} from 'react-icons/fa'
import {FaQuoteRight} from 'react-icons/fa'
import Profile from '../images/profile.jpg'
import Rating15 from '../images/rating-15.png'
import Rating30 from '../images/rating-30.png'
import Rating45 from '../images/rating-45.png'

const Testimonials = () => {
  return (
    <div class="testimonial">
    <div class="small-container">
      <h2>Testimonials</h2>
        <div class="row">
            <div class="col-3">
                <FaQuoteLeft/>
                <p>Lorem ipsum dolor sit, ametconsectetur adipisicing
                elit. Delectus minima quos doloribus repellat harum null
                a.</p>
                <div class="rating">
                    <img src={Rating15}/>
                </div>
                <img src={Profile}/>
                <h3>Umar Faruk</h3>
            </div>
            <div class="col-3">
                <FaQuoteRight/>
                <p>Lorem ipsum dolor sit, ametconsectetur adipisicing
                elit. Delectus minima quos doloribus repellat harum null
                a.</p>
                <div class="rating">
                    <img src={Rating30}/>
                </div>
                <img src={Profile}/>
                <h3>Umar Faruk</h3>
            </div>
            <div class="col-3">
                <FaQuoteLeft/>
                <p>Lorem ipsum dolor sit, ametconsectetur adipisicing
                elit. Delectus minima quos doloribus repellat harum null
                a.</p>
                <div class="rating">
                    <img src={Rating45}/>
                </div>
                <img src={Profile}/>
                <h3>Umar Faruk</h3>
            </div>
        </div>
    </div>
</div>

  )
}

export default Testimonials

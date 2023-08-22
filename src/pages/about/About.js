import Header from "../../components/Header"
import './about.css'
import HeaderImage from '../../images/image2.jpg'
import StoryImage from '../../images/profile.jpg'
import VisionImage from '../../images/profile.jpg'
import MissionImage from '../../images/profile.jpg'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Lorem ipsum dolor sit, ametconsectetur adipisicing
    elit. Delectus minima quos doloribus repellat harum null
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-img">
          <img src={StoryImage} alt="soryImg"/>
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
      
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
        </div>
        <div className="about_section-img">
          <img src={VisionImage} alt="VisionImg"/>
        </div>
      </div>
    </section>
    

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-img">
          <img src={MissionImage} alt="soryImg"/>
        </div>
        <div className="about_section-content">
          <h1>Our mission</h1>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
          <p>
          Lorem ipsum dolor sit, ametconsectetur adipisicing
          elit. Delectus minima quos doloribus repellat harum null
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About

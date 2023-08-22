import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to='/' className="logo">
            <img src={Logo} alt="footer Logo"/>
          </Link>
          <p>
            Lorem ipsum dolor sit, ametconsectetur adipisicing
            elit. Delectus minima quos doloribus repellat harum null
            a.
          </p>
          <div className="footer_socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/residencies'>Residencies</Link>
          <Link to='/ourvalue'>Our Value</Link>
          <Link to='/contact'>Contact</Link>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/residencies'>Residencies</Link>
          <Link to='/ourvalue'>Our Value</Link>
          <Link to='/contact'>Contact</Link>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to='/about'>About</Link>
          <Link to='/residencies'>Residencies</Link>
          <Link to='/ourvalue'>Our Value</Link>
          <Link to='/contact'>Contact</Link>
        </article>
      </div>
      <div className="footer_copyright">
        <small>2023 &copy; All Right Reserved</small>
      </div>
    </footer>
  )
}

export default Footer

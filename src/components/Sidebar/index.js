import './index.scss'
import LogoS from '../../assets/images/logo_s.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/niccolo-bressler-6994ab1a7/">
                    <FontAwesomeIcon icon={faLinkedin} color="ffffff" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/niccolo-bressler-6994ab1a7/">
                    <FontAwesomeIcon icon={faGithub} color="ffffff" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
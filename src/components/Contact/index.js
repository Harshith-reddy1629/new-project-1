import {BiLogoGmail, BiPhone} from 'react-icons/bi'
import './index.css'
import ReactPopUp from '../ContactBtn'
import ContactsList from '../ContactLists'

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-heading">CONNECT ME ON</h1>

    <div className="contact-items-container">
      {ContactsList.map(each => (
        <ReactPopUp key={each.id} item={each} />
      ))}
    </div>
    <div className="cont-div">
      <p className="mail">
        <BiLogoGmail size={20} />: reddybharshith3@gmail.com{' '}
      </p>
      <p className="mail">
        <BiPhone size={20} />: 6281715949{' '}
      </p>
    </div>
  </div>
)

export default Contact

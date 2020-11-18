import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouzz, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const SnsIcons  = () => {
  return (
    <div>
      <div className="sns-icons">
      <a href="#"><FontAwesomeIcon className="snsIcon" icon={faHouzz} alt="houzz" /></a>
        
      <a href="#"><FontAwesomeIcon className="snsIcon" icon={faInstagram} alt="instagram" /></a>
      
      <a href="#"><FontAwesomeIcon className="snsIcon" icon={faLinkedin} alt="linkedin" /></a>

      <a href="#"><FontAwesomeIcon className="snsIcon" icon={faFacebookF} alt="facebook" /></a>
      </div>
    </div>
  )
}

export default SnsIcons;
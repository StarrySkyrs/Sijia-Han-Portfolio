import React from 'react';
import '../assets/style/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  faWeixin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return  (
    <div className="getintouch" id="contact">
      <div className="section">
        <h1>Let's create awesome stuff together!</h1>
        <div className="line"></div>
        <p>Feel free to reach out to me on social media.</p>
        <div className="info">
          <ul>
            <li><a href="https://www.linkedin.com/in/sijia-han-6618761b6/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
            <li><a href="mailto:sijia.han@hotmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a></li>
            <li><a href="https://github.com/StarrySkyrs" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
            <li><a href="https://drive.google.com/file/d/1J14Ij4qTMSsFqropXteC8h1Q67lxkANI/view" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWeixin} size="2x"/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
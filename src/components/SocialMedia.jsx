import React from 'react';
import { BsTwitter, BsInstagram,BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/hingo-rocha/" target="_blank" rel="noopener noreferrer" alt="LinkedIn"><BsLinkedin /></a>
            </div>
            <div>
                <a href="https://github.com/hgoulart" target="_blank" rel="noopener noreferrer" alt="GitHub"><BsGithub /></a>
            </div>
            <div>
                <a href="https://www.facebook.com/hingo.rocha" target="_blank" rel="noopener noreferrer" alt="Facebook"><FaFacebookF /></a>
            </div>
            <div>
                <a href="https://twitter.com/hingorocha" target="_blank" rel="noopener noreferrer" alt="Twitter"><BsTwitter /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/hingorocha/" target="_blank" rel="noopener noreferrer" alt="Instagram"><BsInstagram /></a>
            </div>
        </div>
    )
}

export default SocialMedia


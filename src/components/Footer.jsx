import React from 'react';
import IgLogo from '@images/ig_logo.png';
import Telescope from '@images/telescope.png';
import ZoomableImage from './ZoomableImage.jsx';

class Footer extends React.Component {    
    toggleStars() {
        if (document.body.style.backgroundImage === "") {
            document.body.style.backgroundImage = "url('https://nighterrands.s3.amazonaws.com/images/stars.gif')";
        } else {
            document.body.style.backgroundImage = "";
        }
    }

    render() {
        return (
            <div className='ne-footer-wrap'>
                <div className='ne-footer-spacer' />
                <div className="ne-footer">
                    <div className="spacer"/>
                    <img className='ne-stars' src={Telescope} onClick={() => this.toggleStars()} alt="night" height="20" width="20"/>
                    <ZoomableImage
                        largeImageSrc={"https://nighterrands.s3.amazonaws.com/images/logo.png"}
                        smallImageSrc={"https://nighterrands.s3.amazonaws.com/images/logo-small.png"}
                        width={25}
                        height={25}
                    />
                    <a href="https://www.instagram.com/nighterrands" target="_blank" rel="noopener noreferrer"><img src={IgLogo} alt="Insta" height="20" width="20"/></a>
                    <div className="spacer"/>
                </div>
            </div>
        )
    }
  }

export default Footer;
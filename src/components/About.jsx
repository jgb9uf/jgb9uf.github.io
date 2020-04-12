import React from 'react';
import bios from '../data/bios.json';
import IgLogo from '@images/ig_logo.png';
import ZoomableImage from './ZoomableImage.jsx';

function About(props) {    
    function renderBio(name, email, gram) {
        return (
            <div className='ne-bio'>
                <div className='ne-bio-name'>
                    {name}
                </div>
                <span>
                    {gram && <a className="ne-bio-gram" href={gram} target="_blank" rel="noopener noreferrer"><img src={IgLogo} alt="Insta" height="15" width="15"/></a>}
                    {email && <a className="ne-bio-email" href={"mailto:" + email}>{email}</a>}
                </span>
                <div className='ne-bio-image'>
                    <ZoomableImage
                        smallImageSrc={bios[name].image.small}
                        largeImageSrc={bios[name].image.full}
                        width={150}
                        height={150}
                    />
                </div>
                <div className='ne-bio-desc'>
                    {bios[name].bio}
                </div>
            </div>
        );
    }

    return (
        <div className="ne-about">
            nighterrands is...
            {renderBio('leo', 'leo@nighterrands.com', 'https://www.instagram.com/leofromvermont/')}
            {renderBio('joe', 'joe@nighterrands.com', 'https://www.instagram.com/cosmic.joe/')}
            {renderBio('mike')}
            {renderBio('tyler', '', 'https://www.instagram.com/siamesefaithhealersnetwork/')}
            {renderBio('julie')}
            <div className="ne-about-general">
                Duxbury to Arlington. Still VT.
            </div>
        </div>
    )
  }

export default About;
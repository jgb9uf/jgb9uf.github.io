import React from 'react';
import ZoomableImage from './ZoomableImage.jsx';
import ZineBrief from './ZineBrief.jsx';

class ReleaseDetail extends React.Component {        
    constructor(props) {
        super(props);

        this.playlist = [];
        props.release.audio && props.release.audio.forEach(audioFile => this.playlist.push({url: audioFile}));
    }
    
    render() {
        const { release, zines, onZineClick, onReleasePlayingChange } = this.props;
        return (
            <div className="ne-release-detail">
                <div className="ne-release-left">
                    <div className="ne-release-image">
                        <ZoomableImage
                            largeImageSrc={release.image}
                            smallImageSrc={release.image_preview}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>  
                <div className="ne-release-details">
                    <div className="ne-release-detail-header">
                        <div className="ne-release-detail-name">
                            <b>{release.name}</b>
                        </div>
                        <div className="ne-release-detail-artist">
                            <i>{release.artist}</i>
                        </div>
                        <div className='ne-release-detail-date'>
                            {release.date}
                        </div>
                        {release.audio && release.audio.length > 0 && <div className="ne-release-detail-play-button" onClick={() => onReleasePlayingChange(release.id)}>~ listen ~</div>}
                    </div>  
                    <div className='ne-release-detail-description'>
                        {release.description}
                    </div>
                    {release.zine && (
                        <div className='ne-release-detail-zine'>
                            <ZineBrief 
                                zine={zines[release.zine]}
                                onZineClick={onZineClick}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
  }

export default ReleaseDetail;
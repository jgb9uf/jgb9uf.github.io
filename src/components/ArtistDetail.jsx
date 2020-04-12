import React from 'react';
import ZoomableImage from './ZoomableImage.jsx';
import ReleaseBrief from './ReleaseBrief';

class ArtistDetail extends React.Component {        
    renderFeaturedReleases() {
        const releaseIds = this.props.artist.featured_releases;
        const releases = Object.values(this.props.releases).filter(release => releaseIds.includes(release.id));
        if (releases) {
            return (
                <div className='ne-artist-detail-featured-releases'>
                    {releases.map(release => <ReleaseBrief 
                        key={release.id} 
                        release={release} 
                        onReleaseClick={this.props.onReleaseClick}
                        hideArtist={true}    
                    />)}
                </div>
            );
        }
    }
    
    render() {
        const { artist } = this.props;
        return (
            <div className="ne-artist-detail">
                <div className="ne-artist-image">
                    <ZoomableImage
                        largeImageSrc={artist.image}
                        smallImageSrc={artist.image}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="ne-artist-details">
                    <div className="ne-artist-detail-name">
                        <b>{artist.name}</b>
                    </div>
                    <div className='ne-artist-detail-description'>
                        {artist.description}
                    </div>
                    {artist.featured_releases && artist.featured_releases.length > 0 && this.renderFeaturedReleases()}
                </div>
            </div>
        )
    }
  }

export default ArtistDetail;
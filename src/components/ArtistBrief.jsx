import React from 'react';

function ArtistBrief(props) {
    return (
        <div className="ne-artist-brief" onClick={() => props.onArtistClick(props.artist.id)}>
            <div className="ne-artist-brief-image">
                <img src={props.artist.image} alt="Night Errands" height="75" width="75" />
            </div>
            <div className="ne-artist-brief-name">
                <b>{props.artist.name}</b>
            </div>
        </div>
    )
  }

export default ArtistBrief;
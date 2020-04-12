import React from 'react';
import ArtistBrief from './ArtistBrief';

function Artists(props) {
    function renderArtist(artist) {
        return (
            <ArtistBrief key={artist.id} artist={artist} releases={props.releases} onArtistClick={props.onArtistClick} />
        );
    }
    
    function renderArtists() {
        return Object.values(props.artists).map(artist => renderArtist(artist)); 
    }
    
    return (
        <div className="ne-artists">
            {renderArtists()}
        </div>
    )
  }

export default Artists;
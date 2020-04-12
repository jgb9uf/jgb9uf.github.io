import React from 'react';

function ReleaseBrief(props) {
    return (
        <div className="ne-release-brief" onClick={() => props.onReleaseClick(props.release.id)}>
            <div className="ne-release-image">
                <img src={props.release.image_preview} alt="Night Errands" height="75" width="75" />
            </div>
            <div className="ne-release-name">
                <b>{props.release.name}</b>
            </div>
            {!props.hideArtist && 
                <div className="ne-release-artist">
                    <i>{props.release.artist}</i>
                </div>
            }
        </div>
    )
  }

export default ReleaseBrief;
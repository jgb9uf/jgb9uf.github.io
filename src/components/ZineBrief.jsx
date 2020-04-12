import React from 'react';

function ZineBrief(props) {
    return (
        <div className="ne-zine-brief" onClick={() => props.onZineClick(props.zine.id)}>
            <div className="ne-zine-brief-image">
                <img src={props.zine.preview} alt="Night Errands" height="75" width="75" />
            </div>
            <div className="ne-zine-brief-name">
                <b>{props.zine.title}</b>
            </div>
        </div>
    )
  }

export default ZineBrief;
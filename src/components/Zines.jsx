import React from 'react';
import ZineBrief from './ZineBrief';

function Zines(props) {
    function renderZine(zine) {
        return (
            <ZineBrief key={zine.id} zine={zine} onZineClick={props.onZineClick} />
        );
    }
    
    function renderZines() {
        return Object.values(props.zines).map(zine => renderZine(zine)); 
    }
    
    return (
        <div className="ne-zines">
            {renderZines()}
        </div>
    )
  }

export default Zines;
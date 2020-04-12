import React from 'react';
import Thought from './Thought';

function Thoughts(props) {
    function renderThoughts() {
        let ids = Object.keys(props.thoughts).reverse();
        return ids.map((id) => {
            return  (
                <div key={id} className="ne-thought">
                    <Thought data={props.thoughts[id]}/>
                </div>
            )
        })
    }
    
    return (
        <div className="ne-thoughts">
            {renderThoughts()}
        </div>
    )
  }

export default Thoughts;
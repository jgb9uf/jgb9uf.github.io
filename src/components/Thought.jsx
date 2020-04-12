import React from 'react';
import ZoomableImage from './ZoomableImage.jsx';

function Thought(props) {
    function renderContent() {
        return props.data.content.map((paragraph, index) => {
            const max = window.innerWidth > 700 ? 450 : 125;
            const wrapStyle = {
                paddingLeft:  Math.random() * (max - 10) + 10
            }
            return (
                <div key={index}>
                    <div className='ne-thought-content' dangerouslySetInnerHTML={{__html: paragraph}} />
                    {props.data.images[index]
                        && <span className="ne-thought-image-wrap">
                            <ZoomableImage
                                smallImageSrc={props.data.images[index].small ? props.data.images[index].small : props.data.images[index].full}
                                largeImageSrc={props.data.images[index].full}
                                smallImageClass='ne-thought-image'
                                divStyle={wrapStyle}
                            />
                        </span>}
                </div>
            );
        });
    }
    return (
        <div className="ne-thought">
            <div className='ne-thought-title'>
                {props.data.title}
            </div>
            <div className='ne-thought-date'>
                {props.data.date}
            </div>
            {renderContent()}
        </div>
    )
  }

export default Thought;
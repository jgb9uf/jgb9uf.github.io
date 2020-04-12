import React from 'react';
import ZoomableImage from './ZoomableImage.jsx';

class RandomImage extends React.Component {    
    constructor(props) {
        super(props);

        this.min = 1;
        this.max = 38;
        this.state = {
            index: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => 
            this.setState({ 
                index: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
             }), 
        20000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    next() {
        this.setState({ 
            index: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        });
        clearInterval(this.interval);
        this.interval = setInterval(() => 
            this.setState({ 
                index: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
            }), 
        20000);
    }

    render() {
        const src = `https://nighterrands.s3.amazonaws.com/images/random/${this.state.index}.jpg`;
        return (
            <div className='ne-random-image'>
                <div className='ne-fugue-next' onClick={() => this.next()}>></div>
                <ZoomableImage
                    smallImageSrc={src}
                    largeImageSrc={src}
                    smallImageClass="ne-fugue-image"
                />
            </div>
        )
    }
}

export default RandomImage;
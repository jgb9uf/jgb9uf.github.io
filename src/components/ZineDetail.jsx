import React from 'react';
import ZoomableImage from './ZoomableImage.jsx';
import FlipPage from 'react-flip-page';

const width = window.innerWidth > 700 ? 480 : 320;

class ZineDetail extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            mode: 'SCROLLABLE'
        }
    }
    
    renderPage(page) {
        return <article key={page.full}>
            <ZoomableImage 
                smallImageSrc={page.small ? page.small : page.full} 
                largeImageSrc={page.full} 
                width={width}
                smallImageClass='ne-zine-page-image'
            />
        </article>
    }

    renderFlipbook() {
        const { zine } = this.props;
        return (
            <div className="ne-zine-detail">
                <div className='ne-zine-button' onClick={() => this.setState({mode: 'SCROLLABLE'})}>view standard</div>
                <FlipPage
                    orientation="horizontal"
                    flipOnTouch={true}
                    uncutPages={true}
                    showHint={true}
                    width={width}
                >
                    {zine.pages.map(page => this.renderPage(page))}
                </FlipPage>
            </div>
        );
    }

    renderScrollable() {
        const { zine } = this.props;
        const divStyle = {
            alignSelf: 'center'
        };
        return (
            <div className='ne-zine-detail'>
                {/*<div className='ne-zine-button' onClick={() => this.setState({mode: 'FLIPBOOK'})}>view as flipbook</div>*/}
                {zine.pages.map(page => 
                    <ZoomableImage 
                        smallImageSrc={page.small ? page.small : page.full} 
                        largeImageSrc={page.full} 
                        width={width}
                        divStyle={divStyle}
                        smallImageClass='ne-zine-page-image-scrollable'
                    />
                )}
            </div>
        );
    }
    
    render() {
        if (this.state.mode === 'FLIPBOOK') {
            return this.renderFlipbook();
        }
        return this.renderScrollable();
    }
  }

export default ZineDetail;
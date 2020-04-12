import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
 
class ZoomableImage extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    }
    
    render() {
        const { smallImageSrc, largeImageSrc, smallImageClass, divStyle, height, width } = this.props;
        const images = [{ src: largeImageSrc }];
        const style = {
            maxHeight: height,
            maxWidth: width
        };
        const smallImageClasses = smallImageClass + ' ne-zoomable-image';
        return (
            <div style={divStyle}>
                <img 
                    onClick={this.toggleModal} 
                    className={smallImageClasses} 
                    src={smallImageSrc} 
                    alt="Night Errands" 
                    style={style}
                />
                <ModalGateway>
                    {this.state.modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel views={images} />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        )
    }
  }

export default ZoomableImage;
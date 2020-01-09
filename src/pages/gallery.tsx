import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from '../data/photos';
const GContainer = styled.div`
  flex:1;
  width:100%;
  height:100%;
  
`


const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log('open!!')
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return(
    <Layout location={props.location}>
      <SEO description={'Gallery of past Wolfson Mayballs'} lang={'en'} title={'Gallery'}/>
      <h4
        style={{
          paddingTop:'50px',
          width:'100%',
          textAlign:'center',
          borderBottom:'1px solid white'
        }}
      >2020</h4>
      <h4
        style={{
          paddingTop:'50px',
          width:'100%',
          textAlign:'center',
          borderBottom:'1px solid white'
        }}
      >2019</h4>
      <GContainer>
      <PhotoGallery
        onClick={openLightbox}
        photos={photos}/>
        <h4
          style={{
            paddingTop:'50px',
            textAlign:'center',
            marginBottom:'100px',
            borderBottom:'1px solid white'
          }}
        >2018</h4>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </GContainer>

    </Layout>
  )
}

export default Gallery;

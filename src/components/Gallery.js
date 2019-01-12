import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import LeftCaret from 'icons/leftcaret.svg'
// import RightCaret from 'icons/rightcaret.svg'

const mobileMaxWidth = 700
class Gallery extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  openModal = (e, index) => {
    if (e && e.preventDefault) e.preventDefault()
    this.toggleBodyStyles(true)
    this.setState({
      showLightbox: !this.state.showLightbox,
      selectedImage: index,
    })
  }

  toggleBodyStyles = (active = false) => {
    document.body.style.overflow = active ? 'hidden' : ''
    document.body.style.height = active ? '100%' : ''
    document.documentElement.style.height = active ? '100%' : ''
  }

  closeModal = () => {
    this.toggleBodyStyles(false)
    this.setState({ showLightbox: false })
  }

  goBack = e => {
    e.stopPropagation()
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = e => {
    e.stopPropagation()
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <Wrapper>
          {images.map(({ node }, i) => (
            <GalleryItem key={node.childImageSharp.sizes.src}>
              <MobileView>
                <StyledImg sizes={node.childImageSharp.sizes} />
              </MobileView>
              <A
                href={node.childImageSharp.sizes.src}
                alt={`image gallery ${i + 1}`}
                onClick={e => this.openModal(e, i)}
              >
                <StyledImg sizes={node.childImageSharp.sizes} />
              </A>
            </GalleryItem>
          ))}
        </Wrapper>

        <LightboxModal
          visible={showLightbox}
          onKeyUp={e => this.handleKeyDown(e)}
          onClick={this.closeModal}
        >
          <LightboxContent>
            <Img sizes={images[selectedImage].node.childImageSharp.sizes} />
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  grid-gap: 10px;
`

const A = styled.a`
  cursor: zoom-in;
  display: inline;

  @media (max-width: ${mobileMaxWidth}px) {
    display: none;
  }
`

const GalleryItem = styled.div`
  position: relative;
`

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  cursor: ${props => (props.visible ? 'zoom-out' : 'auto')};

  @media (max-width: ${mobileMaxWidth}px) {
    display: none;
  }
`

const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
`

const MobileView = styled.div`
  display: none;
  position: relative;

  @media (max-width: ${mobileMaxWidth}px) {
    display: block;
  }
`

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery

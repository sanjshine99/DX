import React from 'react';
import './HomeComponent.css'; // Create a CSS file for styling

class Gallery_landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'http://fpoimg.com/200x200?text=First',
        'http://fpoimg.com/200x200?text=Second',
        'http://fpoimg.com/200x200?text=Third',
        // Add more image URLs here
      ],
      currentIndex: 0, // Current index of the displayed image
    };
  }

  componentDidMount() {
    // Start the animation loop
    this.animationInterval = setInterval(this.animateImages, 2000); // Change the interval as desired
  }

  componentWillUnmount() {
    // Clear the animation interval when the component unmounts
    clearInterval(this.animationInterval);
  }

  animateImages = () => {
    this.setState((prevState) => {
      // Calculate the next index and reset to 0 if it exceeds the image count
      const nextIndex = (prevState.currentIndex + 1) % prevState.images.length;

      return {
        currentIndex: nextIndex,
      };
    });
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="gallery_landing_container">
        <div className="waterfall-container">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className={`waterfall-item ${index === currentIndex ? 'current' : ''}`}
              style={{
                backgroundImage: `url(${imageUrl})`,
                animationDelay: `${index * 1}s`, // Adjust the delay as needed
              }}
            ></div>
          ))}
          <div className="text-overlay-gallery">
            <h1>Why choose us</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery_landing;

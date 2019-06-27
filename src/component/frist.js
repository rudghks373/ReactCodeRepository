import React from "react";

class frist extends React.Component {
  render() {
    return (
      <div className="frist">
        <header>
          <h2>Magna sed nullam nisl adipiscing</h2>
        </header>
        <div className="content">
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing
            elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            tristique libero eu nibh porttitor amet fermentum. Nullam venenatis
            erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
          <span className="image main">
            <img src="../assets/images/pic01.jpg" alt="" />
          </span>
        </div>

        <section>
          <header>
            <h3>Erat aliquam</h3>
            <p>
              Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
              etiam consequat, et lorem adipiscing sed dolor sit amet,
              consectetur amet do eiusmod tempor incididunt ipsum suspendisse
              ultrices gravida.
            </p>
          </header>
          <div className="content">
            <div className="gallery">
              <a href="images/gallery/fulls/01.jpg" className="landscape">
                <img src={"../assets/images/pic01.jpg"} alt="" />
              </a>
              <a href="images/gallery/fulls/02.jpg">
                <img src={"../assets/images/thumbs/02.jpg"} alt="" />
              </a>
              <a href="images/gallery/fulls/03.jpg">
                <img src={"../assets/imagesy/thumbs/03.jpg"} alt="" />
              </a>
              <a href="images/gallery/fulls/04.jpg" className="landscape">
                <img src={"../assets/images/thumbs/04.jpg"} alt="" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default frist;

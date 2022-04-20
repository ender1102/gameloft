import React from 'react'
import Rating from './Rating'

export default function HotspotBanner() {
  return (
    <>
      <div className="hotspot-banner">
        <img src="../assets/images/bg-1.jpg" alt="bg-1" />
        <div className="hotspot-banner__description-wrapper">
          <div className="hotspot-banner__description-content">
            <h1>GAMELOFT GAME</h1>
            <div className='hotspot-banner__description-content-rating'>Racing/Action | <Rating rating={4.5} /></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime vero repudiandae commodi molestias minus? Architecto molestias, illo repellendus rem doloribus, blanditiis voluptate, perferendis rerum dolore quae accusantium ea inventore?</p>
          </div>
        </div>

        <div className="store-buttons-wrapper">
          <div className="store-buttons__content">
            <div className="store-buttons__label">
              Download latest version
            </div>
            <div className="store-buttons__items">
              <a href="/">
                <img src="../assets/images/btn-1.png" alt="btn-1" className="img-btn-1" />
              </a>
              <a href="/">
                <img src="../assets/images/btn-2.png" alt="btn-2" className="img-btn-2" />
              </a>
              <a href="/">
                <img src="../assets/images/btn-3.png" alt="btn-3" className="img-btn-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="store-buttons-mobile-wrapper">
          <div className="store-buttons-mobile__content">
            <div className="store-buttons-mobile__label">
              Download latest version
            </div>
            <div className="store-buttons-mobile__items">
              <a href="/">
                <img src="../assets/images/btn-1.png" alt="btn-1" className="img-btn-1" />
              </a>
              <a href="/">
                <img src="../assets/images/btn-2.png" alt="btn-2" className="img-btn-2" />
              </a>
              <a href="/">
                <img src="../assets/images/btn-3.png" alt="btn-3" className="img-btn-3" />
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

import React from 'react'

const img_1 = 'https://www.thejoinery.com/sites/default/files/styles/full_slide/public/slides/Shakerkentonset.jpg?itok=RenyjBss';
const img_2 = 'https://www.weknowboise.com/uploads/shared/images/blog/best-boise-furniture-home-decor-stores.jpg';
const img_3 = 'https://www.jodhpurifurniture.com:4000/images/stores/158230758486351a68e88-2e52-48f8-b346-d1605e6d5dba.jpg';

const Slider = () => {
  return (
    <div className="mb-lg-5">
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item active">
                <img src={img_1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark">First slide label</h5>
                    <p className="text-dark">Some representative placeholder content for the first slide.</p>
                </div>
                </div>

                <div className="carousel-item">
                <img src={img_2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark">Second slide label</h5>
                    <p className="text-dark">Some representative placeholder content for the second slide.</p>
                </div>
                </div>

                <div className="carousel-item">
                <img src={img_3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className="text-dark">Third slide label</h5>
                    <p className="text-dark">Some representative placeholder content for the third slide.</p>
                </div>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden text-danger">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Slider
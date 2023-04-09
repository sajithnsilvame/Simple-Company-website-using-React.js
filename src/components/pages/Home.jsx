import React from 'react'
import Footer from '../inc/Footer/Footer';
import OurCompanySection from '../inc/OurCompanySection/OurCompanySection';
import OurServices from '../inc/OurServices/OurServices';
import OurVisionMissionSection from '../inc/OurVisionMissionSection/OurVisionMissionSection';
import Slider from '../inc/Slider/Slider';


const Home = () => {
  return (
    <div>
        <div>
        <Slider/>
        </div>

        <div className="container">
            <OurCompanySection />    
        </div>

        <div className="container-fluid">
          <OurVisionMissionSection />
          <OurServices />
          <Footer />
        </div>
        
    </div>
  )
}

export default Home;
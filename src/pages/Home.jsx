import React from 'react';
import Banner from '../component/Banner';
import FeaturedServices from '../component/FeaturedServices';
import MeetPartners from '../component/MeetPartners';
import WhyChooseUs from '../component/WhyChooseUs';



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedServices></FeaturedServices>
          <MeetPartners></MeetPartners>
          <WhyChooseUs></WhyChooseUs>
          
         
        </div>
    );
};

export default Home;
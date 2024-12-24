import React from 'react';
import Banner from '../component/Banner';
import FeaturedServices from '../component/FeaturedServices';
import MeetPartners from '../component/MeetPartners';
import WhyChooseUs from '../component/WhyChooseUs';
import Marketing from '../component/Marketing';
import CountsUp from '../component/CountsUp';




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedServices></FeaturedServices>
          <MeetPartners></MeetPartners>
          <CountsUp></CountsUp>
          <WhyChooseUs></WhyChooseUs>
          <Marketing></Marketing>
          
         
        </div>
    );
};

export default Home;
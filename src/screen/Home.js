import React from 'react';
import Layout from "../components/layout/Layout";
import SliderMain from "../components/slider/SliderMain";
import MonthlySlide from "../components/slider/HomeSlide/MonthlySlide";
import SubSlide from "../components/slider/HomeSlide/SubSlide";
import SpecialSlide from "../components/slider/HomeSlide/SpecialSlide";

// #FFD1E8

const Home = () => {
    return (

        <Layout>
            <SliderMain
                spaceBottomClass="space-mb--r100"
            />
            <MonthlySlide
                spaceBottomClass="space-mb--r100"
            />
            <SubSlide
                spaceBottomClass="space-mb--r100"
            />

            <SpecialSlide
                spaceBottomClass="space-mb--r100"
            />
        </Layout>

    );
};

export default Home;

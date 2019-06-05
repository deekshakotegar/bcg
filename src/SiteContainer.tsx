import * as React from 'react';
import Banner from './Components/Banner';
import { Blog } from './Components/Blog';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Menu from './Components/Menu';
import { Project } from './Components/Projects';
import { WhatWeDo } from './Components/WhatWeDo';
import { WhoWeAre } from './Components/WhoWeAre';

export const SiteContainer = () => {
    return (
        <React.Fragment>
            <Menu />
            <Banner />
            <WhatWeDo id='WhatWeDo' />
            <Project id='OurWork' />
            <WhoWeAre id='WhoWeAre' />
            <Blog id='Blog' />
            <Contact id='GetInTouch' />

            <Footer />
        </React.Fragment>
    )
}
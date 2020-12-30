import React from 'react';
import { withRouter } from 'react-router-dom';
import AlgorithmsSection from './AlgorithmsSection';

import classes from './Overrides.module.css';


const HomePage = withRouter(() => {
    return (
            <div className={classes.wrapper}>
                <AlgorithmsSection />
            </div>    
    );
});

export default HomePage;

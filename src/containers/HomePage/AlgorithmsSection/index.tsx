import React from 'react';
import classes from './AlgorithmsSection.module.css';
import AlgorithmClassCard from './AlgorithmClassCard';

const algorithmTexts = [
    {
        color: '#f05454',
        algTitle: 'Graphs',
        algText: 'Visualize Graphs Algorithms.',
        linkTo: '/graphs',
        textColor: '#fff',
    },
    {
        color: '#f05454',
        algTitle: 'Sorting',
        algText: 'Visualize Sorting Algorithms.',
        linkTo: '/sorting',
        textColor: '#fff',
    },
];

const AlgorithmsSection = (): JSX.Element => {
    return (
        <div className={`section ${classes.algorithmsSection}`}>
            {algorithmTexts.map((el) => (
                <div className={classes.cardsSection} key={el.algText}>
                    <AlgorithmClassCard
                        key={el.algTitle}
                        color={el.color}
                        algTitle={el.algTitle}
                        algText={el.algText}
                        linkTo={el.linkTo}
                        textColor={el.textColor}
                    />
                </div>
            ))}
        </div>
    );
};

export default AlgorithmsSection;

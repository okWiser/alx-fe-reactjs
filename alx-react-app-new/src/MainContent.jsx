import React from 'react';

function MainContent() {
    return (
        <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );    
}

// Experiment with different CSS properties to make these components visually appealing
const styles = {
    main: {
        backgroundColor: 'lightgray',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    },
    paragraph: {
        fontSize: '18px',
        color: 'navy',
        fontWeight: 'bold',
        textAlign: 'center',
    },
};

function MainContent() {
    return (
        <main style={styles.main}>
            <p style={styles.paragraph}>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );    
}

export default MainContent;
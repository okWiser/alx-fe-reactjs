import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© 2023 City Lovers</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#f2f2f2',
        padding: '20px',
        textAlign: 'center',
    },
    text: {
        color: '#888',
        fontSize: '14px',
    },
};

export default Footer;
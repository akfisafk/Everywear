import React from 'react'
import { Link } from 'react-router-dom';
    
const styles = {
    footer: {
        fontFamily: 'sans-serif',
        fontSize: '14px',
        height: '240px',
        backgroundColor: '#f0f0f0'
    },
    container: {
        maxWidth: '1500px',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    disclaimer: {
        width: '70%'
    },
    links_container: {
        display: 'flex',
        alignItems: 'center'
    },
    links: {
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        color: 'black',
        margin: '4px 0'
    }
}

export const Footer = () => {
    return (
        <div style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.disclaimer}>DISCLAIMER: Everywear does not represent a real business.
                 Items listed are not for sale or owned by Everywear. All checkout and transactions made are meant for testing purposes only.
                </p>
                <div style={styles.links_container}>
                    <ul style={styles.links}>
                        <Link to="/" style={styles.link}>About</Link>
                        <Link to="/" style={styles.link}>Login</Link>
                        <Link to="/" style={styles.link}>My Orders</Link>
                        <Link to="/" style={styles.link}>Find Stores</Link>
                        <Link to="/" style={styles.link}>Collections</Link>
                    </ul>
                </div>
                <div style={styles.links_container}>
                    <ul style={styles.links}>
                        <Link to="/" style={styles.link}>Support</Link>
                        <Link to="/" style={styles.link}>Shipping</Link>
                        <Link to="/" style={styles.link}>Returns</Link>
                        <Link to="/" style={styles.link}>Contact</Link>
                        <Link to="/" style={styles.link}>COVID</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

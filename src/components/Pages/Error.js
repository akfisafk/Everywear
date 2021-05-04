import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const styles = {
    container: {
        maxWidth: '1500px',
        height: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export const Error = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div style={styles.container}>
            <h3>Oops! Looks like this page doesn't exist.</h3>
            <p onClick={goBack} style={{ color: '#5A1A8B', cursor: 'pointer'}}>Go back</p>
        </div>
    )
}

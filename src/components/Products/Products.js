import React from 'react';
import { CardItem } from './Product/CardItem';

const styles = {
    wrapper: {
        position: 'relative',
        maxWidth: '1500px',
        margin: '0 auto',
        width: '100%',
        minHeight: '300px',
        padding: '20px',
    },
    category: {
        padding: '0 0 0 14px'
    },
    app: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        overflow: 'hidden'
    },
    row: {
        position: 'absolute',
        width: '100%'
    },
    prev: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        position: 'absolute',
        top: '50%',
        left: '0',
        cursor: 'pointer',
    },
    next: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        position: 'absolute',
        top: '50%',
        right: '0',
        cursor: 'pointer',
    }
}



export class Products extends React.Component {
    myRef = React.createRef();

    nextClick = () => {
        const slide = this.myRef.current;
        // console.log(slide.clientWidth);
        // console.log('clicked nextClick');
        // console.log('scroll left is: ' + slide.scrollLeft);
        // console.log('scroll width is: ' + slide.scrollWidth);
        slide.scrollLeft += slide.clientWidth;
    }

    prevClick = () => {
        const slide = this.myRef.current;
        // console.log(slide.clientWidth);
        // console.log('clicked prevClick');
        // console.log('scroll left is: ' + slide.scrollLeft);
        // console.log('scroll width is: ' + slide.scrollWidth);
        slide.scrollLeft -= slide.clientWidth;
    }

    render() {
        const category = this.props.category;
        const products = this.props.products;

        return (
            <>
                <div style={styles.wrapper}>
                    <h2 style={styles.category}>{category}</h2>
                    <div style={styles.app} ref={this.myRef}>
                        <CardItem products={products}/>
                    </div>
                    
                    <button style={styles.prev} onClick={this.prevClick}>
                        &#60;
                    </button>
                    <button style={styles.next} onClick={this.nextClick}>
                        &#62;
                    </button>
                    
                </div>
            </>
        )
    }
}
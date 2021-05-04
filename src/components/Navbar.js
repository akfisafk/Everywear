import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Search } from './Search';

const styles = {
    nav_background: {
        height: '70px',
        width: '100%',
        backgroundColor: 'white',
        borderBottom: '1px solid #F0F0F0'
    },
    container: {
        maxWidth: '1500px',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nav_left: {
        margin: '0 0 0 30px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav_center: {
        margin: '0 0 0 50px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav_right: {
        margin: '0 30px 0 0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav_brand: {
        margin: '0 26px 0 0',
        color: '#D94234',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    nav_item: {
        margin: '0 50px -4px 0',
        color: '#D94234',
        borderBottom: '2px solid transparent',
        padding: '12x 0'
    },
    nav_right_item: {
        margin: '0 26px -4px 0',
        color: '#D94234',
        borderBottom: '2px solid transparent',
        padding: '12x 0'
    },
    nav_right_item_last: {
        margin: '0 0 -4px 0',
        color: '#D94234',
        borderBottom: '2px solid transparent',
        padding: '12x 0'
    },
    nav_item_hovered: {
        margin: '0 50px -4px 0',
        color: '#D94234',
        borderBottom: '2px solid #D94234',
        padding: '12px 0'
    },
    nav_item_last_hovered: {
        margin: '0 0 -4px 0',
        color: '#D94234',
        borderBottom: '2px solid #D94234',
        padding: '12px 0'
    }
}

export const Navbar = ({totalItems, searches, searchProducts}) => {
    const [hoverNavItem1, setHoverNavItem1] = useState(true);
    const [hoverNavItem2, setHoverNavItem2] = useState(true);
    const [hoverNavItem3, setHoverNavItem3] = useState(true);
    const [hoverNavItem4, setHoverNavItem4] = useState(true);

    const handleHover = (num) => {
        if (num === 1) {
            setHoverNavItem1(!hoverNavItem1);
        }
        if (num === 2) {
            setHoverNavItem2(!hoverNavItem2);
        }
        if (num === 3) {
            setHoverNavItem3(!hoverNavItem3);
        }
        if (num === 4) {
            setHoverNavItem4(!hoverNavItem4);
        }
    }

    return (
        <div style={styles.nav_background}>
            <div style={styles.container}>
                <div>
                    <ul style={styles.nav_left}>
                        <Link to='/' style={styles.nav_brand}>EVERYWEAR</Link>
                        
                    </ul>
                </div>
                <div>
                    <ul className="nav-center">
                        <Link to='/new'
                            style={hoverNavItem1 ? (
                                styles.nav_item) : styles.nav_item_hovered}
                            onMouseEnter={() => handleHover(1)}
                            onMouseLeave={() => handleHover(1)}
                        >NEW RELEASES</Link>
                        <Link to='/women'
                            style={hoverNavItem2 ? (
                                styles.nav_item) : styles.nav_item_hovered}
                            onMouseEnter={() => handleHover(2)}
                            onMouseLeave={() => handleHover(2)}
                        >WOMEN</Link>
                        <Link to='/men'
                            style={hoverNavItem3 ? (
                                styles.nav_item) : styles.nav_item_hovered}
                            onMouseEnter={() => handleHover(3)}
                            onMouseLeave={() => handleHover(3)}
                        >MEN</Link>
                    </ul>
                </div>
                <div>
                    <ul style={styles.nav_right}>
                        
                        <Search searches={searches} searchProducts={searchProducts} />

                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </ul>
                </div>
            </div>
        </div>
    )
}
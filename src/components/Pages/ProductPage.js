import React, {useState, useEffect} from 'react'
import { commerce } from '../../lib/commerce';
import { Button } from '../Button';
import { Breadcrumbs, Typography, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FilledCart } from '../FilledCart';
import Modal from '../Modal';
import { CarouselImage } from '../CarouselImage';
// import gsap from 'gsap';

const styles = {
    carousel_img: {
        margin: '20px 0',
        width: '80%',
        opacity: '.4',
        cursor: 'pointer'
    },
    img: {
        margin: '30px 0',
        maxHeight: '800px',
        maxWidth: '900px'
    },
    description_p: {
        width: '90%'
    },
    buttons_container: {
        display: 'flex',
        alignItems: 'center'
    },
    counter: {
        width: '80px',
        margin: '0 20px 0 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    count: {
        padding: '0 6px'
    },
    button: {
        backgroundColor: '#D94234'
    },
    link: {
        color: '#757575'
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        minWidth: '120px',
        margin: '0 20px 20px 10px'
    }
}


export const ProductPage = ({ id, onAddToCart, cart, handleUpdateCartQty, handleEmptyCart }) => {
    const [product, setProduct] = useState('');
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState('');
    const [variant, setVariant] = useState('');
    const [carousel, setCarousel] = useState('');

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    }

    const handleAddToCart = () => {
        if (product.variant_groups.length > 0) {
            if (count > 0 && size) {
                onAddToCart(product.id, count, { [variant]: size, });
                setIsOpen(true);
            }
        } else {
            if (count > 0) {
                onAddToCart(product.id, count, null);
                setIsOpen(true);
            }
        }
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        setVariant(product.variant_groups[0].id);
        console.log(size);
    }

    const changeImage = (e) => {
        setCarousel(e);
    }

    useEffect(() => {
        const retrieveProduct = async () => {
            const data = await commerce.products.retrieve(id);

            setProduct(data);
        }

        retrieveProduct();
    }, [id])

    useEffect(() => {
        if (product) setCarousel(product.assets[0].url)
    }, [product])

    useEffect(() => {
        // gsap.from(".product_carousel", {
        //     duration: 4,
        //     ease: 'power4.out',
        //     opacity: 0
        // })
        // gsap.from(".product_img", {
        //     duration: 2,
        //     ease: 'power4.out',
        //     opacity: 0
        // })
        // gsap.from(".product_img", {
        //     duration: 3,
        //     y: '-1%'
        // })
        // gsap.from(".product_description", {
        //     duration: 4,
        //     ease: 'power4.out',
        //     opacity: 0
        // })
        console.log(product);
    }, [product])

    return (
        <>
            <div className="container">
                {product ? (
                    <>
                        <Breadcrumbs className="breadcrumbs" aria-label="breadcrum">
                            <Link style={styles.link} to="/">Home</Link>
                            <Link style={styles.link} to="/products">Products</Link>
                            <Link style={styles.link} to={"/" + product.categories[0].slug}>{product.categories[0].slug.charAt(0).toUpperCase() + product.categories[0].slug.slice(1)}</Link>
                            <Typography color="textPrimary">{product.name}</Typography>
                        </Breadcrumbs>
                        <div className="product-container">
                            <div className="product-carousel">
                                {product.assets.length > 1 ? (
                                    product.assets.map((asset) => (
                                        <CarouselImage
                                            key={asset.id}
                                            src={asset.url}
                                            onClick={() => changeImage(asset.url)}
                                            alt=""
                                        />
                                    ))
                                ) : (
                                        <CarouselImage src={product.media.source} alt=""/>
                                )}
                            </div>
                            <div>
                                {product.assets.length > 1 ? (
                                    <img className="product-container_img" src={carousel} alt=""/>
                                ) : (
                                    <img className="product-container_img" src ={product.media.source} alt="" />
                                )}
                            </div>
                            <div className="product-description">
                                <h1>{product.name}</h1>
                                <h3>{product.price.formatted_with_symbol}</h3>
                                <p style={styles.description_p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores veritatis libero natus, veniam facere recusandae deleniti dolor est nisi. Hic aperiam porro neque distinctio officia animi eligendi culpa ipsa minima!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab et eum cum vero qui exercitationem doloribus rerum laborum itaque! Nemo pariatur alias id dolor, repellat obcaecati eaque incidunt architecto.
                                </p>
                                <div style={styles.buttons_container}>
                                    <div style={styles.counter}>
                                        <button onClick={decrement}>-</button>
                                        <span style={styles.count}>{count}</span>
                                        <button onClick={increment}>+</button>
                                    </div>
                                    <FormControl style={styles.form}>
                                        {product.variant_groups.length > 0 && (
                                            <>
                                            <InputLabel id="select-label">Size</InputLabel>
                                            <Select
                                                labelId="select-label"
                                                value={size}
                                                onChange={handleSizeChange}
                                            >
                                                {product.variant_groups[0].options.map((size) => (
                                                    <MenuItem key={size.id} value={size.id}>{size.name}</MenuItem>
                                                ))}
                                            </Select>
                                            </>
                                        )}
                                    </FormControl>
                                    <Button style={styles.button}
                                        onClick={handleAddToCart}
                                    >Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : <div style={{ height: '900px' }}></div>}
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div style={styles.modal}>
                    <h3>Your Cart</h3>
                    <FilledCart modal="true" cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleEmptyCart={handleEmptyCart} />
                </div>
            </Modal>
        </>
    )
}

import React, { useState, useEffect } from 'react'
import { PageItem } from '../Products/Product/PageItem';
import { Breadcrumbs, Typography, Checkbox, FormControlLabel, FormControl, RadioGroup, Radio, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        height: '100%',
        maxWidth: '1500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
    },
    link: {
        color: '#757575'
    },
    breadcrumbs: {
        padding: '40px 0 20px 30px'
    },
    content: {
        height: '100%',
        maxWidth: '1500px',
        margin: '30px 10px',
        display: 'flex'
    },
    filter_category: {
        margin: '0 0 0 20px',
        alignSelf: 'flex-start'
    },
    filter_checks: {
        margin: '0 0 0 12px'
    }
}

export const AllProducts = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [priceFilter, setPriceFilter] = useState("");
    const [clothingFilter, setClothingFilter] = useState([]);

    useEffect(() => {
        const updateProductsWithClothingFilters = () => {
            if (clothingFilter.length > 0) {
                // First reset the filteredProducts array
                setFilteredProducts([]);

                // Iterate through clothingFilter array
                for (let i = 0; i < clothingFilter.length; i++) {
                    //clothingFilter[i] EQUALS a filter

                    // Iterate through products array
                    for (let j = 0; j < products.length; j++) {
                        //products[j] EQUALS a product

                        // Iterate through each category in products[j]
                        for (let k = 0; k < products[j].categories.length; k++)
                            //products[j].categories[k].slug EQUALS a category name

                            // Compares the current clothing filter and the product's category name
                            if (clothingFilter[i] === products[j].categories[k].slug) {

                                // Add current product, products[j] to filteredProducts array
                                setFilteredProducts(prevState => [...prevState, products[j]]);
                            }
                    }
                }
            } else {
                setFilteredProducts(products);
            }
        }

        const updateProductsWithPriceFilters = () => {
            if (priceFilter) {
                setFilteredProducts(prevState => prevState.filter(product => product.price.raw <= priceFilter));
            }
        }

        updateProductsWithClothingFilters();
        updateProductsWithPriceFilters();

    }, [clothingFilter, priceFilter, products]);

    const toggleClothing = (clothing) => {
        if (clothingFilter.includes(clothing)) {
            setClothingFilter(clothingFilter => clothingFilter.filter(item => item !== clothing));
        }
        else {
            setClothingFilter(clothingFilter => [...clothingFilter, clothing]);
        }
    }

    const togglePrice = (price) => {
        setPriceFilter(price);
    }

    return (
        <div style={styles.container}>
            <div>
                <Breadcrumbs style={styles.breadcrumbs} aria-label="breadcrum">
                    <Link style={styles.link} to="/">Home</Link>
                    <Typography color="textPrimary">Products</Typography>
                </Breadcrumbs>
            </div>
            <div className="content-container">
                <div className="filters">
                     <div style={styles.filter_category}>
                        <h3>Clothing</h3>
                        <FormControl component="fieldset" style={styles.filter_checks}>
                            <FormControlLabel
                                value="shirts"
                                control={<Checkbox color="primary" />}
                                label="Shirts"
                                labelPlacement="end"
                                onChange={() => toggleClothing('shirts')}
                            />
                            <FormControlLabel
                                value="pants"
                                control={<Checkbox color="primary" />}
                                label="Pants"
                                labelPlacement="end"
                                onChange={() => toggleClothing('pants')}
                            />
                            <FormControlLabel
                                value="jackets"
                                control={<Checkbox color="primary" />}
                                label="Jackets"
                                labelPlacement="end"
                                onChange={() => toggleClothing('jacket')}
                            />
                            <FormControlLabel
                                value="sweaters"
                                control={<Checkbox color="primary" />}
                                label="Sweaters"
                                labelPlacement="end"
                                onChange={() => toggleClothing('sweater')}
                            />
                            <FormControlLabel
                                value="dresses"
                                control={<Checkbox color="primary" />}
                                label="Dresses"
                                labelPlacement="end"
                                onChange={() => toggleClothing('dresses')}
                            />
                        </FormControl>
                    </div>
                    <div style={styles.filter_category}>
                        <h3>Price</h3>
                        <FormControl component="fieldset" style={styles.filter_checks}>
                            <RadioGroup aria-label="price" name="price">
                                <FormControlLabel
                                    value="20"
                                    control={<Radio color="primary" />}
                                    label="$20 or less"
                                    labelPlacement="end"
                                    onChange={() => togglePrice(20)}
                                />
                                <FormControlLabel
                                    value="30"
                                    control={<Radio color="primary" />}
                                    label="up to $30"
                                    labelPlacement="end"
                                    onChange={() => togglePrice(30)}
                                />
                                <FormControlLabel
                                    value="40"
                                    control={<Radio color="primary" />}
                                    label="up to $40"
                                    labelPlacement="end"
                                    onChange={() => togglePrice(40)}
                                />
                                <FormControlLabel
                                    value="50"
                                    control={<Radio color="primary" />}
                                    label="up to $50"
                                    labelPlacement="end"
                                    onChange={() => togglePrice(50)}
                                />
                                <FormControlLabel
                                    value="all"
                                    control={<Radio color="primary" />}
                                    label="show all"
                                    labelPlacement="end"
                                    onChange={() => togglePrice(99999)}
                                />
                            </RadioGroup>

                        </FormControl>
                    </div>
                </div>
                <div className="accordion">
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                        >
                            <Typography>Clothing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="accordion-filters">
                                <div style={styles.filter_category}>
                                    <FormControl component="fieldset" style={styles.filter_checks}>
                                        <FormControlLabel
                                            value="shirts"
                                            control={<Checkbox color="primary" />}
                                            label="Shirts"
                                            labelPlacement="end"
                                            onChange={() => toggleClothing('shirts')}
                                        />
                                        <FormControlLabel
                                            value="pants"
                                            control={<Checkbox color="primary" />}
                                            label="Pants"
                                            labelPlacement="end"
                                            onChange={() => toggleClothing('pants')}
                                        />
                                        <FormControlLabel
                                            value="jackets"
                                            control={<Checkbox color="primary" />}
                                            label="Jackets"
                                            labelPlacement="end"
                                            onChange={() => toggleClothing('jacket')}
                                        />
                                        <FormControlLabel
                                            value="sweaters"
                                            control={<Checkbox color="primary" />}
                                            label="Sweaters"
                                            labelPlacement="end"
                                            onChange={() => toggleClothing('sweater')}
                                        />
                                        <FormControlLabel
                                            value="dresses"
                                            control={<Checkbox color="primary" />}
                                            label="Dresses"
                                            labelPlacement="end"
                                            onChange={() => toggleClothing('dresses')}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="accordion">
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                        >
                            <Typography>Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="accordion-filters">
                                <div style={styles.filter_category}>
                                    <FormControl component="fieldset" style={styles.filter_checks}>
                                        <RadioGroup aria-label="price" name="price">
                                            <FormControlLabel
                                                value="20"
                                                control={<Radio color="primary" />}
                                                label="$20 or less"
                                                labelPlacement="end"
                                                onChange={() => togglePrice(20)}
                                            />
                                            <FormControlLabel
                                                value="30"
                                                control={<Radio color="primary" />}
                                                label="up to $30"
                                                labelPlacement="end"
                                                onChange={() => togglePrice(30)}
                                            />
                                            <FormControlLabel
                                                value="40"
                                                control={<Radio color="primary" />}
                                                label="up to $40"
                                                labelPlacement="end"
                                                onChange={() => togglePrice(40)}
                                            />
                                            <FormControlLabel
                                                value="50"
                                                control={<Radio color="primary" />}
                                                label="up to $50"
                                                labelPlacement="end"
                                                onChange={() => togglePrice(50)}
                                            />
                                            <FormControlLabel
                                                value="all"
                                                control={<Radio color="primary" />}
                                                label="show all"
                                                labelPlacement="end"
                                                onChange={() => togglePrice(99999)}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h2 style={{ margin: '17px 0 0 40px' }}>Showing {filteredProducts.length} products</h2>
                    <div className="products-grid">
                        <PageItem products={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

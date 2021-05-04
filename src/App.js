import './App.css';
import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Adbar } from './components/Adbar';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Pages/Landing';
import { ProductPage } from './components/Pages/ProductPage';
import { AllProducts } from './components/Pages/AllProducts';
import { Women } from './components/Pages/Women';
import { Men } from './components/Pages/Men';
import { Cart } from './components/Pages/Cart';
import { Checkout } from './components/CheckoutForm/Checkout/Checkout'
import { Error } from './components/Pages/Error';
import { Footer } from './components/Footer';



function App() {
  const [products, setProducts] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);
  const [shoesProducts, setShoesProducts] = useState([]);
  const [searches, setSearches] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({limit: 200});

    // console.log(data);
    
    setProducts(data);

    setWomensProducts(data.filter(product => product.categories[0].slug === "women"));

    setMensProducts(data.filter(product => product.categories[0].slug === "men"));

    setShoesProducts(data.filter(product => product.categories[0].slug === "shoes"));
  }

  const searchProducts = async (searchQuery) => {
    const { data } = await commerce.products.list({ query: searchQuery });

    setSearches(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity, variantData) => {
    let item = [];
    if (variantData) {
      item = await commerce.cart.add(productId, quantity, variantData);
    } else {
      item = await commerce.cart.add(productId, quantity);
    }

    setCart(item.cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const deleteCart = async () => {
    setCart({});
    await commerce.cart.delete();
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    console.log(cart);
  }, [])


  return (
    <>
      <Router>
        <Adbar />
        <Navbar
          totalItems={cart.total_items}
          searchProducts={searchProducts}
          searches={searches}
        />
        <Switch>
          <Route exact path="/">
            <Landing
              products={products}
              womensProducts={womensProducts}
              mensProducts={mensProducts}
              shoesProducts={shoesProducts}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/products/:id" render={({ match }) => (
            <ProductPage
              onAddToCart={handleAddToCart}
              id={match.params.id}
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          )} />
          <Route exact path="/new"><AllProducts products={products} /></Route>
          <Route exact path="/products"><AllProducts products={products}/></Route>
          <Route exact path="/women"><Women womensProducts={womensProducts}/></Route>
          <Route exact path="/men"><Men mensProducts={mensProducts}/></Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
              deleteCart={deleteCart}
            />
          </Route>
          <Route>
            <Error/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

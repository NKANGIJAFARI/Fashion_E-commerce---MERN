import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListSreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';

import './index.css';
import './Styles/main.scss';

const App = () => {
	return (
		<Router>
			<main className='App__container'>
				<Header />
				<div className='main__wrapper'>
					<Route path='/login' component={LoginScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/admin/userslist' component={UserListScreen} />
					<Route path='/admin/user/:id/edit' component={UserEditScreen} />
					<Route path='/admin/orderslist' component={OrderListScreen} />
					<Route
						path='/admin/productslist'
						component={ProductListSreen}
						exact
					/>
					<Route
						path='/admin/productslist/:pageNumber'
						component={ProductListSreen}
						exact
					/>
					<Route
						path='/admin/products/:id/edit'
						component={ProductEditScreen}
					/>
					<Route path='/products/:id' component={ProductScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/shipping' component={ShippingScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/order/:id' component={OrderScreen} />
					{/* <Route path='/shop/sort/:size' component={ShopScreen} exact />
					<Route
						path='/shop/sort/:size/page/:pageNumber'
						component={ShopScreen}
						exact
					/> */}
					<Route path='/shop/search/:keyword' component={ShopScreen} exact />
					{/* <Route
						path='/shop/search/:keyword/page/:pageNumber/?sizes'
						component={ShopScreen}
						exact
					/> */}
					<Route path='/shop/page/:pageNumber' component={ShopScreen} exact />
					{/* <Route path='/shop/page/:pageNumber' component={ShopScreen} exact /> */}

					<Route
						path='/shop/search/:keyword/page/:pageNumber'
						component={ShopScreen}
						exact
					/>
					{/* <Route path='/shop?sizes' component={ShopScreen} exact /> */}

					<Route path='/shop' component={ShopScreen} exact />

					<Route path='/' component={HomeScreen} exact />
				</div>
				<Footer />
			</main>
		</Router>
	);
};

export default App;

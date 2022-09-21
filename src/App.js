import NavBar from './components/Navbar/NavBar';
import './App.css';
import ItemList from './components/ItemListContainer/ItemList';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar/>
				<Routes>
					<Route exact path='/' element={<ItemList/>}/>
					<Route path="/productos/:tipoProducto" element={<ItemList/>}/>
					<Route path="/item/:productId" element={<ItemDetailContainer/>}/>
				</Routes>
				
			</div>
		</BrowserRouter>
		
	);
}

export default App;

import NavBar from './components/Navbar/NavBar';
import './App.css';
import ItemList from './components/ItemListContainer/ItemList';

function App() {
	return (
		<div className="App">
			<NavBar/>
			<ItemList/>
		</div>
	);
}

export default App;

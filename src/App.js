import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
	const nStock = 14;
	return (
		<div className="App">
			<NavBar/>
			<ItemListContainer greeting="Hola Coderhouse :D" solicitud="por favor aprobame Luciano, estuve 3 horas con esta card que me daba errores por todos lados"/>
			<ItemCount stock={nStock}/>
		</div>
	);
}

export default App;

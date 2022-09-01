import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import './App.css';

function App() {
	return (
		<div className="App">
			<NavBar/>
			<ItemListContainer greeting="Hola Coderhouse :D" solicitud="por favor aprobame Luciano, estuve 3 horas con esta card que me daba errores por todos lados"/>
		</div>
	);
}

export default App;

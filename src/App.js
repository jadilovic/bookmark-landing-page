import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Extensions from './components/Extensions';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Features />
			<Extensions />
			<FAQ />
			<Footer />
		</div>
	);
}

export default App;

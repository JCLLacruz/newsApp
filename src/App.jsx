import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ListNews from './components/ListNews/ListNews';
import Newnew from './components/Newnew/Newnew';

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalProvider>
					<Header />
					<Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ListNews' element={<ListNews />}/>
            <Route path='/newnew' element={<Newnew />}/>
          </Routes>
				</GlobalProvider>
			</BrowserRouter>
		</>
	);
}

export default App;

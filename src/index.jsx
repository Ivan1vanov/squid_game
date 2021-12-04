import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ModalProvider } from './components/ModalProvider'
import Actors from './components/screens/actors/Actors'
import Admin from './components/screens/admin/Admin'
import Home from './components/screens/home/Home'
import Trailer from './components/screens/trailer/Trailer'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/trailer' element={<Trailer/>}/>
					<Route path='/actors' element={<Actors/>}/>
					<Route path='/games' element={<Home/>}/>
				</Routes>
			</Router>
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

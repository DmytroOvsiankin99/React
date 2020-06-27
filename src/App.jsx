import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar/navbar'
import ProfileContent from './components/Profile/profilecontent'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import News from './components/News/News'
import FindUsersContainer from './components/FindUsers/FindUsersContainer'

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app_wrapper_grid">
				<Navbar />
				<div className="main_content">
					<Route path="/profilecontent" render={() => <ProfileContent/>} />
					<Route path="/dialogs" render={() => <DialogsContainer/>} />
					<Route path="/news" render={() => <News />} />
					<Route path="/music" render={() => <Music />} />
					<Route path="/finduser" render={() => <FindUsersContainer />} />
					<Route path="/settings" render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
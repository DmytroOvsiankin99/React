import React from 'react'
import './App.css'
import { Route, BrowserRouter } from "react-router-dom"
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Settings from './components/Settings/Settings'
import Music from './components/Music/Music'
import News from './components/News/News'
import FindUsersContainer from './components/FindUsers/FindUsersContainer'
import ProfileContainer from './components/Profile/profileContainer'
import NavbarContainer from './components/Navbar/navbarContainer'

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app_wrapper_grid">
				<NavbarContainer />
				<div className="main_content">
					<Route path="/profilecontent/:userId?" render={() => <ProfileContainer/>} />
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
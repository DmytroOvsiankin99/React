import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import ProfileContent from './components/Profile/profilecontent';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app_wrapper_grid">
				<Navbar />
				<div className="main_content">
					<Route path="/profilecontent" render={ () => <ProfileContent postData={props.postData} addPost={props.addPost}/> } />
					<Route path="/dialogs" render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} /> }  />
					<Route path="/news" render={ () => <News /> } />
					<Route path="/music" render={ () => <Music /> } />
					<Route path="/settings" render={ () => <Settings /> } />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
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
					<Route path="/profilecontent" render={ () => <ProfileContent 
						postData={props.state.profilePage.postData} 
						postValue={props.state.profilePage.postValue} 
						addPost={props.addPost} 
						updatePostArea={props.updatePostArea}/> } />
					<Route path="/dialogs" render={ () => <Dialogs 
						dialogsData={props.state.dialogsPage.dialogsData} 
						messagesData={props.state.dialogsPage.messagesData} /> }  />
					<Route path="/news" render={ () => <News /> } />
					<Route path="/music" render={ () => <Music /> } />
					<Route path="/settings" render={ () => <Settings /> } />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
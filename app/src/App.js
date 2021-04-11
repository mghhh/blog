import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// import logo from './logo.svg';
import './App.scss';
// import Header from './pages/header.js'
import Header from './components/Header/Header'
import ASide from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

import Article from './pages/article'
import Articles from './pages/articles'
import Edit from './pages/edit'
import EditPreview from './pages/editpreview'
// import Main from './pages/main.js'
// import ASide from './pages/aside.js'
// import Footer from './pages/footer.js'

// import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="app-content my-container">
          <div className="app-content-wrapper">
            <div className="app-main">
              <main>
                <Switch>
                    <Route exact path="/" component={Articles} />
                    <Route path="/article/:id" component={Article} />
                    <Route path="/edit" component={Edit}/>
                    <Route path="/editpreview/:content" component={EditPreview}/>                
                </Switch>
              </main>
            </div>
            <div className="app-aside">
              <ASide />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

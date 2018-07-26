import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './src/Header'
import ProjectsList from './src/ProjectsList'
import NewProject from './src/NewProject'
import SingleProject from './src/SingleProject'



export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={ProjectsList} />
                        <Route path='/create' component={NewProject} />
                        <Route path='/:id' component={SingleProject} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

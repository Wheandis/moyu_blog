import React from 'react'
import { render } from 'react-dom'
import BlogHeader from './components/blogheader'
import Blog from './components/blog'
import Home from './components/home'
import About from './components/about'
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom'

const App = () => {
    return (
        <Router keyLength={12}>
            <div>
                <BlogHeader />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/post/:id" render={({ match }) => (
                    <Blog postId={match.params.id} />
                )} />
            </div>
        </Router>
    )
}

render(<App />, document.getElementById('root'))
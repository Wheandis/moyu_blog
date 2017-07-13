import React, { Component } from 'react'
import axios from 'axios'

import markdownit from 'markdown-it'
const md = markdownit({
    html: true
})

const ajax = id => {
    return fn => {
        axios.get(`/${id}.md`)
            .then(res => res.data)
            .then(res => {
                fn(res)
            })
            .catch(error => {
            });
    }

}
class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            html: '',
            error: false
        }
    }
    componentDidMount() {
        ajax(this.props.postId)((res) => {
            this.setState({
                html: md.render(res)
            })
        })
    }
    componentWillReceiveProps(props) {
        ajax(props.postId)((res) => {
            this.setState({
                html: md.render(res)
            })
        })
    }

    render() {
        const { html, error } = this.state
        if (error) {
            return <div>Error</div>
        }
        if (html) {
            return (
                <div className="markdown-body">
                    <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
                </div>
            )
        } else {
            return <div>Loading</div>
        }
    }
}

export default Blog
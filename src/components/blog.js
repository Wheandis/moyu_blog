import React, { Component } from 'react'
import axios from 'axios'
import hljs from 'highlight.js'

import markdownit from 'markdown-it'
const md = markdownit({
    html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) { }
        }
        return ''; // use external default escaping 
    }
})
    .use(require('markdown-it-fontawesome'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-checkbox'))

const ajax = id => {
    return (fn, fn1) => {
        axios.get(`/posts/${id}.md?${Math.random()}`)
            .then(res => res.data)
            .then(res => {
                fn(res)
            })
            .catch(error => {
                fn1(error)
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
        }, () => {
            this.setState({
                error: true
            })
        })
    }
    componentWillReceiveProps(props) {
        ajax(props.postId)((res) => {
            this.setState({
                html: md.render(res)
            })
        }, () => {
            this.setState({
                error: true
            })
        })
    }

    render() {
        const divSty = {
            width: '90%',
            margin: '0 auto'
        }
        const { html, error } = this.state
        let res
        if (error) {
            res = <div>找不到这篇笔记～～</div>
        } else if (html) {
            res = <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
        } else {
            res = <div>Loading...</div>
        }
        return (
            <div style={divSty} className="markdown-body">
                {res}
            </div>
        )
    }
}

export default Blog
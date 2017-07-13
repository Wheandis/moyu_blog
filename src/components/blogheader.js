import React from 'react'
import { Link } from 'react-router-dom'
const BlogHeader = () => {
    return (
        <div>
            <div>
                杨浩杰的个人笔记
            </div>
            <div>
                <Link to="/">笔记</Link>
                <Link to="/post/about">关于</Link>
            </div>
        </div>
    )
}
export default BlogHeader
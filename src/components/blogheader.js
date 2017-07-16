import React from 'react'
import { Link } from 'react-router-dom'
const containerSty = {
    width:'100%',
    display:'flex',
    flexDirection:'column',
}
const titleSty= {
    padding:'30px 0',
    textAlign:'center',
    color:'#ffffff',
    backgroundColor:'#27ae60',
    fontSize:'40px',
    textShadow:'-5px 5px 0 rgba(0,0,0,.1)'
}
const navSty= {
    backgroundColor:'#f5f5f5',
    border:'1px solid #e3e3e3',
    display:'flex',
    padding:'5px 5%',
    justifyContent:'flex-end'
}
const navItemSty={
    display:'flex',
    padding:'0 10px',
    fontSize:'16px',
    textDecoration:'none',
    alignItems:'center',
    color:'#888888',
    // borderBottom:'2px solid #27ae60'
}


const BlogHeader = ({match}) => {
    return (
        <div style={containerSty}>
            <div style={titleSty}>
                杨浩杰的个人笔记
            </div>
            <div style={navSty}>
                <Link style={navItemSty} to="/"><i className={'fa fa-file-text'} style={{paddingRight:'3px'}}/>notes</Link>
                <Link style={navItemSty} to="/about"><i className={'fa fa-user-circle'} style={{paddingRight:'3px'}}/>about</Link>
                <a style={navItemSty} href='https://github.com/Wheandis'><i className={'fa fa-github-alt'} style={{paddingRight:'3px'}}/>github</a>
            </div>
        </div>
    )
}
export default BlogHeader
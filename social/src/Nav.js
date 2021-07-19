import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav  () {
    return (
        <nav>
            <ul className = "headbar-tab-icons">
                <Link to='/Home'>
                    <img class = "resize"src = "https://static.thenounproject.com/png/771236-200.png"/>
                </Link>
                <Link to='/Search'>
                    <img class = "resize"src="https://img.icons8.com/pastel-glyph/2x/search.png"  />
                </Link>
                <Link to='/Upload'>
                    <img class = "resize" src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png" />
                </Link>
                <Link to='/Profile'>
                    <img class = "resize"src="https://icons-for-free.com/iconfiles/png/512/instagram+profile+user+icon-1320184028326496024.png" />
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
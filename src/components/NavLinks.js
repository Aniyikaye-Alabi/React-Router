import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavLinks = ({match, history}) => {

    console.log(history);
    
    const style = {
        textDecoration: 'none'
    }


    const handleClick = (e) => {
        e.preventDefault();
        history.push('/login');
    }

    return (
        
        <div> 
            <ul>
                <li>
                    <NavLink style={style} to="/" activeClassName="selected" exact>Home</NavLink>
                </li>

                <li>
                    <NavLink style={style} to="/about" activeClassName="selected">About Us</NavLink>
                </li>

                <li>
                    <NavLink style={style} to="/users" activeClassName="selected">Users</NavLink>
                </li>

                {
                    history.location.pathname === "/login" ? <h2>Log in</h2> :
                    <li>
                        <button style={style} onClick={handleClick}>Sign in</button>
                    </li>

                }
                {/* {
                    user_ids.map((user) => 
                        <li>
                            <Link style={style} to={'/users/' + user}>{user}</Link>
                        </li>
                    )
                } */}
            </ul>
        </div>
        
    )
}
export default withRouter(NavLinks);
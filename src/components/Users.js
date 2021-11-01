import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import List from './List';

const user_ids = ['userId1', 'userId2', 'userId3', 'userId4', 'userId5', 'userId6', 'userId7'];

const Users = ({match, history, location}) => {
    console.log(match);
    const { type } = useParams();
    console.log(type);

    const style = {
        textDecoration: 'none'
      }
      
    return(
        <div>
            <h1>Users Page</h1>

            <p>
                Users...Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec accumsan leo nec nibh accumsan vulputate. Suspendisse potenti. 
                In mollis vestibulum quam vel eleifend. Pellentesque interdum a turpis bibendum volutpat. 
                Aliquam pellentesque, lectus eu imperdiet sagittis, odio risus tempus metus, et interdum eros mauris ut elit.
            </p>

            <ul>
                {
                    user_ids.map((user) => 
                        <li key={user}>
                            <Link key={user} style={style} to={`${match.url}/${user}`}>{user}</Link>
                            {/* <button onClick={ () => history.push(`/users/${user}`) }>{user}</button> */}
                            
                        </li>
                    )
                }
            </ul>

            

        </div>
    )
}
export default Users;
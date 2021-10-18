import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import List from './List';

const user_ids = ['userId1', 'userId2', 'userId3', 'userId4', 'userId5', 'userId6', 'userId7'];

const Users = () => {
    const { type } = useParams();

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
                        <li>
                            <Link style={style} to={'/users/' + user}>{user}</Link>
                        </li>
                    )
                }
            </ul>

            <p>
                {
                    
                    user_ids.map(id => 
                    <h3>
                        {type===id && `ID for this user is ${id}`}
                    </h3>)

                }
            </p>
        </div>
    )
}
export default Users;
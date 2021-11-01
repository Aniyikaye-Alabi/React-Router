import React from 'react';
import { useParams } from 'react-router';

const EachUser = ({match}) => {
    const user_ids = ['userId1', 'userId2', 'userId3', 'userId4', 'userId5', 'userId6', 'userId7'];
    const { type } = useParams();
    console.log(match);

    return (
        <div>
            <p>
                {
                    user_ids.map(id => 
                    <h3>
                        {type===id && `ID for this user is ${id}`}
                    </h3>)
                }
            </p>
        </div>
    );
}
export default EachUser;
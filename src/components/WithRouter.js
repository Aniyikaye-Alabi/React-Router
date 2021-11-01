import React, { useState } from 'react';
import { withRouter } from 'react-router';


const WithRouter = ({location}) => {
    console.log(location);

    //const [location, setPath] = useState(match)
    return (
        <div>
            <h2>Hello withRouter</h2>


        </div>
    );
}
export default withRouter(WithRouter);
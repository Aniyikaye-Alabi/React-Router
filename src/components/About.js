import React from 'react';

const About = (props) => {
    console.log(props.children);
    return(
        <div>
            <h1>About Page</h1>
                <p>
                    About us...Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec accumsan leo nec nibh accumsan vulputate. Suspendisse potenti. 
                    In mollis vestibulum quam vel eleifend. Pellentesque interdum a turpis bibendum volutpat. 
                    Aliquam pellentesque, lectus eu imperdiet sagittis, odio risus tempus metus, et interdum eros mauris ut elit.
                </p>
        </div>
    )
}
export default About;
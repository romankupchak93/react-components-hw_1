import React from 'react';

const componentB = props => {
    return <h1>
                <textarea readOnly className="form-control mt-2" value={props.value}  style={{fontSize: 100 + '%'}} />
           </h1>
}

export default componentB;

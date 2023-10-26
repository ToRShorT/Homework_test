import React, {useState} from 'react';

function Author() {
    const [author, setAuthor] = useState(false);
    return(
        <div>
            <h1>Assignment 1</h1>
            {author ? (
                <div>
                    <button onClick={() => setAuthor(false)}>Sign In</button>
                    <p>Please Sign In</p>
                </div>
            ) : (
                <div>
                    <button onClick={() => setAuthor(true)}>Sign Out</button>
                    <p>Welcome Back! , good to see you in here</p>
                </div>
            )}
        </div>
    )
}

export default Author;
        
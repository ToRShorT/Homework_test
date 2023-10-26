import React, {useState} from "react";

function Myform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email);
    }
    return(
        <div>
            <h1>Assignment 2</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />

                <input type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Myform;
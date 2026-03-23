import { useState } from "react";

const User = ({ name, location, contact }) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count 2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Address: {location}</h3>
            <h3>Location: {contact}</h3>
        </div>
    )
}

export default User;
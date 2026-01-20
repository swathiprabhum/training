import { useState } from "react";

function Input() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    return (
        <div>
            <h2>User Information</h2>
            <input type ="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type ="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <br />
            <input type ="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />

            <h3>Entered Details:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default Input;
       
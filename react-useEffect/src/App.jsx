import axios from "axios";
import { useEffect, useState } from "react";
import User from "./components/User";
import "./style/style.css";

const App = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get("https://api.github.com/users");
        const users = res.data;
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log("render p");
    return (
        <div style={{ display: "flex", width: "100%" }} className="row">
            {users.map((user) => (
                <User data={user} key={user.id} />
            ))}
        </div>
    );
};

export default App;

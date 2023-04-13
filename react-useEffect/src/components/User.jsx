const User = ({ data, children }) => {
    console.log(data);
    return (
        <div className="card" style={{ width: "33.333%" }}>
            <img src={data.avatar_url} style={{ width: "100%" }} alt="" />
            <div>{data.login}</div>
        </div>
    );
};

export default User;

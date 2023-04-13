import React from "react";
import ReactDom from "react-dom/client"
import "./style.css"

// const title = "Hello react";

const CardList = () => {
  return (
    <main style={{ display: "flex" }}>
      <Card title="hello" description={12} aa="haha">
        <p>This is shared props</p>
      </Card>
      <Card title="mingalar pr" aa="ok par">
        <p>Willy prps</p>
      </Card>
    </main>
  );
}

const Card = (props) => {
  const { title, description, aa, children } = props;
  return (
    <div className="card-div font" style={{ margin: "20px", padding: "20px" }}>
      <p>{title}</p>
      <p>{description}</p>
      {aa}
      {children}
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<CardList />)
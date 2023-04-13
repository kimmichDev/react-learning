import React from "react";
import ReactDoM from "react-dom/client"
import "./style.css"

const cards = [
    { id: 1, title: "title 1", description: "desc 1" },
    { id: 2, title: "title 2", description: "desc 2" },
];

const CardList = () => {
    return (
        <main style={{ display: "flex" }}>
            {/* {cards.map(card => <Card key={card.id} {...card} />)} */}
            {cards.map(card => <Card key={card.id} {...card} />)}
        </main>)
}

const Card = (props) => {
    console.log(props);
    const { title, description } = props;
    return (
        <div className="card-div" style={{ fontFamily: "sans-serif" }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const root = ReactDoM.createRoot(document.getElementById("root"));
root.render(<CardList />);
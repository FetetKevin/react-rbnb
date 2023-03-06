//Custom css
import "./App.css";

//Basic react tools
import React from "react";
import ReactDOM from "react-dom/client";

//Api datas
import Datas from "./Data";

//Components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";

function App() {
    const cards = Datas.map((elements) => {
        return <Card key={elements.id} {...elements} />;
    });

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-container">{cards}</section>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

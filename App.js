
    //createElemet createRoot render
    const heading = React.createElement("h1", {id : "heading"}, "Animesh");
    const parent = React.createElement("div", {id : "parent"}, heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);

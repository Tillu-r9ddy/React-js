const parent = React.createElement("div",
    {
        id: "parent",
    },
    [
        React.createElement("div",{
            id: "child1",
        },[
            React.createElement("h1",{id:"blue"},"Blue"),
            React.createElement("h1",{id:"green"},"Green"),
        ]),
        React.createElement("div",{
            id: "child2"
        },[
            React.createElement("h1",{id:"black"},"Black"),
            React.createElement("h1",{id:"purple"},"Purple"),
        ]),
        React.createElement("div",{
            id: "child3"
        }, React.createElement("h1",{id:"red"},"Red")),
    ]

);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
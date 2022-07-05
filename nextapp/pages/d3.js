import React from "react";
const render = await import("d3-render");
// const d3 = await import("d3");

const App = () => {
  const svg = React.useRef();
  const [data, setData] = React.useState([
    {
      append: "rect",
      width: 100,
      height: 100,
      fill: "green",
      duration: 1000,
      // Add some interactivity to the <rect> element
      onClick: () => {
        setData([{ ...data[0], fill: "yellow" }]);
      },
    },
  ]);

  React.useEffect(() => {
    if (svg && svg.current) {
      // Pass svg node to D3 render, along with data.
      // render runs whenever data changes
      render(svg.current, data);
    }
  }, [data]);

  return <svg ref={svg}></svg>;
};

export default App;

import React from "react";
import Tree from "./Tree";

function Treelist() {
  const [tree, setTree] = React.useState([]);

  async function fetchTree() {
    const response = await fetch("http://localhost:3405/trees");
    const newTree = await response.json();
    setTree(newTree);
  }
  React.useEffect(() => {
    fetchTree();
  }, []);

  return (
    <div>
      {tree.map(tree => (
        <Tree
          key={tree.id}
          title={tree.title}
          description={tree.description}
          image={tree.image}
        />
      ))}
    </div>
  );
}

export default Treelist;

import { useState } from "react";
import "./App.css";

interface Node {
  name: string;
  children?: Node[];
}

const files = [
  { name: "README.md" },
  {
    name: "src",
    children: [
      {
        name: "assets",
        children: [{ name: "logo.svg" }],
      },
      { name: "App.tsx" },
    ],
  },
  { name: ".gitignore" },
];

function Node({ name, children }: Node) {
  const [showChildren, setShowChildren] = useState(false);

  const onFolderClick = () => {
    setShowChildren(!showChildren);
  };

  return children ? (
    <>
      <button onClick={onFolderClick} className="folder">
        {name}
      </button><br />
      {showChildren &&
        children.map((node) => {
          return <Node name={node.name} children={node.children} />;
        })}
    </>
  ) : (
    <p className="file">{name}</p>
  );
}

function App() {
  return (
    <main className="container">
      <div>
        {files.map((node) => {
          return <Node name={node.name} children={node.children} />;
        })}
      </div>
    </main>
  );
}

export default App;

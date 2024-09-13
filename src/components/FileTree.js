import React, { useState, useEffect } from 'react';
import './fileTree.css'; // Ensure this CSS file exists and is properly linked

const FileTree = () => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    // Fetching the JSON file
    fetch('/projectStructure.json')
      .then((response) => response.json())
      .then((data) => setTreeData(data))
      .catch((error) => console.error('Error loading the file tree', error));
  }, []);

  // Recursive function to render the tree
  const renderTree = (node) => {
    return (
      <ul key={node.name}>
        <li>
          {node.name}
          {node.children && node.children.map((child) => renderTree(child))}
        </li>
      </ul>
    );
  };

  return (
    <div>
      {treeData ? renderTree(treeData) : null}
    </div>
  );
};

export default FileTree;

import React from "react";
import { createContext, useState } from "react";

const ProjectContext = createContext({
  projects: [],
});

export function ProjectContextProvider(props) {
  const [projects, setProjcets] = useState([]);

  const context = {
    projects: projects,
    setProjs: setProjcets,
  };

  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;

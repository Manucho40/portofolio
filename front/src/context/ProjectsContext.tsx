import React from "react";

export interface ProjectContextInterface {
  projects: any[] | null;
  setProjects: (projects: any) => void;
}
export default React.createContext<ProjectContextInterface | null>(null);

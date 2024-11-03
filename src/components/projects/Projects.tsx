"use client";

import React, { useEffect } from "react";
import ProjectCard from "../helper/ProjectCard";
import { Button } from "../ui/button";
import { AddProject } from "./AddProject";
import { useSelector } from "react-redux";
import { useStore } from "@/hooks/use-store";
import { useSidebar } from "@/hooks/use-sidebar";
import { Switch } from "../ui/switch";

const Projects = () => {
  const { projects } = useSelector((state: any) => ({
    projects: state.projectReducer.projects
  }));

  return (
    <section className="mt-4">
      <div className="flex justify-between items-center">
        <h1>Projects</h1>
        <AddProject />
      </div>
      {/* {projects ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {projects.map((project: any) => (
            <ProjectCard key={project.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <h1 className="text-2xl font-bold">No projects found</h1>
            <Button
              className="mt-4"
              onClick={() => alert("Add project clicked")}
            >
              Add Project
            </Button>
          </div>
        </div>
      )} */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

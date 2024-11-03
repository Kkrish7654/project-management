import { AddProjectFormValues } from "@/types/project.type";
import { projectConstant } from "../constants/ProjectConstant";

export const projectActions = {
  addProject
};

function addProject(Pdetails: AddProjectFormValues) {
  return { type: projectConstant.ADD_PROJECT, payload: Pdetails };
}

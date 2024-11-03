"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Select } from "../ui/select";
import { AddProjectFormValues, TeamMember } from "@/types/project.type";
import { useState } from "react";
import { Formik } from "formik";
import { addProjectValidationSchema } from "@/utils/validations/project.validation";
import { useDispatch } from "react-redux";
import { projectActions } from "@/redux/actions/ProjectActions";

export function AddProject() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const initialValues: AddProjectFormValues = {
    project: {
      name: "",
      description: "",
      startDate: "",
      deadline: "",
      budget: 0,
      complexity: "Low"
    },
    client: {
      name: "",
      contactEmail: "",
      phone: "",
      company: ""
    },
    teamMembers: teamMembers
  };
  const dispatch = useDispatch();

  const handleSubmitFormik = (values: AddProjectFormValues) => {
    console.log(values);
    dispatch(projectActions.addProject(values));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="default">
          Add Project
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl">Add New Project</SheetTitle>
          <SheetDescription>
            Enter all necessary details for the new project. Click save when
            done.
          </SheetDescription>
        </SheetHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={addProjectValidationSchema}
          onSubmit={handleSubmitFormik}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isValid
          }) => (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-4 py-4"
            >
              <div className="col-span-2 font-semibold text-lg">
                Project Details
              </div>
              <div>
                <Label htmlFor="project.name">Project Name</Label>
                <Input
                  id="project.name"
                  name="project.name"
                  placeholder="Enter project name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project.name}
                />
                {errors.project?.name && touched.project?.name && (
                  <div className="text-red-600">{errors.project.name}</div>
                )}
              </div>
              <div>
                <Label htmlFor="project.description">Description</Label>
                <Input
                  id="project.description"
                  name="project.description"
                  placeholder="Brief project description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project.description}
                />
                {errors.project?.description &&
                  touched.project?.description && (
                    <div className="text-red-600">
                      {errors.project.description}
                    </div>
                  )}
              </div>
              <div>
                <Label htmlFor="project.startDate">Start Date</Label>
                <Input
                  id="project.startDate"
                  name="project.startDate"
                  type="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project.startDate} // Format to YYYY-MM-DD
                />
                {errors.project?.startDate && touched.project?.startDate && (
                  <div className="text-red-600">{errors.project.startDate}</div>
                )}
              </div>
              <div>
                <Label htmlFor="project.deadline">Deadline</Label>
                <Input
                  id="project.deadline"
                  name="project.deadline"
                  type="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project.deadline} // Format to YYYY-MM-DD
                />
                {errors.project?.deadline && touched.project?.deadline && (
                  <div className="text-red-600">{errors.project.deadline}</div>
                )}
              </div>
              <div>
                <Label htmlFor="project.budget">Budget</Label>
                <Input
                  id="project.budget"
                  name="project.budget"
                  type="number"
                  placeholder="Enter budget"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.project.budget}
                />
                {errors.project?.budget && touched.project?.budget && (
                  <div className="text-red-600">{errors.project.budget}</div>
                )}
              </div>

              <div className="col-span-2 font-semibold text-lg mt-6">
                Client Details
              </div>
              <div>
                <Label htmlFor="client.name">Client Name</Label>
                <Input
                  id="client.name"
                  name="client.name"
                  placeholder="Enter client name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client.name}
                />
                {errors.client?.name && touched.client?.name && (
                  <div className="text-red-600">{errors.client.name}</div>
                )}
              </div>
              <div>
                <Label htmlFor="client.contactEmail">Client Email</Label>
                <Input
                  id="client.contactEmail"
                  name="client.contactEmail"
                  type="email"
                  placeholder="Client email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client.contactEmail}
                />
                {errors.client?.contactEmail &&
                  touched.client?.contactEmail && (
                    <div className="text-red-600">
                      {errors.client.contactEmail}
                    </div>
                  )}
              </div>
              <div>
                <Label htmlFor="client.phone">Client Phone</Label>
                <Input
                  id="client.phone"
                  name="client.phone"
                  placeholder="Client phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client.phone}
                />
                {errors.client?.phone && touched.client?.phone && (
                  <div className="text-red-600">{errors.client.phone}</div>
                )}
              </div>
              <div>
                <Label htmlFor="client.company">Client Company</Label>
                <Input
                  id="client.company"
                  name="client.company"
                  placeholder="Client company"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.client.company}
                />
                {errors.client?.company && touched.client?.company && (
                  <div className="text-red-600">{errors.client.company}</div>
                )}
              </div>

              <div className="col-span-2 font-semibold text-lg mt-6">
                Team Members
              </div>
              <div>
                <Label htmlFor="teamMembers">Team Members</Label>
                <Input
                  id="teamMembers"
                  name="teamMembers"
                  placeholder="Add team members (comma-separated)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.teamMembers.join(", ")}
                />
              </div>
              <div className="flex justify-end mt-4 col-span-2">
                <Button type="button" variant="outline" onClick={handleReset}>
                  Reset
                </Button>

                {isValid ? (
                  <SheetTrigger asChild>
                    <Button
                      type="submit"
                      className="ml-2"
                      onClick={() => {
                        isValid ? setOpen(false) : null;
                      }}
                    >
                      Save Project
                    </Button>
                  </SheetTrigger>
                ) : (
                  <Button
                    type="submit"
                    className="ml-2"
                    onClick={() => {
                      isValid ? setOpen(false) : null;
                    }}
                  >
                    Save Project
                  </Button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </SheetContent>
    </Sheet>
  );
}

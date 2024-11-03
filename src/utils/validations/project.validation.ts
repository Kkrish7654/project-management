// validationSchema.ts
import * as yup from "yup";

export const addProjectValidationSchema = yup.object().shape({
  project: yup.object().shape({
    name: yup
      .string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters"),
    startDate: yup
      .date()
      .required("Start date is required")
      .min(new Date(), "Start date must be in the future"),
    deadline: yup
      .date()
      .required("Deadline is required")
      .min(yup.ref("startDate"), "Deadline must be after start date"),
    budget: yup
      .number()
      .required("Budget is required")
      .positive("Budget must be a positive number")
  }),
  client: yup.object().shape({
    name: yup
      .string()
      .required("Client name is required")
      .min(2, "Client name must be at least 2 characters"),
    contactEmail: yup
      .string()
      .required("Client email is required")
      .email("Invalid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\+?[1-9]\d{1,14}$/, "Phone number is not valid"), // This is for international format, customize as needed
    company: yup
      .string()
      .required("Company name is required")
      .min(2, "Company name must be at least 2 characters")
  }),
  teamMembers: yup.array().of(
    yup.object().shape({
      id: yup.number().required("Team member ID is required"),
      name: yup
        .string()
        .required("Team member name is required")
        .min(2, "Name must be at least 2 characters"),
      role: yup
        .string()
        .required("Role is required")
        .min(2, "Role must be at least 2 characters"),
      email: yup
        .string()
        .required("Email is required")
        .email("Invalid email address")
    })
  )
});

export type Complexity = "Low" | "Medium" | "High";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
}

export interface ClientDetails {
  name: string;
  contactEmail: string;
  phone: string;
  company: string;
}

export interface ProjectDetails {
  name: string;
  description: string;
  startDate: string;
  deadline: string;
  budget: number;
  complexity: Complexity;
}

export interface AddProjectFormValues {
  project: ProjectDetails;
  client: ClientDetails;
  teamMembers: TeamMember[];
}

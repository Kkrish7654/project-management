import { TeamMember } from "./project.type";

export type TaskStatus = "Pending" | "Development" | "Testing" | "Completed";
export type TaskPriority = "Low" | "Medium" | "High";
export type TaskGroup = "In Progress" | "On Hold" | "Overdue" | "Completed";
export type ViewType = "List" | "Board";
export type TaskType = {
  id: number;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: TeamMember;
  dueDate: string;
  description: string;
  comments: string;
  attachments: string;
  group: TaskGroup;
  project: string;
  createdAt: string;
  updatedAt: string;
};

export type TaskCategory = {
  inprogress: TaskType[];
  onhold: TaskType[];
  overdue: TaskType[];
  completed: TaskType[];
};

export const tasks: TaskCategory = {
  inprogress: [
    {
      id: 1,
      name: "Implement Login Feature",
      status: "Development",
      priority: "High",
      assignee: {
        id: 1,
        name: "Alice",
        email: "kkrish@gmail.com",
        role: "Frontend Developer"
      },
      dueDate: "2024-11-10",
      description:
        "Create login functionality with validation and error handling.",
      comments: "Make sure to handle both client and server-side validation.",
      attachments: "login-wireframe.png",
      group: "In Progress",
      project: "Website Redesign",
      createdAt: "2024-11-01",
      updatedAt: "2024-11-02"
    },
    {
      id: 11,
      name: "Implement Signup Feature",
      status: "Development",
      priority: "High",
      assignee: {
        id: 1,
        name: "Alice",
        email: "kkrish@gmail.com",
        role: "Frontend Developer"
      },
      dueDate: "2024-11-10",
      description:
        "Create login functionality with validation and error handling.",
      comments: "Make sure to handle both client and server-side validation.",
      attachments: "login-wireframe.png",
      group: "In Progress",
      project: "Website Redesign",
      createdAt: "2024-11-01",
      updatedAt: "2024-11-02"
    }
  ],

  onhold: [
    {
      id: 2,
      name: "Database Schema Design",
      status: "Completed",
      priority: "Medium",
      assignee: {
        id: 2,
        name: "Bob",
        email: "kkrish@gmail.com",
        role: "Backend Developer"
      },
      dueDate: "2024-11-05",
      description: "Design database schema for user and task management.",
      comments: "Reviewed by the team, ready to implement.",
      attachments: "schema-diagram.pdf",
      group: "On Hold",
      project: "Website Redesign",
      createdAt: "2024-10-28",
      updatedAt: "2024-11-03"
    }
  ],

  overdue: [
    {
      id: 3,
      name: "Setup CI/CD Pipeline",
      status: "Testing",
      priority: "High",
      assignee: {
        id: 3,
        name: "Charlie",
        email: "kkrish@gmail.com",
        role: "DevOps Engineer"
      },
      dueDate: "2024-11-15",
      description: "Set up automated testing and deployment pipeline.",
      comments: "Currently in testing phase.",
      attachments: "ci-cd-pipeline-config.yaml",
      group: "Overdue",
      project: "Backend Overhaul",
      createdAt: "2024-11-01",
      updatedAt: "2024-11-06"
    },
    {
      id: 4,
      name: "Write Unit Tests for API",
      status: "Pending",
      priority: "Medium",
      assignee: {
        id: 4,
        name: "Diana",
        email: "kkrish@gmail.com",
        role: "Backend Developer"
      },
      dueDate: "2024-11-20",
      description: "Create unit tests for all endpoints in the API.",
      comments: "Tests should cover edge cases.",
      attachments: "",
      group: "Overdue",
      project: "API Development",
      createdAt: "2024-11-02",
      updatedAt: "2024-11-02"
    },
    {
      id: 5,
      name: "UI Design Review",
      status: "Completed",
      priority: "Low",
      assignee: {
        id: 5,
        name: "Eve",
        email: "kkrish@gmail.com",
        role: "UI/UX Designer"
      },
      dueDate: "2024-10-25",
      description: "Review and finalize the UI design for the project.",
      comments: "Final design approved by stakeholders.",
      attachments: "final-ui-design.png",
      group: "Overdue",
      project: "Website Redesign",
      createdAt: "2024-10-15",
      updatedAt: "2024-10-25"
    }
  ],

  completed: [
    {
      id: 6,
      name: "Complete Documentation",
      status: "Completed",
      priority: "Medium",
      assignee: {
        id: 6,
        name: "Frank",
        email: "frank@example.com",
        role: "Technical Writer"
      },
      dueDate: "2024-10-30",
      description: "Finalize and publish project documentation.",
      comments: "Documentation approved.",
      attachments: "documentation.pdf",
      group: "Completed",
      project: "Website Redesign",
      createdAt: "2024-10-25",
      updatedAt: "2024-10-30"
    }
  ]
};

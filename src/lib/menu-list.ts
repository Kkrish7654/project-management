import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  FolderKanban,
} from "lucide-react";


type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Projects",
          icon: FolderKanban,
          submenus: [
            {
              href: "/projects",
              label: "All Projects"
            },
            {
              href: "/projects/new",
              label: "New Project"
            }
          ]
        },
        {
          href: "/tasks",
          label: "Tasks",
          icon: SquarePen
        },
        {
          href: "/teams",
          label: "Teams",
          icon: Users
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          icon: Users
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings
        }
      ]
    }
  ];
}

import {
  Users,
  Settings,
  LayoutGrid,
  FileSignature,
  LucideIcon,
  Pen,
  List,
  Radio,
  CircleCheck,
  BadgeX,
  BadgePercent,
  CircleDollarSign,
  Layers3,
  Medal,
  RefreshCcwDot,
  Ban,
  File,
  CalendarDays,
  Calendar,
  UserCog,
  GitCompareArrows,
  SquareStack,
  MicVocal,
  GalleryVertical,
  MessageSquare,
  Bell,
  FileCheck,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
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
          active: pathname === "/dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Students Management",
      menus: [
        {
          href: "",
          label: "Student",
          active: pathname.includes("/dashboard/unit"),
          icon: Layers3,
          submenus: [
            {
              href: "/dashboard/student/admission",
              label: "Admission",
              active: pathname === "/dashboard/student/admission",
              icon: FileCheck,
            },
            {
              href: "/dashboard/student",
              label: "List",
              active: pathname === "/dashboard/student",
              icon: List,
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Client",
      menus: [
        {
          href: "/dashboard/news",
          label: "News",
          active: pathname.includes("/dashboard/news"),
          icon: MicVocal,
          submenus: [
            {
              href: "/dashboard/news/create",
              label: "Create",
              active: pathname === "/dashboard/news/create",
              icon: Pen,
            },
            {
              href: "/dashboard/news",
              label: "List",
              active: pathname === "/dashboard/news",
              icon: List,
            },
          ],
        },
        {
          href: "/dashboard/gallery",
          label: "Gallery",
          active: pathname.includes("/dashboard/gallery"),
          icon: GalleryVertical,
          submenus: [],
        },
        {
          href: "/dashboard/message",
          label: "Message",
          active: pathname.includes("/dashboard/message"),
          icon: MessageSquare,
          submenus: [],
        },
        {
          href: "/dashboard/notice",
          label: "Notice",
          active: pathname.includes("/dashboard/notice"),
          icon: Bell,
          submenus: [],
        },
      ],
    },
  ];
}

export function getMenuListScout(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/scout",
          label: "Dashboard",
          active: pathname === "/scout",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Event",
          active: pathname.includes("/scout/event"),
          icon: Calendar,
          submenus: [
            {
              href: "/scout/event",
              label: "List",
              active: pathname === "/scout/event",
              icon: List,
            },
            {
              href: "/scout/event/app",
              label: "Applications",
              active: pathname === "/scout/event/app",
              icon: File,
            },
          ],
        },
        {
          href: "",
          label: "Training",
          active: pathname.includes("/scout/training"),
          icon: GitCompareArrows,
          submenus: [
            {
              href: "/scout/training",
              label: "List",
              active: pathname === "/scout/training",
              icon: List,
            },
            {
              href: "/scout/training/app",
              label: "Applications",
              active: pathname === "/scout/training/app",
              icon: File,
            },
          ],
        },
        {
          href: "",
          label: "Unit",
          active: pathname.includes("/scout/unit"),
          icon: Layers3,
          submenus: [
            {
              href: "/scout/unit",
              label: "Manage",
              active: pathname === "/scout/unit",
              icon: Settings,
            },
            {
              href: "/scout/unit/request",
              label: "Request",
              active: pathname === "/scout/unit/request",
              icon: Radio,
            },
          ],
        },
        {
          href: "/scout/profile",
          label: "Profile",
          active: pathname.includes("/scout/profile"),
          icon: UserCog,
          submenus: [],
        },
      ],
    },
  ];
}

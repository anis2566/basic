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
  DollarSign,
  HandCoins,
  PlusCircle,
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
          href: "/dashboard/admission",
          label: "Admission",
          active: pathname.includes("/dashboard/admission"),
          icon: FileCheck,
          submenus: [],
        },
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
      groupLabel: "Fee",
      menus: [
        {
          href: "/dashboard/fee/admission",
          label: "Admission Fee",
          active: pathname.includes("/dashboard/fee/admission"),
          icon: DollarSign,
          submenus: [],
        },
        {
          href: "/dashboard/fee/monthly",
          label: "Monthly Fee",
          active: pathname.includes("/dashboard/fee/monthly"),
          icon: DollarSign,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Finance",
      menus: [
        {
          href: "/dashboard/finance/new",
          label: "New Payment",
          active: pathname.includes("/dashboard/finance/new"),
          icon: PlusCircle,
          submenus: [],
        },
        {
          href: "/dashboard/finance/admission",
          label: "Admission",
          active: pathname.includes("/dashboard/finance/admission"),
          icon: HandCoins,
          submenus: [],
        },
        {
          href: "/dashboard/finance/monthly",
          label: "Monthly",
          active: pathname.includes("/dashboard/finance/monthly"),
          icon: HandCoins,
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

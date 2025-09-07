import { ReactNode } from "react";

export interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export type UserCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};
export type BubbleList = Array<Omit<UserCardProps, "title"> & { href: string }>;

export type User = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string; // ISO string or formatted date
  status: "active" | "inactive" | "pending" | "blacklisted";
};

export type UserTableProps = {
  users: Array<User>;
};

export type MenuProps = {
  id: string;
  items: BubbleList;
  coords: { top: number; left: number };
  visible: boolean;
  onSelect: (item: string) => void;
  onClose: () => void;
};

export type UserFormProps = {
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
};

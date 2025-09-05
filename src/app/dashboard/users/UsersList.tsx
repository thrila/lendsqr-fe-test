import UserWithLoansIcon from "@/icons/user_card_loan.svg";
import ActiveUsersIcon from "@/icons/user_card_active_users.svg";
import UserIcon from "@/icons/user_card.svg";
import UserWithSavingsIcon from "@/icons/user_card_user_with_savings.svg";
import { UserCardProps } from "@/type/types";

export const userCardList: Array<UserCardProps> = [
  { icon: <UserIcon />, title: "user", text: "2,453" },
  { icon: <ActiveUsersIcon />, title: "active users", text: "2,453" },
  { icon: <UserWithLoansIcon />, title: "users with loans", text: "12,453" },
  { icon: <UserWithSavingsIcon />, title: "users with savings", text: "102,453" },
];

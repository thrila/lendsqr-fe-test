import ViewIcon from "@/icons/view.svg";
import DeleteFriendIcon from "@/icons/delete.svg";
import ActivateIcon from "@/icons/activate.svg";
import { BubbleList } from "@/type/types";

export const menuList: BubbleList = [
  { icon: <ViewIcon />, text: "View Details" },
  { icon: <DeleteFriendIcon />, text: "Blacklist User" },
  { icon: <ActivateIcon />, text: "Activate User" },
];

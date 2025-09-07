import { User } from "@/type/types";

export const mockUsers: Array<User> = [
  {
    id: "1",
    organization: "Acme Corp",
    username: "alice",
    email: "alice@example.com",
    phone: "+1 234 567 890",
    dateJoined: "2024-03-01",
    status: "pending" as const,
  },
];

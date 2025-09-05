import { User } from "@/type/types";

export const mockUsers: Array<User> = [
  {
    organization: "Acme Corp",
    username: "alice",
    email: "alice@example.com",
    phone: "+1 234 567 890",
    dateJoined: "2024-03-01",
    status: "pending" as const,
  },
  {
    organization: "Globex Inc",
    username: "bob",
    email: "bob@example.com",
    phone: "+1 987 654 321",
    dateJoined: "2024-04-15",
    status: "active" as const,
  },
  {
    organization: "Initech",
    username: "charlie",
    email: "charlie@example.com",
    phone: "+44 7700 900123",
    dateJoined: "2024-05-20",
    status: "inactive" as const,
  },
];

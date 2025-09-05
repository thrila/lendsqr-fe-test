import { SidebarItemProps as SidebarLink } from "@/type/types";
// customers Icons
import UsersIcon from "@/icons/users.svg";
import GuarantorIcon from "@/icons/guarantors.svg";
import LoanIcon from "@/icons/loan.svg";
import DecisionIcon from "@/icons/decision_model.svg";
import SavingsIcon from "@/icons/savings.svg";
import LoanRequestsIcon from "@/icons/loan_request.svg";
import WhitelistIcon from "@/icons/whitelist.svg";
import KarmaIcon from "@/icons/karma.svg";
// business icons
import OrganisationIcon from "@/icons/organisation.svg";
import LoanProductsIcon from "@/icons/loan_request.svg";
import SavingProductsIcon from "@/icons/saving_products.svg";
import FeesAndChargesIcon from "@/icons/fees_and_charge.svg";
import TransactionIcon from "@/icons/transaction.svg";
import ServicesIcon from "@/icons/services.svg";
import ServiceAccountIcon from "@/icons/service_account.svg";
import SettlementsIcon from "@/icons/settlements.svg";
import ReportsIcon from "@/icons/reports.svg";
// settings links
import PreferencesIcon from "@/icons/preferences.svg";
import FeesAndPricingIcon from "@/icons/fees_and_pricing.svg";
import AuditLogsIcon from "@/icons/audit_logs.svg";

export const settingsLinks: SidebarLink[] = [
  { icon: <PreferencesIcon />, label: "Preferences", href: "/preferences" },
  { icon: <FeesAndPricingIcon />, label: "Fees and Pricing", href: "/user" },
  { icon: <AuditLogsIcon />, label: "Audit Logs", href: "/audit-logs" },
];
export const customersLinks: SidebarLink[] = [
  { icon: <UsersIcon />, label: "Users", href: "/users" },
  { icon: <GuarantorIcon />, label: "Guarantors", href: "/guarantors" },
  { icon: <LoanIcon />, label: "Loans", href: "/loana" },
  { icon: <DecisionIcon />, label: "Decision Models", href: "/decision-models" },
  { icon: <SavingsIcon />, label: "Savings", href: "/savings" },
  { icon: <LoanRequestsIcon />, label: "Loan Requests", href: "/loan-requests" },
  { icon: <WhitelistIcon />, label: "Whitelist", href: "/whitelist" },
  { icon: <KarmaIcon />, label: "Karma", href: "/karma" },
];
export const businessLinks: SidebarLink[] = [
  { icon: <OrganisationIcon />, label: "Organization", href: "/organization" },
  { icon: <LoanProductsIcon />, label: "Loan Products", href: "/loan-products" },
  { icon: <SavingProductsIcon />, label: "Savings Products", href: "/savings-products" },
  { icon: <FeesAndChargesIcon />, label: "Fees and Charges", href: "/fees-and-charges" },
  { icon: <TransactionIcon />, label: "Transactions", href: "/transactions" },
  { icon: <ServicesIcon />, label: "Services", href: "/services" },
  { icon: <ServiceAccountIcon />, label: "Service Account", href: "/service-account" },
  { icon: <SettlementsIcon />, label: "Settlements", href: "/settlements" },
  { icon: <ReportsIcon />, label: "Reports", href: "/reports" },
];

import { ReactNode } from "react";
import LANDING from "../section/_index";

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <LANDING.SectionHeaderLanding />
      {children}
      <LANDING.SectionFooterLanding />
    </>
  );
}

import LandingPageLayout from "./layout/LandingPageLayout";
import LANDING from "./section/_index";

export default function LandingPage() {
  return (
    <>
      <LandingPageLayout>
        <LANDING.SectionIntroLanding />
        <LANDING.SectionPannelLanding />
        <LANDING.SectionContentLanding />
      </LandingPageLayout>
    </>
  );
}

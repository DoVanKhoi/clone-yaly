import LANDING from "@/app/[lang]/feature/LandingPage/section/_index";

export default function AboutPage() {
    return (
        <>
            <LANDING.SectionHeaderLanding />
            <div className="min-h-dvh">
                <h1>About Us</h1>
            </div>
            <LANDING.SectionFooterLanding />
        </>
    );
}
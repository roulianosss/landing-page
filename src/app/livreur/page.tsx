import ContactSection from "@/components/rider/contact-section/contact-section";
import IntroductionSection from "@/components/rider/introduction-section/introduction-section";
import PresentationSection from "@/components/rider/presentation-section/presentation-section";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";

const page = () => {
    return (
        <main>
            <Header />
            <IntroductionSection />
            <PresentationSection/>
            <ContactSection />
            <Footer />
        </main>
    );
}

export default page;
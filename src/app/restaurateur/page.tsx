import IntroductionSection from "@/components/restaurateur/introduction-section/introduction-section";
import OurRestaurants from "@/components/restaurateur/our-restaurants/our-restaurants";
import PresentationSection from "@/components/restaurateur/presentation-section/presentation-section";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";

const page = () => {
    return (
        <main>
            <Header />
            <IntroductionSection />
            <OurRestaurants />
            <PresentationSection />
            <Footer />
        </main>
    );
}

export default page;
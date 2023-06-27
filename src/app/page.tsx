import Header from "@/components/shared/header/header";
import IntroductionSection from "@/components/home/introduction-section/introduction-section";
import WelcomeSection from "@/components/home/welcome-section/welcome-section";
import MarseilleSection from "@/components/home/marseille-section/marseille-section";
import Carrousel from "@/components/home/carrousel/carrousel";
import CryptoSection from "@/components/home/crypto-section/crypto-section";
import MobileAppsSection from "@/components/home/mobile-apps-section/mobile-apps-section";
import Footer from "@/components/shared/footer/footer";


export default function Home() {
  return (
    <main>
      <Header />
      <IntroductionSection />
      <WelcomeSection />
      <MarseilleSection />
      <Carrousel />
      <CryptoSection />
      <MobileAppsSection />
      <Footer />
    </main>
  );
}

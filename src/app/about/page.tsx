import Header from '@/components/header';
import AboutSection from '@/components/sections/about';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

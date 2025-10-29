import Header from '@/components/header';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

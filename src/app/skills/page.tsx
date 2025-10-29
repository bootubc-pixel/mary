import Header from '@/components/header';
import SkillsSection from '@/components/sections/skills';
import Footer from '@/components/footer';

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

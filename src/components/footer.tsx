import ScrollToTop from "./scroll-to-top";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-center py-6 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Abdoshy. All rights reserved.</p>
      </div>
      <ScrollToTop />
    </footer>
  );
}

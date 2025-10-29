import { Code, Database, Paintbrush } from "lucide-react";
import type { SVGProps } from "react";

const icons: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  HTML: (props) => <Code {...props} />,
  CSS: (props) => <Paintbrush {...props} />,
  JavaScript: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 20.5c.3.2.7.3 1.1.3 1.2 0 2.4-.9 2.4-2.1v-2.3c0-1.2-1.1-2.1-2.4-2.1-1.2 0-2.3.9-2.3 2.1v.2"/>
      <path d="M12.5 14.3v-1.1c0-1.2-1.1-2.1-2.4-2.1-1.2 0-2.3.9-2.3 2.1v2.3c0 1.2 1.1 2.1 2.4 2.1.8 0 1.5-.4 1.9-.9"/>
      <path d="M18.1 19.3c.3.2.7.3 1.1.3 1.2 0 2.2-.9 2.2-2.1v-3.7c0-1.2-1-2.1-2.2-2.1-1.2 0-2.2.9-2.2 2.1v3.7c0 1.2 1 2.1 2.2 2.1.7 0 1.4-.4 1.8-.8"/>
    </svg>
  ),
  React: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Laravel: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1 7.28V16.72L12 22L23 16.72V7.28L12 2ZM11.39 15.34L8.16 13.33V9.26L11.39 11.27V15.34ZM12.61 15.34V11.27L15.84 9.26V13.33L12.61 15.34ZM12 9.97L8.77 7.96L12 6.03L15.23 7.96L12 9.97Z"/>
    </svg>
  ),
  'ASP.NET Core': (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c.4 0 .79-.02 1.18-.06-.31-.59-.53-1.25-.62-1.94H12c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10c0 .71-.08 1.4-.22 2.06.69.19 1.34.48 1.93.86C23.94 13.99 24 13.02 24 12c0-6.63-5.37-12-12-12zm6.18 14.18c-.3-.3-.71-.49-1.16-.49-.49 0-.93.23-1.23.58-.29.35-.45.79-.45 1.28 0 .32.09.61.25.86.16.25.39.46.66.6.31.16.65.23 1.02.23.49 0 .93-.11 1.28-.32.35-.21.6-.51.71-.86h-1.5v-1h2.48c.02.16.03.32.03.49 0 .69-.17 1.32-.49 1.83-.32.51-.77.9-1.32 1.16-.55.26-1.16.39-1.8.39-.81 0-1.54-.19-2.18-.55s-1.14-.88-1.5-1.52c-.36-.64-.55-1.38-.55-2.22 0-.85.19-1.6.55-2.25.36-.65.86-1.16 1.5-1.52.64-.36 1.37-.55 2.18-.55.88 0 1.63.22 2.22.64.49.35.83.81 1.02 1.35l-1.02.49z" />
    </svg>
  ),
  SQL: (props) => <Database {...props} />,
  Firebase: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.46 8.92L9.4 2.09c.14-.15.35-.15.49 0l2.65 2.79-5.99 6.2-3.09-2.16zm15.65 2.47L13.1 2.09c-.14-.15-.35-.15-.49 0L9.95 4.88l6.01 6.22 3.15-2.72zM3 10.5v3.42c0 .24.16.45.39.52l6.05 1.73-6.05-5.15c-.23-.2-.39-.46-.39-.72zm11.96 7.41L19.5 14.3c.27-.27.27-.72 0-1l-3.54-3.54-6.01 6.22 5.01 1.43z"/>
    </svg>
  )
};

export const TechIcon = ({ name, className }: { name: string; className?: string }) => {
  const Icon = icons[name];
  return Icon ? <Icon className={className} /> : null;
};

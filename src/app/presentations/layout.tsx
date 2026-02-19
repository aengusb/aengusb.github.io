import type { Metadata } from "next";
import "./presentations.css";

export const metadata: Metadata = {
  title: {
    default: 'Presentations',
    template: '%s | Aengus Bridgman',
  },
};

export default function PresentationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="presentation-wrapper" style={{ position: 'fixed', inset: 0, zIndex: 9999, overflow: 'hidden' }}>
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
// Simple line icons in the brand green, one per service.
const P: Record<string, ReactNode> = {
  "doctor-home-visit-mumbai": <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10" /><path d="M12 12.5v5M9.5 15h5" /></>,
  "blood-test-at-home-mumbai": <path d="M12 3c3.2 4 6 7 6 11a6 6 0 0 1-12 0c0-4 2.8-7 6-11z" />,
  "home-healthcare-mumbai": <path d="M12 20.5s-8-4.8-8-10.8A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 8 2.5c0 6-8 10.8-8 10.8z" />,
  "home-nursing-mumbai": <><circle cx="12" cy="7.5" r="3.5" /><path d="M5 20.5c0-4 3-6.5 7-6.5s7 2.5 7 6.5" /><path d="M12 15.5v3M10.5 17h3" /></>,
  "elderly-care-at-home-mumbai": <><circle cx="9.5" cy="5" r="2" /><path d="M9.5 8v6l-2.5 6.5M9.5 14l3 6.5M9.5 10l4 1.5v9" /></>,
  "wound-dressing-at-home-mumbai": <><rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-35 12 12)" /><path d="M10.5 10.5v.01M13.5 13.5v.01M12 12v.01" /></>,
  "iv-injection-at-home-mumbai": <g transform="rotate(45 12 12)"><rect x="9" y="4.5" width="6" height="11" rx="1.2" /><path d="M12 15.5V21M9.5 2.5h5M12 2.5v2" /></g>,
  "bedridden-patient-care-mumbai": <><path d="M3 19V7M3 14.5h18V19M21 14.5V12a2.5 2.5 0 0 0-2.5-2.5H11v5" /><circle cx="7" cy="11" r="1.8" /></>,
  "home-medical-procedures-mumbai": <><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M12 11.5v6M9 14.5h6" /></>,
  "catheter-care-at-home-mumbai": <><circle cx="18.5" cy="5.5" r="2" /><path d="M5 20c0-6 3-6.5 7-6.5s6.5-.5 6.5-6" /></>,
  "ryles-tube-care-at-home-mumbai": <><circle cx="6" cy="4" r="1.6" /><path d="M6 5.6V11a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v1.5" /></>,
  "diabetic-care-at-home-mumbai": <path d="M12 3c3.2 4 6 7 6 11a6 6 0 0 1-12 0c0-4 2.8-7 6-11z" />,
  "palliative-care-at-home-mumbai": <path d="M12 20.5s-8-4.8-8-10.8A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 8 2.5c0 6-8 10.8-8 10.8z" />,
};
export default function ServiceIcon({ slug }: { slug: string }) {
  if (!P[slug]) return null;
  return (
    <span className="ictile" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{P[slug]}</svg>
    </span>
  );
}

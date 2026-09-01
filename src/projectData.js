/**
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────────────
 * To add a new project, copy the template below and fill in the fields.
 *
 * Fields:
 *   id          — unique number
 *   title       — project name
 *   description — short description (2–3 sentences)
 *   thumbnail   — import your image at the top and reference it here
 *   category    — "fullstack" | "frontend" | "backend" | "mobile"
 *   tags        — array of tech strings
 *   codeLink    — GitHub URL (or "" if private)
 *   liveLink    — live demo URL (or "" if not deployed)
 *   featured    — true | false
 *
 * Template:
 * ─────────────────────────────────────────────────────────────────
 * import myThumbnail from "./assets/thumbnail/my-project.png";
 *
 * {
 *   id: 1,
 *   title: "My Project",
 *   description: "What it does and why it's cool.",
 *   thumbnail: myThumbnail,
 *   category: "fullstack",
 *   tags: ["React", "Node.js", "MongoDB"],
 *   codeLink: "https://github.com/Ashutosh-Chikhaliya/...",
 *   liveLink: "https://...",
 *   featured: false,
 * },
 * ─────────────────────────────────────────────────────────────────
 */

import inoutThumbnail from './assets/inout-car booking/inout-car-booking.png';
import billieThumbnail from './assets/desktop-app.png';
import mobileLedgerThumbnail from './assets/ledger-mobileAPP.png';

export const Projects = [
  {
    id: 1,
    title: "In & Out Limo Services",
    description: "A full-stack, responsive booking engine built for a premium limousine service. Replaced their manual booking process with a seamless React frontend and a robust Laravel API. Features include multi-step checkout and a comprehensive admin dashboard for fleet, pricing, and route management.",
    thumbnail: inoutThumbnail,
    category: "Web App",
    tags: ["React", "Laravel", "MySQL", "TailwindCSS"],
    codeLink: "", // Private
    liveLink: "https://booking.inandoutlimoservices.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Billie-Ledger App",
    description: "A comprehensive financial management application designed for businesses to streamline client records. Features robust tracking of dues and advance payments, alongside automated generation of detailed client ledgers and aging reports for clear financial oversight.",
    thumbnail: billieThumbnail,
    category: "Desktop App",
    tags: ["Flutter", "Dart", "Financial", "Desktop App", "SQLIte"],
    codeLink: "", // Assuming private for business apps
    liveLink: "", // Desktop app, no live link unless specified
    featured: true,
  },
  {
    id: 3,
    title: "Secure Mobile Ledger",
    description: "A highly secure mobile ledger application for tracking business transactions in the cloud. Architected with end-to-end encryption to ensure that sensitive financial data is never stored in plain text in the database, prioritizing ultimate privacy and data integrity.",
    thumbnail: mobileLedgerThumbnail,
    category: "Mobile App",
    tags: ["React Native", "Expo", "Laravel", "MySQL", "Encryption"],
    codeLink: "", 
    liveLink: "", 
    featured: true,
  }
];

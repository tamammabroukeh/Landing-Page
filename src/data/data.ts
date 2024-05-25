import {
  IBlogging,
  IFooter,
  ILink,
  ITestimonials,
} from "../interfaces/Interfaces";
import { v4 as uuid } from "uuid";
import { AlignEndVertical } from "lucide-react";
import David from "../assets/David.jpg";
import John from "../assets/John Doe.jpg";
import Jane from "../assets/Jane.jpg";
export const Links: ILink[] = [
  { id: uuid(), to: "/", title: "Home" },
  { id: uuid(), to: "/theme", title: "Theme" },
  { id: uuid(), to: "/extensions", title: "Extensions" },
  { id: uuid(), to: "/pricing", title: "Pricing" },
  { id: uuid(), to: "/about", title: "About" },
];
export const authLinks: ILink[] = [
  { id: uuid(), to: "/sign-up", title: "Sign Up" },
  { id: uuid(), to: "/login", title: "Login" },
];
export const ContentLinks: ILink[] = [
  { id: uuid(), to: "/", title: "services" },
  { id: uuid(), to: "/", title: "price" },
  { id: uuid(), to: "/", title: "contact" },
];
// blogging
export const BloggingContent: IBlogging[] = [
  {
    id: uuid(),
    title: "AI Content Editor",
    description: `Write and edit your blog posts with ease using our AIpowered
    content editor. Enjoy smart suggestions and real-time feedback.`,
  },
  {
    id: uuid(),
    title: "SEO Optimizer",
    description: `Boost your blog's visibility with our AI-driven SEO
    optimizer. Get keyword suggestions and optimization tips.`,
  },
  {
    id: uuid(),
    title: "Real-Time Analytics",
    description: `Track your blog's performance with real-time analytics.
    Understand your audience and make data-driven decisions.`,
  },
];
// footer
export const FooterContent: IFooter[] = [
  {
    id: uuid(),
    parent: "Quick Links: ",
    children: [
      "Home",
      "Theme",
      "Extensions",
      "Pricing",
      "Contact",
      "About",
      "Sign Up/Login",
    ],
  },
  {
    id: uuid(),
    parent: "About: ",
    children: [
      "Carrers",
      "Investor realations",
      "Our brand",
      "Our history",
      "Accessibility",
      "Press & Media",
      "Terms of service",
      "Security Measures",
      "Contact us",
    ],
  },
  {
    id: uuid(),
    parent: "Support and Resources: ",
    children: ["FAQ", "Documentation", "Blog", "Tutorials", "Terms of service"],
  },
  {
    id: uuid(),
    parent: "Contact information: ",
    children: [
      "Email: info@example.com",
      "Phone: +1 (123) 456-7890",
      "Address: 123, Main Street,\n Anytown, USA",
    ],
  },
  {
    id: uuid(),
    parent: "Social Media Links: ",
    children: ["Facebook", "Twitter", "Instagram", "Linkedin", "Youtube"],
  },
];
// testimonials
export const testimonialsContent: ITestimonials[] = [
  {
    id: uuid(),
    icon: AlignEndVertical,
    description: `The website builder platform helped me create a profissional website for my busniss quickly and easily. I love the AI-powered features!`,
    image: David,
    name: "David Johson",
  },
  {
    id: uuid(),
    icon: AlignEndVertical,
    description: `The website builder platform helped me create a profissional website for my busniss quickly and easily. I love the AI-powered features!`,
    image: John,
    name: "John Doe",
  },
  {
    id: uuid(),
    icon: AlignEndVertical,
    description: `The website builder platform helped me create a profissional website for my busniss quickly and easily. I love the AI-powered features!`,
    image: Jane,
    name: "Jane Smith",
  },
];

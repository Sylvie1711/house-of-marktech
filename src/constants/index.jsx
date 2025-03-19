import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Influencer Hub",
    image: user1,
    text: "Working with this team has transformed my influencer career. Their strategic approach to brand partnerships has significantly increased my engagement and reach.",
  },
  {
    user: "Jane Smith",
    company: "Social Media Stars",
    image: user2,
    text: "I couldn't be happier with the results from our collaboration. Their insights into audience targeting helped me connect with brands that truly resonate with my followers.",
  },
  {
    user: "David Johnson",
    company: "Creative Influencers",
    image: user3,
    text: "The support I received was exceptional. They guided me through every step of the campaign process, ensuring that I maximized my impact and earnings.",
  },
  {
    user: "Ronee Brown",
    company: "Brand Connect",
    image: user4,
    text: "Partnering with this company was a game-changer for my brand. Their innovative strategies and attention to detail helped me achieve my goals faster than I imagined.",
  },
  {
    user: "Michael Wilson",
    company: "Influencer Network",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They helped me secure partnerships that aligned perfectly with my brand values.",
  },
  {
    user: "Emily Davis",
    company: "Digital Creators",
    image: user6,
    text: "The team went above and beyond to ensure my campaigns were a success. Their expertise in influencer marketing is unmatched, and I look forward to collaborating with them again.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Analyze your Campaign",
    description:
      "Get insights into your campaign's performance, audience engagement, and ROI.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Reach a wider audience across multiple platforms, including Instagram, TikTok, and YouTube.",
  },
  {
    icon: <ShieldHalf />,
    text: "Create your Campaign",
    description:
      "Create a campaign that is tailored to your audience and brand.",
  },
  {
    icon: <BatteryCharging />,
    text: "Collaborate with Brands",
    description:
      "Connect with top brands and collaborate on exciting projects.",
  },
  {
    icon: <PlugZap />,
    text: "Monetize your Campaign",
    description:
      "Earn money from your campaign and grow your influence.",
  },
  {
    icon: <GlobeLock />,
    text: "Track your Campaign",
    description:
      "Monitor the progress of your campaign and make adjustments as needed.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Campaign Discovery",
    description:
      "Browse a wide range of campaigns tailored to your niche and interests.",
  },
  {
    title: "Seamless Brand Collaboration",
    description:
      "Connect with top brands and collaborate on exciting projects effortlessly.",
  },
  {
    title: "Diverse Payout Options",
    description:
      "Choose from various payout types including barter, refunds, and fixed pay.",
  },
  {
    title: "Maximize Your Influence",
    description:
      "Leverage our platform to grow your audience and enhance your brand partnerships.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$100",
    features: [
      "Access to basic campaigns",
      "Basic Analytics Dashboard",
      "Community Support",
      "Monthly Newsletter with Tips",
    ],
  },
  {
    title: "Professional",
    price: "$150",
    features: [
      "Access to premium campaigns",
      "Advanced Analytics Dashboard",
      "Priority Support",
      "Collaboration Tools",
    ],
  },
  {
    title: "Enterprise",
    price: "$300",
    features: [
      "Unlimited access to all campaigns",
      "Comprehensive Analytics Reports",
      "Dedicated Account Manager",
      "Custom Branding Options",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started with Campaigns" },
  { href: "#", text: "Influencer Documentation" },
  { href: "#", text: "Brand Collaboration Tutorials" },
  { href: "#", text: "Success Stories" },
  { href: "#", text: "Community Support Forums" },
];

export const platformLinks = [
  { href: "#", text: "Campaign Features" },
  { href: "#", text: "Influencer Tools" },
  { href: "#", text: "Brand Requirements" },
  { href: "#", text: "App Downloads" },
  { href: "#", text: "Latest Updates" },
];

export const communityLinks = [
  { href: "#", text: "Influencer Events" },
  { href: "#", text: "Networking Meetups" },
  { href: "#", text: "Industry Conferences" },
  { href: "#", text: "Creative Hackathons" },
  { href: "#", text: "Collaboration Opportunities" },
];

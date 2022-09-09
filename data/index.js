import {
  FaLinkedinIn,
  FaGithub,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
} from "react-icons/fi";

import { MdEmail } from "react-icons/md";

const SocialShare = [
  {
    Social: <FaGithub />,
    link: "https://github.com/NorimboyevErkin",
    name: "Github",
  },
  {
    Social: <FaTelegram />,
    link: "https://t.me/Erkin_norimboyev",
    name: "Telegram",
  },
  {
    Social: <FaLinkedinIn />,
    link: "#",
    name: "Linkedin",
  },
  {
    Social: <MdEmail />,
    link: "emailto:enorimboyev@gmail.com",
    name: "Email",
  },
  {
    Social: <FaPhoneAlt />,
    link: "tel:+998949242319",
    name: "Phone",
  },
];

const ServiceList = [
  {
    icon: <FiCast />,
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiLayers />,
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiCast />,
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMonitor />,
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
export { SocialShare, ServiceList };

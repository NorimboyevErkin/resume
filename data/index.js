import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/...",
    name: "Facebook",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/...",
    name: "Linkedin",
  },
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/...",
    name: "Instagram",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/...", name: "Twitter" },
  { Social: <FaGithub />, link: "#", name: "Github" },
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
      "I throw myself down among the tall grass by the stream as I lie close to the earth. erkin",
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
      "I throw myself down among the tall grass by the stream as I lie close to the earth. erkin",
  },
];
export { SocialShare, ServiceList };

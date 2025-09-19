import type { LandingLinkType } from "@/Models/NavlinkModel";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export const landingLinks: LandingLinkType[] = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub />,
    onClick: () => window.open("https://github.com/akshajrawat", "_blank"),
    title: "Visit my GitHub",
    type: "external",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <FaLinkedin />,
    onClick: () =>
      window.open(
        "https://www.linkedin.com/in/akshaj-rawat-436a84314/",
        "_blank"
      ),
    title: "Visit my LinkedIn",
    type: "external",
  },
  {
    id: 3,
    name: "Resume",
    icon: <FaFileAlt />,
    onClick: () => window.open("/Download/Resume.pdf", "_blank"),
    title: "Download Resume",
    type: "external",
  },
];

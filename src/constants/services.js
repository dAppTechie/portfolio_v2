import React from "react"
import { FaCode, FaNodeJs, FaMobileAlt } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `My layouts can be dynamic or static. All layouts are responsive and work on any device.`,
  },
  {
    id: 2,
    icon: <FaNodeJs className="service-icon" />,
    title: "backend development",
    text: `Able to develop the backend with knowledge of multiple backend languages such as Node, Python (Django), and Java (Spring).`,
  },
  {
    id: 3,
    icon: <FaMobileAlt className="service-icon" />,
    title: "app development",
    text: `Visually pleasing apps that are optimized to swiftly grow. Strong preference for easy to use, intuitive UX/UI.`,
  },
]

export default services

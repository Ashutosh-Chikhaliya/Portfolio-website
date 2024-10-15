import nikeProjectImg from "../src/assets/image1.png";
import SMNImg from "../src/assets/image2.png";
import chessImg from "../src/assets/image.png";

export const Projects = [
  {
    id: 1,
    title: "Nike Website Clone",
    description:
      "A frontend website clone built using React.js. Implemented features like adding items to the Cart and Wishlist, detailed product page, SignIn-SignUp",
    image: nikeProjectImg,
    tags: ["React", "JavaScript", "HTML", "CSS", "tailwindcss", "axios"],
    codeLink:
      "https://github.com/Ashutosh-Chikhaliya/Nike---Website-Frontend.git",
    liveLink: "https://nike-website-frontend.vercel.app",
  },
  {
    id: 3,
    title: "Chess Game",
    description:
      "Multiplayer real time chess game, implemented Players roles, move validation game state updates, timers and real time feedbacks",
    image: chessImg,
    tags: [
      "Chess.js",
      "Node.js",
      "Socket.IO",
      "EJS",
      "Express.js",
      "JavaScript",
      "TailwindCSS",
    ],
    codeLink: "https://github.com/Ashutosh-Chikhaliya/Chess---Game-Web-App.git",
    liveLink: "https://chess-game-web-app.onrender.com",
  },
  {
    id: 2,
    title: "Social Media Network Visualization",
    description:
      "Developed a visual representation of a social media network where users are nodes and relationships are edges.",
    image: SMNImg,
    tags: ["D3.js", "JavaScript", "CSS"],
    codeLink:
      "https://github.com/Ashutosh-Chikhaliya/Social-Media-Network-Visualization.git",
    liveLink: "https://social-media-network-visualization.vercel.app",
  },
];

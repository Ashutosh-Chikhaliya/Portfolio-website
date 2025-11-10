import nikeProjectImg from "../src/assets/image1.png";
import SMNImg from "../src/assets/image2.png";
import chessImg from "../src/assets/image.png";
import khetiImg1 from "../src/assets/kheti-app/kheti-1.jpeg";
import khetiImg2 from "../src/assets/kheti-app/kheti-2.jpg";
import khetiImg3 from "../src/assets/kheti-app/kheti-3.jpg";
import khetiImg4 from "../src/assets/kheti-app/kheti-4.jpg";
import khetiImg5 from "../src/assets/kheti-app/kheti-5.jpg";
import khetiImg6 from "../src/assets/kheti-app/kheti-6.jpg";
import khetiImg7 from "../src/assets/kheti-app/kheti-7.jpg";
import khetiImg8 from "../src/assets/kheti-app/kheti-8.jpg";
import khetiDashboard from "../src/assets/kheti-app/Screenshot 2025-10-21 161040.png";
import transactionImg1 from "../src/assets/transaction-app/1.jpg";
import transactionImg2 from "../src/assets/transaction-app/2.jpg";
import transactionImg3 from "../src/assets/transaction-app/3.jpg";
import transactionImg4 from "../src/assets/transaction-app/4.jpg";
import transactionImg5 from "../src/assets/transaction-app/5.jpg";
// Thumbnails
import nikeThumbnail from "../src/assets/thumbnail/nike-thumbnail.png";
import chessThumbnail from "../src/assets/thumbnail/chess.png";
import socialMediaThumbnail from "../src/assets/thumbnail/social-media-network-thumbanil.png";
import khetiThumbnail from "../src/assets/thumbnail/Gemini_Generated_Image_3suxba3suxba3sux.png";
import transactionThumbnail from "../src/assets/thumbnail/transcation-app-thumbnail.png";

export const Projects = [
   {
    id: 4,
    title: "Kheti-Khata-Book",
    description:
      "A comprehensive farm management mobile application that helps farmers manage their farms, crops, expenses, and sales efficiently. Features multi-language support for better accessibility and includes detailed analytics for farming operations.",
    image: khetiDashboard,
    thumbnail: khetiThumbnail,
    gallery: [
      khetiImg1,
      khetiImg2,
      khetiImg3,
      khetiImg4,
      khetiImg5,
      khetiImg6,
      khetiImg7,
      khetiImg8
    ],
    tags: ["React Native", "Expo", "Laravel", "PHP", "MySQL", "Multi-language", "Mobile App"],
    codeLink: "", // Add your GitHub repository link here
    liveLink: "", // Add Play Store or App Store link if available
  },
  {
    id: 5,
    title: "Transaction Management App",
    description:
      "A secure transaction management system for managing client transactions with advanced features. Generate ledgers client-wise and group-wise, share encrypted private links with clients, and ensure security with single-session authentication. Built with encryption/decryption mechanisms to protect sensitive financial data.",
    image: transactionImg1,
    thumbnail: transactionThumbnail,
    gallery: [
      transactionImg1,
      transactionImg2,
      transactionImg3,
      transactionImg4,
      transactionImg5
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Encryption", "Authentication", "Session Management", "Secure Links"],
    codeLink: "", // Add your GitHub repository link here
    liveLink: "", // Add your live demo link here
  },
  {
    id: 1,
    title: "Nike Website Clone",
    description:
      "A frontend website clone built using React.js. Implemented features like adding items to the Cart and Wishlist, detailed product page, SignIn-SignUp",
    image: nikeProjectImg,
    thumbnail: nikeThumbnail,
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
    thumbnail: chessThumbnail,
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
    thumbnail: socialMediaThumbnail,
    tags: ["D3.js", "JavaScript", "CSS"],
    codeLink:
      "https://github.com/Ashutosh-Chikhaliya/Social-Media-Network-Visualization.git",
    liveLink: "https://social-media-network-visualization.vercel.app",
  },
 
 
];

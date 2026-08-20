export const personalInfo = {
  name: "Tejashwi Shrestha",
  role: "AI AND SOFTWARE ENGINEER",
  tagline: "Bridging the gap between intelligent AI systems and beautiful, functional design.",
  bio: "I am a passionate technology professional with a BSc in IT from London Metropolitan University. With professional experience spanning across Nepal and the US, I have developed a unique blend of skills ranging from full-stack web development and product design to my current core focus: Artificial Intelligence. I specialize in building autonomous AI agents and intelligent workflows that solve real-world problems.",
  email: "Tejashwi.shrestha22@gmail.com",
};

export const skills = {
  ai: ["AI Agent Development", "LLM Integration", "Workflow Automation", "Prompt Engineering", "Conversational AI"],
  development: ["React", "TypeScript", "Node.js", "Full-Stack Web Dev", "API Integration"],
  design: ["UI/UX Design", "Brand Identity", "Product Design", "Graphic Design"],
};

export const projects = [
  {
    id: "ai-dental-agent",
    title: "Autonomous AI Agent",
    category: "AI Engineering",
    description: "A sophisticated multi-agent system built to automate operations. It handles natural language inquiries, manages schedules, and orchestrates workflows autonomously, demonstrating advanced skills in agent orchestration and LLM integrations.",
    // I will use a placeholder since the video file name wasn't explicitly given by the user in text, just uploaded.
    // If they put their video in public folder as demo.mp4 they can change this.
    video: "src/demo.mov", 
    imagePlaceholder: true,
    tags: ["AI Agents", "LLMs", "Automation", "Workflow Logic"],
    featured: true,
  },
  {
    id: "fashionixa",
    title: "Fashionixa Klotho",
    category: "Web Development",
    description: "Designed and developed a modern e-commerce platform for Fashionixa Klotho, focusing on a seamless shopping experience, responsive design, and striking visual aesthetics.",
    link: "https://www.fashionixaklotho.com/",
    images: [
      "src/fashionixa-1.png .png",
      "src/fashionixa-2.png",
      "src/fashionixa-3.png",
      "src/fashionixa-4.png"
    ],
    tags: ["Web Design", "E-commerce", "UI/UX"],
    featured: true,
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Logo Design",
    category: "Graphic Design",
    description: "Created distinct visual identities for various brands, including 'Avnex' and 'Lavellad', blending clean typography with modern, symbolic imagery.",
    images: [
      "src/Dark Red Minimalist Custom Tailor Logo.png",
      "src/Black and Grey Clean Modern Minimalist Creative Technology Logo (1).png",
      "src/Colorful Brain Digital World Technology Logo.png",
      "src/fashionixalogo.png",
      "src/Untitled design.png"
    ],
    tags: ["Branding", "Vector Design", "Identity"],
    featured: false,
  },
  {
    id: "product-design",
    title: "Product Design",
    category: "Product Design",
    description: "Conceptualized and designed 'Classic Patch' pure hemp bags, manufactured in Nepal. Focused on sustainable materials, vibrant traditional patterns, and modern utility.",
    images: [
      "src/Magic Mushroom.png",
      "src/Hempbagdesign.jpeg",
      "src/Brochure1.png"
    ],
    tags: ["Product Design", "Sustainability", "Physical Goods"],
    featured: false,
  }
];

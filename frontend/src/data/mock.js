// Mock data for portfolio

export const personalInfo = {
  name: "Aryaabhisek Mahapatra",
  role: "MERN Stack Developer",
  bio: "I build things for the web. I am a Full-stack developer passionate about creating scalable and efficient web applications.",
  email: "aryaabhisek661@gmail.com",
  profileImage: "https://github.com/Aryaabhisek/arya.abhisek/blob/main/frontend/public/ProfilePicPortfolio.jpeg?raw=true",
  social: {
    linkedin: "https://www.linkedin.com/in/aryaabhisekmahapatra",
    github: "https://github.com/Aryaabhisek",
    leetcode: "https://leetcode.com/u/Aryaabhisek/"
  }
};

export const skills = [
  { name: "MongoDB", category: "Database" },
  { name: "Express.js", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Git", category: "Tools" },
  { name: "Github", category: "Tools" },
  { name: "Railway", category: "Tools" },
  { name: "Render", category: "Tools" },
  { name: "REST API", category: "Backend" },
  { name: "Java", category: "Language" },
  { name: "MySQL", category: "Database" },

];

export const projects = [
  {
    id: 1,
    title: "Triad-AI",
    description: "A multi-model LLM Chatbot",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Aryaabhisek/triad-ai",
    liveDemo: "",
    image: "https://plus.unsplash.com/premium_photo-1725985758251-b49c6b581d17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Nat-Weather",
    description: "A Weather API based Web Application",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Aryaabhisek/Nat-Weather",
    liveDemo: "https://nat-weather.onrender.com/",
    image: "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Multi-user Editor",
    description: "It's a multi-user code editor",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io","YJS"],
    github: "https://github.com/Aryaabhisek",
    liveDemo: "",
    image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Srusty Academy of Management and Technology",
    location: "Bhubaneswar",
    year: "Post Graduation",
    description: "Specialized in software development, database management, and web technologies.",
    CGPA: "8.81"
  },
  {
    id: 2,
    degree: "B.Sc (Hons) - Physics",
    institution: "PIMIT Degree College",
    location: "Nayagarh",
    year: "Graduation",
    description: "Focused on analytical thinking and problem-solving skills.",
    CGPA: "8.16"
  }
];

export const contactFormSubmit = (formData) => {
  // Mock form submission - will be replaced with actual API call
  console.log('Form submitted (MOCK):', formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};
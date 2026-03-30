// Mock data for portfolio

export const personalInfo = {
  name: "Aryaabhisek Mahapatra",
  role: "MERN Stack Developer",
  bio: "Hi, My name is Aryaabhisek Mahapatra, I build things for the web. I am a MERN stack developer passionate about creating scalable and efficient web applications.",
  email: "aryaabhisek661@gmail.com",
  profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryaabhisek",
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
  { name: "Node.js", category: "Backend" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Git", category: "Tools" },
  { name: "REST API", category: "Backend" },
  { name: "Java", category: "Language" },
  { name: "Python", category: "Language" }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory updates and order tracking.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    github: "https://github.com/Aryaabhisek/ecommerce-platform",
    liveDemo: "https://ecommerce-demo.example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop functionality and notifications.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Aryaabhisek/task-manager",
    liveDemo: "https://taskmanager-demo.example.com",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Srusty Academy of Management and Technology",
    location: "Bhubaneswar",
    year: "Post Graduation",
    description: "Specialized in software development, database management, and web technologies."
  },
  {
    id: 2,
    degree: "B.Sc (Hons) - Physics",
    institution: "PIMIT Degree College",
    location: "Nayagarh",
    year: "Graduation",
    description: "Focused on analytical thinking and problem-solving skills."
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
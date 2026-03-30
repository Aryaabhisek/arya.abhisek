import React from 'react';
import { Code2, Database, Server, Palette, GitBranch, Cpu } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, skills } from '../data/mock';

const About = () => {
  const skillCategories = [
    { name: 'Frontend', icon: Palette, color: 'text-cyan-400' },
    { name: 'Backend', icon: Server, color: 'text-blue-400' },
    { name: 'Database', icon: Database, color: 'text-green-400' },
    { name: 'Language', icon: Code2, color: 'text-yellow-400' },
    { name: 'Tools', icon: GitBranch, color: 'text-purple-400' }
  ];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with expertise in building modern web applications
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio Card */}
          <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Cpu className="text-cyan-400 mr-3" size={32} />
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in computer science and hands-on experience in full-stack development, 
                I specialize in creating responsive, user-friendly applications that solve real-world problems.
              </p>
            </CardContent>
          </Card>

          {/* Tech Stack Card */}
          <Card className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Code2 className="text-cyan-400 mr-3" size={32} />
                <h3 className="text-2xl font-semibold text-white">What I Do</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Build scalable full-stack web applications using MERN stack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Design and implement RESTful APIs and database architectures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Create responsive and intuitive user interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">▹</span>
                  <span>Write clean, maintainable, and well-documented code</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category.name);
              const IconComponent = category.icon;
              
              return categorySkills.length > 0 && (
                <Card
                  key={category.name}
                  className="bg-gray-800 border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-700 rounded-lg">
                        <IconComponent className={category.color} size={32} />
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-3">{category.name}</h4>
                    <div className="space-y-2">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full"
                        >
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
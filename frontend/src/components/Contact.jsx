import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, Linkedin, Github, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo, contactFormSubmit } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using mock function for now
      const response = await contactFormSubmit(formData);
      
      toast({
        title: "Success!",
        description: response.message,
        duration: 3000,
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <MessageSquare className="text-cyan-400 mr-2" size={28} />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Card */}
            <Card className="bg-gray-900 border-gray-700 hover:border-cyan-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-cyan-500/10 rounded-lg mr-4">
                    <Mail className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Connect professionally</p>
                  </div>
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg mr-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                    <Github className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-400 text-sm">Check out my code</p>
                  </div>
                </a>

                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-2 bg-yellow-500/10 rounded-lg mr-4 group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Code2 className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">LeetCode</p>
                    <p className="text-gray-400 text-sm">View my solutions</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
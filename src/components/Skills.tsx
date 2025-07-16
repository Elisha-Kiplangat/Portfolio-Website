import Azure from '../assets/Azure.jpg'; 
import Hono from '../assets/Hono.jpg';
import JS from '../assets/JS.jpg';
import Node from '../assets/Node.jpg';
import php from '../assets/php.jpg';
import Postgres from '../assets/Postgres.jpg';
import React from '../assets/React.jpg';
import Tailwind from '../assets/Tailwind.jpg';
import Ts from '../assets/Ts.jpg';
import Drizzle from '../assets/Drizzle.jpeg'
import CSharp from '../assets/CSharp.jpeg'
import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { name: 'TypeScript', logo: Ts, category: 'Languages' },
  { name: 'JavaScript', logo: JS, category: 'Languages' },
  { name: 'PHP', logo: php, category: 'Languages' },
  { name: 'C#', logo: CSharp, category: 'Languages' },
  { name: 'Node', logo: Node, category: 'Backend' },
  { name: 'Hono', logo: Hono, category: 'Backend' },
  { name: 'Drizzle ORM', logo: Drizzle, category: 'Backend' },
  { name: 'React', logo: React, category: 'Frontend' },
  { name: 'Tailwind CSS', logo: Tailwind, category: 'Frontend' },
  { name: 'Postgres', logo: Postgres, category: 'Database' },
  { name: 'Azure', logo: Azure, category: 'Cloud' }
];

const categories = ['All', 'Languages', 'Backend', 'Database', 'Frontend', 'Cloud'];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Languages': return 'bg-red-500';
      case 'Backend': return 'bg-green-500';
      case 'Database': return 'bg-yellow-500';
      case 'Frontend': return 'bg-blue-500';
      case 'Cloud': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="relative bg-purple-100 py-20 px-4 md:px-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-200 rounded-full opacity-10 -translate-x-20 -translate-y-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-200 rounded-full opacity-10 translate-x-28 translate-y-28 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Technologies and tools I work with to build amazing applications
          </p>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-24 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
             
              <div className="flex justify-center items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(skill.category)}`}>
                  {skill.category}
                </span>
              </div>
              
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img 
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="relative w-16 h-16 mx-auto object-cover rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center group-hover:text-purple-600 transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Skills Overview</h3>
            <p className="text-gray-600">Technologies organized by category</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.slice(1).map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <div key={category} className="text-center">
                  <div className={`w-16 h-16 ${getCategoryColor(category)} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold text-lg">{categorySkills.length}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{category}</p>
                  <p className="text-xs text-gray-500">{categorySkills.length} skills</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

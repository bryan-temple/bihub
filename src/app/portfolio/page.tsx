import { motion } from 'framer-motion';
import Image from 'next/image';


const projects = [
  {
    title: 'EcoShop',
    description: 'An accessible e-commerce platform for eco-friendly products.',
    image: '/images/ecoshop.jpg',
    tags: ['E-commerce', 'Accessibility', 'React']
  },
  {
    title: 'CityExplorer',
    description: 'An interactive, accessible city guide app for tourists and locals.',
    image: '/images/cityexplorer.jpg',
    tags: ['Mobile App', 'React Native', 'Geolocation']
  },
  {
    title: 'HealthTrack',
    description: 'A HIPAA-compliant health monitoring dashboard for patients and doctors.',
    image: '/images/healthtrack.jpg',
    tags: ['Healthcare', 'Data Visualization', 'Security']
  },
  {
    title: 'EduLearn',
    description: 'An inclusive online learning platform with support for multiple languages and accessibility features.',
    image: '/images/edulearn.jpg',
    tags: ['Education', 'Multilingual', 'Accessibility']
  }
];

const Portfolio = () => {
  return (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-orange text-center">Our Portfolio</h1>
        
        <p className="text-lg mb-12 max-w-3xl mx-auto text-center">
          Discover how we&apos;ve helped businesses across various industries create impactful, accessible, and innovative digital solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-navy/30 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-green">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-orange/20 text-orange px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to build something amazing?</h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-orange text-navy font-bold py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-orange-600"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </motion.div>

  );
};

export default Portfolio;
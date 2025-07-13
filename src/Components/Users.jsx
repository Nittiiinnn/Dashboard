import React from 'react';
import ProfileImage from '../assets/ProfileImage.jpg'
function Users() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md min-h-[calc(100vh-120px)]">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">About Me</h2>

      <div className="flex justify-center mb-8"> {/* Centering the image */}
        <img
          src = {ProfileImage} // <--- IMPORTANT: Replace with the actual path to your image
          alt="Nittin Baluni"
          className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-gray-200 dark:border-gray-700 transition-colors duration-300"
        />
      </div>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Hello, I'm Nittin Baluni!</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am an Aspiring Front End Developer with a keen interest in building intuitive and efficient web applications.
          My interest lies in creating dynamic, user-friendly interfaces using React and modern CSS frameworks like Tailwind CSS.
          I love tackling complex problems and bringing ideas to life through code.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">About This Dashboard</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This personal dashboard serves as a central hub for my professional online presence.
          It's built with <strong className="text-blue-600 dark:text-blue-400">React</strong>, <strong className="text-teal-600 dark:text-teal-400">Tailwind CSS</strong> for rapid UI development
          and the <strong className="text-purple-600 dark:text-purple-400">Context API</strong> for seamless theme management (light/dark mode).
          A key feature is its integration with my social media platforms, providing a quick overview of my online reach.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          It's a continuous work in progress, and I'm always looking to enhance its features and functionality.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Connect with Me</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to reach out or connect with me on my professional networks:
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.linkedin.com/in/nitin-baluni-9a68702a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
             className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700">
            <i className="fa-brands fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a href="https://x.com/baluninittin?s=09" target="_blank" rel="noopener noreferrer"
             className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-800">
            <i className="fa-brands fa-x-twitter mr-2"></i> X (Twitter)
          </a>
          <a href="https://www.instagram.com/nitin_baluni_/?utm_source=qr&igsh=MWNndjE1djA0b3V4Zw%3D%3D#" target="_blank" rel="noopener noreferrer"
             className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors dark:bg-pink-500 dark:hover:bg-pink-600">
            <i className="fa-brands fa-instagram mr-2"></i> Instagram
          </a>
          <a href="mailto:your.baluninitin06@gmail.com"
             className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            <i className="fa-solid fa-envelope mr-2"></i> Email
          </a>
          {/* Add your GitHub link if you have one */}
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer"
             className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors dark:bg-gray-600 dark:hover:bg-gray-700">
            <i className="fa-brands fa-github mr-2"></i> GitHub
          </a>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200">What's Next?</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm currently diving deeper into advanced state management patterns in React and exploring BackEnd Development.
          Always eager to learn and contribute to innovative projects!
        </p>
      </section>
    </div>
  );
}

export default Users;
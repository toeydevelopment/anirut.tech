export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
      <form className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-4 rounded-lg shadow mb-6">
        <div className="mb-3">
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input id="name" type="text" required
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700                             bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100" />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" required
                  className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700                             bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100" />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea id="message" rows="4" required
                     className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700                                bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"></textarea>
        </div>
        <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
          Send
        </button>
      </form>
      <div className="text-center">
        {/* Social and contact links */}
        <p className="mb-2">Or connect with me on:</p>
        <div className="space-x-4 text-lg">
          <a href="https://linkedin.com/in/anirutk" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">LinkedIn</a>
          <a href="https://github.com/toeydevelopment" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">GitHub</a>
          <a href="mailto:anirut.workspace@gmail.com" className="font-medium hover:underline">Email</a>
        </div>
      </div>
    </section>
  );
}

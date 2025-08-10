export default function Blog() {
  const upcomingPosts = [
    "Blockchain Infrastructure at Scale – Best Practices",
    "Integrating LLMs into Production Systems",
    "DevOps and GitOps in Modern Development",
    "Building Secure Mobile Applications"
  ];
  return (
    <section id="blog" className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <p className="italic mb-6">Articles coming soon. Stay tuned!</p>
      <ul className="space-y-2 text-left">
        {upcomingPosts.map((title, idx) => (
          <li key={idx} className="bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded">
            {title} <span className="text-teal-600 dark:text-teal-400 italic">(coming soon)</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

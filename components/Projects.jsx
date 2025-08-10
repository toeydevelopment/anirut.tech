export default function Projects() {
  const projects = [
    {
      title: "NFT Loyalty Platform",
      description: "Developed an NFT marketplace that pivoted into a CRM & loyalty platform for businesses. Introduced a 'digital passport' feature allowing users to collect location-based digital collectibles and rewards. Redesigned the system architecture to improve scalability while cutting cloud costs by ~70%. Built with a modern tech stack and DevOps practices to ensure reliability and quick iteration."
    },
    {
      title: "Cross-Chain ERC20 Bridge",
      description: "Implemented secure cross-chain bridges for ERC-20 tokens, enabling users to transfer assets between different blockchains with ease28. Focused on preventing double-spending and ensuring atomic swaps. Optimized smart contract code for low gas fees and built robust monitoring to guarantee smooth, reliable transfers."
    },
    {
      title: "NEAR NFT Platform",
      description: "Built a platform on the NEAR Protocol for minting and managing NFTs with minimal fees29. Developed smart contracts in Rust and an intuitive web interface for partners to create and transfer NFTs. Leveraged NEAR’s low-cost transactions to deliver a cost-effective NFT solution for businesses."
    },
    {
      title: "Mobile Browser & Social App",
      description: "Created a mobile-first platform combining a web browser, content discovery agent, and ML-powered search engine30. The app featured interactive maps with geo-tagged user posts and a personalized feed (like a mix of Pinterest, Facebook, and TikTok). Overcame challenges in rendering dynamic content and integrated AI recommendations for an engaging user experience."
    },
    {
      title: "Digital Identity System",
      description: "Designed a national digital identity mobile app enabling citizens to use their government-issued ID for digital verification. Implemented secure on-device ID storage and authentication, OAuth2 consent flows for sharing data with banks/government, and blockchain for audit trails. Ensured high security (encryption, secure enclave) and scalability to support millions of daily transactions."
    }
  ];
  return (
    <section id="projects" className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md                                      rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm leading-relaxed">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from 'react';

const experience = [
  {
    title: "Senior Venture Architect / Tech Lead – FinTech/Web3 (2022–Present)",
    details: [
      "Led a cross-functional engineering team (8–13 members across multiple countries)7, focusing on a fintech platform that began as an NFT venture and evolved into a CRM/loyalty product.",
      "Reduced cloud infrastructure costs by ~70% through a complete system redesign and efficient GitOps-based DevOps practices8.",
      "Introduced modern workflows (DevOps, GitOps, DesignOps, SecretOps) to improve development speed and cross-team collaboration9.",
      "Integrated emerging tech like LLMs (OCR, automated content generation) to enhance product capabilities10.",
      "Tech Stack: Flutter (mobile), Node.js & Go (services), Kubernetes (cloud), Pulumi (Infrastructure as Code)."
    ]
  },
  {
    title: "Senior Blockchain Developer – Crypto/Blockchain (Mar–Jun 2022)",
    details: [
      "Developed cross-chain ERC-20 token bridge smart contracts and off-chain services, preventing double-spending and ensuring secure coin transfers11.",
      "Built an NFT platform on the NEAR protocol (Rust smart contracts) to enable low-cost minting and transferring of NFTs12.",
      "Optimized blockchain solutions for efficiency (low gas fees, high throughput) and implemented Layer-2 scaling (zk-Rollups, Optimistic Rollups).",
      "Championed GitOps/DevOps culture in the team, automating deployments and improving reliability.",
      "Tech Stack: Solidity, Rust, Ethereum & NEAR blockchains, CI/CD with Kubernetes."
    ]
  },
  {
    title: "Senior Backend Developer – Social/Media Startup (Aug 2021–Feb 2022)",
    details: [
      "Built a mobile-first social platform blending a browser, content discovery, and ML-powered search engine13.",
      "Developed a cross-platform mobile app (Flutter) with interactive maps and dynamic content, enabling users to post and explore geo-tagged content.",
      "Implemented real-time features (friend follow, comments, personalized feeds) and optimized video rendering for performance on mobile devices.",
      "Collaborated on scalable backend architecture (microservices, message queues, search index) to support a rapidly growing user base.",
      "Tech Stack: Flutter/Dart, Node.js (NestJS) & Go, ElasticSearch, NATS, Dgraph (graph DB)."
    ]
  },
  {
    title: "Senior Fullstack Developer – Tech Consulting (Apr–Jul 2021)",
    details: [
      "Contributed to a web platform’s frontend (Next.js/React) and backend APIs (Python/FastAPI).",
      "Established frontend documentation and coding conventions to improve team collaboration and reduce merge conflicts14.",
      "Gained experience with Agile/Scrum methodologies and corporate development practices (OKRs, performance evaluations).",
      "Tech Stack: Python (FastAPI), React/Next.js, PostgreSQL, AWS."
    ]
  },
  {
    title: "Senior Backend Engineer – E-Commerce Fulfillment (Nov 2020–Apr 2021)",
    details: [
      "Optimized a fulfillment system for an e-commerce startup, resolving severe performance issues in order submission15.",
      "Integrated Application Performance Monitoring to identify bottlenecks, significantly improving response times and stability16.",
      "Automated live-stream commerce workflows: processed Facebook Live comments to generate orders and invoices, syncing inventory and shipments in real-time17.",
      "Tech Stack: Node.js & Go, MongoDB, RabbitMQ, NLP libraries for comment parsing."
    ]
  },
  {
    title: "Full Stack Developer – Digital Identity (Jan 2019–Nov 2020)",
    details: [
      "Designed and developed a national **digital identity** mobile app (Thai e-ID) enabling citizens to use their ID card as a digital authenticator18.",
      "Implemented secure onboarding (government KYC with card readers) and an OAuth2/OpenID Connect consent system for third-party service integration19.",
      "Ensured top-notch security: integrated Secure Enclave/Android Keystore to restrict ID usage to the owner on trusted devices, and used blockchain (Hyperledger) for auditability.",
      "Built backend services in Go and scalable infrastructure to handle millions of transactions per day, meeting strict government security standards (passed penetration tests).",
      "Tech Stack: Flutter (mobile), GoLang (microservices), OAuth2/OIDC, Hyperledger Fabric, Redis, Kubernetes."
    ]
  }
];

export default function Resume() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="resume" className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      {experience.map((job, idx) => (
        <div key={idx} className="mb-3 border-b border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full text-left py-2 px-1 flex justify-between items-center"
          >
            <span className="font-semibold">{job.title}</span>
            <span>{openIndex === idx ? '▴' : '▾'}</span>
          </button>
          {openIndex === idx && (
            <ul className="pl-5 pb-2 text-sm list-disc space-y-1">
              {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}

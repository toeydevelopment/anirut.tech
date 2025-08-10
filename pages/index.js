import Head from 'next/head';
import NavBar from '../components/NavBar';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400                      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900                      text-gray-900 dark:text-gray-100">
      <Head>
        <title>Anirut Kamchai – Portfolio</title>
        <meta name="description" content="Portfolio of Anirut Kamchai – Senior Venture Architect, Tech Lead, Backend & Blockchain Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="pt-16">
        <About />
        <Resume />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <footer className="text-center py-6">
        <a href="/Anirut_Kamchai_Resume.pdf" download className="underline font-medium">
          Download Resume (PDF)
        </a>
      </footer>
    </div>
  );
}

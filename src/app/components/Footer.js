import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center py-4">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} color="#ffffff" />
      </a>
    </footer>
  );
}
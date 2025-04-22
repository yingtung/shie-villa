import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-white w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-white">歇 Villa民宿</p>
          <p className="text-white">雲林縣虎尾鎮新吉里155號</p>
          <p className="text-white">雲林縣民宿 102</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex space-x-4 mb-2">
            <a
              href="https://www.facebook.com/profile.php?id=61570093144442"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/shie_villa_2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
          <p className="text-white">
            © {new Date().getFullYear()} 歇Shie Villa民宿. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

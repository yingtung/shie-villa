import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-white absolute inset-x-0 bottom-0 flex space-x-16">
      <div>
        <p className="text-white">歇Shie Villa民宿</p>
        <p className="text-white">雲林縣虎尾鎮新吉里155號</p>
        <p className="text-white">雲林縣民宿 102</p>
      </div>
      <div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

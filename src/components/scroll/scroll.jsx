
import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from "react-icons/fa"

import "./index.scss" 

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica o scrol
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Adicionando um evento de scroll para monitorar a posição da página
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
           <a href="#top" className="scroll-to-top">
           <FaArrowCircleUp size={40} color='black'/>
         </a>
      )}
    </div>
  );  
}

export default ScrollToTopButton;

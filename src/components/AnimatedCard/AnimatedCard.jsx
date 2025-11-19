import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AnimatedWrapper = styled.div`
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transform: translateY(${({ isVisible }) => isVisible ? '0' : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${({ delay }) => delay}ms;
`;

function AnimatedCard({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Arrête l'observation après l'animation
        }
      },
      {
        threshold: 0.1, // Déclenche quand 10% de la carte est visible
        rootMargin: '0px 0px -50px 0px' // Déclenche un peu avant
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedWrapper ref={ref} isVisible={isVisible} delay={delay}>
      {children}
    </AnimatedWrapper>
  );
}

export default AnimatedCard;
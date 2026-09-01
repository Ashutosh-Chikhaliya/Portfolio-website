import { useEffect } from 'react';

/**
 * Observes all elements with class 'reveal' and adds 'visible'
 * when they enter the viewport.
 */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });
};

export default useScrollReveal;

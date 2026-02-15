/* ═══════════════════════════════════════════
   AI-Native Infrastructure Blueprint — Main
   ═══════════════════════════════════════════ */

import './style.css';
import mermaid from 'mermaid';

/* ── Mermaid Initialization (local npm, no CDN) ── */
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    darkMode: true,
    background: '#0E0E0E',
    mainBkg: '#1A1A1A',
    nodeBorder: '#333',
    clusterBkg: '#1A1A1A',
    clusterBorder: '#333',
    titleColor: '#E5E5E5',
    nodeTextColor: '#E5E5E5',
    textColor: '#E5E5E5',
    primaryColor: '#1A1A1A',
    primaryTextColor: '#E5E5E5',
    primaryBorderColor: '#333',
    secondaryColor: '#1a2a3d',
    secondaryTextColor: '#E5E5E5',
    secondaryBorderColor: '#4A90E2',
    tertiaryColor: '#2a2418',
    tertiaryTextColor: '#E5E5E5',
    tertiaryBorderColor: '#C8A96A',
    lineColor: '#555',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
  },
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
    padding: 16,
    nodeSpacing: 40,
    rankSpacing: 50,
  },
  securityLevel: 'loose',
});

/* ── Intersection Observer for fade-up on scroll ── */
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const sections = document.querySelectorAll('.fade-up');

    // Reset: hide all sections initially (CSS animation handles first paint)
    // For sections below the fold, use IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
});

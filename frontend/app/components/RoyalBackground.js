'use client';
import { useEffect, useRef } from 'react';

export default function RoyalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const createParticles = (e) => {
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: e ? e.clientX : Math.random() * canvas.width,
          y: e ? e.clientY : Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          opacity: 1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.01;
        ctx.fillStyle = `rgba(251, 191, 36, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        if (p.opacity <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', createParticles);
    animate();

    return () => {
      window.removeEventListener('mousemove', createParticles);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }} />;
}
export function fireConfetti() {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const colors = ['#6366f1', '#22d3ee', '#8b5cf6', '#f59e0b', '#10b981', '#ec4899', '#f8fafc'];

  const particles = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height * 0.4 + Math.random() * -canvas.height * 0.5,
    w: Math.random() * 11 + 4,
    h: Math.random() * 6 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 6,
    vy: -(Math.random() * 6 + 4),
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2,
    gravity: 0.18 + Math.random() * 0.1,
  }));

  const duration = 3200;
  let start = null;
  let frame;

  const animate = (ts) => {
    if (!start) start = ts;
    const elapsed = ts - start;
    const fadeRatio = Math.max(0, 1 - elapsed / duration);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.angle += p.spin;

      ctx.save();
      ctx.globalAlpha = fadeRatio * 0.95;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < duration) {
      frame = requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  };

  frame = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(frame);
    canvas.remove();
  };
}

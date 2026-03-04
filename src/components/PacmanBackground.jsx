import { useEffect, useRef } from "react";

export default function DuckBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 }); // שומר את מיקום העכבר

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let t = 0;
    let droplets = []; 

    const colors = {
      duck: "#FFEF00",
      beak: "#FF5733",
      glow: "rgba(250, 204, 21, 0.4)",
      droplet: "rgba(56, 189, 248, 0.4)",
      dots: ["#38bdf8", "#d946ef", "#10b981"]
    };

    // עדכון מיקום העכבר ביחס לקנבס
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    function createDroplet(x, y) {
      droplets.push({
        x: x - 15,
        y: y + 5 + (Math.random() - 0.5) * 10,
        vx: -Math.random() * 2,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 3 + 1,
        life: 1
      });
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const y = h / 2;
      const x = (t * 130) % (w + 200) - 100;
      const bobbing = Math.sin(t * 7) * 4;
      const duckY = y + bobbing;

      // חישוב הזווית בין הברווז לעכבר
      const dxMouse = mouseRef.current.x - x;
      const dyMouse = mouseRef.current.y - duckY;
      const angle = Math.atan2(dyMouse, dxMouse);

      // 1. שובל טיפות
      if (t % 0.05 < 0.02) createDroplet(x, duckY);
      
      droplets = droplets.filter(d => d.life > 0);
      droplets.forEach(d => {
        d.x += d.vx; d.y += d.vy; d.life -= 0.015;
        ctx.save();
        ctx.globalAlpha = d.life;
        ctx.fillStyle = colors.droplet;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 2. ציור הנקודות הצבעוניות
      const spacing = 25;
      for (let i = 0; i < Math.ceil(w / spacing) + 5; i++) {
        const dx = i * spacing;
        if (dx < x + 15) continue; 
        
        const color = colors.dots[i % 3];
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(dx, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. ציור הברווזון
      ctx.save();
      ctx.translate(x, duckY);
      ctx.shadowBlur = 20;
      ctx.shadowColor = colors.glow;

      // גוף
      ctx.fillStyle = colors.duck;
      ctx.beginPath();
      ctx.ellipse(-5, 5, 20, 15, 0, 0, Math.PI * 2);
      ctx.fill();

      // ראש - מסתובב מעט (0.2) לכיוון העכבר
      ctx.save();
      ctx.translate(12, -8);
      ctx.rotate(angle * 0.2); 
      ctx.beginPath();
      ctx.arc(0, 0, 11, 0, Math.PI * 2);
      ctx.fill();

      // עין שעוקבת אחרי העכבר
      const eyeOffset = 1.5;
      const eyeX = Math.cos(angle) * eyeOffset + 4;
      const eyeY = Math.sin(angle) * eyeOffset - 3;
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, 1.8, 0, Math.PI * 2);
      ctx.fill();

      // מקור - נפתח/נסגר ועוקב אחרי הזווית
      const beakOpen = Math.sin(t * 15) * 3;
      ctx.save();
      ctx.rotate(angle * 0.1); // סיבוב עדין למקור
      ctx.fillStyle = colors.beak;
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(20, -3 - beakOpen);
      ctx.lineTo(20, 3 + beakOpen);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.restore(); // סגירת translate ראש
      ctx.restore(); // סגירת translate ברווז כללי

      t += 1 / 60;
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full h-full" />;
}
import React, { useEffect, useRef } from 'react';

// CS Concepts data with URLs
const csConceptsData = [
  { name: "Web Dev", icon: "🌐", color: "#00ff88", url: "https://developer.mozilla.org/en-US/docs/Web" },
  { name: "Cloud", icon: "☁️", color: "#00aaff", url: "https://aws.amazon.com/what-is-cloud-computing/" },
  { name: "AI/ML", icon: "🧠", color: "#ff6b6b", url: "https://www.coursera.org/browse/data-science/machine-learning" },
  { name: "Cyber Sec", icon: "🛡️", color: "#ffd93d", url: "https://www.comptia.org/content/articles/what-is-cybersecurity" },
  { name: "Data Sci", icon: "📊", color: "#6c5ce7", url: "https://www.mastersindatascience.org/learning/what-is-data-science/" },
  { name: "Mobile", icon: "📱", color: "#a29bfe", url: "https://developer.android.com/" },
  { name: "Blockchain", icon: "⛓️", color: "#fd79a8", url: "https://www.investopedia.com/terms/b/blockchain.asp" },
  { name: "IoT", icon: "💡", color: "#00cec9", url: "https://www.oracle.com/internet-of-things/what-is-iot/" },
  { name: "DevOps", icon: "⚙️", color: "#e17055", url: "https://aws.amazon.com/devops/what-is-devops/" },
  { name: "Game Dev", icon: "🎮", color: "#00b894", url: "https://unity.com/solutions/game-development" },
  { name: "AR/VR", icon: "🥽", color: "#e84393", url: "https://www.qualcomm.com/research/extended-reality" },
  { name: "Quantum", icon: "⚛️", color: "#0984e3", url: "https://quantum-computing.ibm.com/" },
];

class Node {
  constructor(canvas, angle, initialCircleRadius, conceptData, canvasCenterX, canvasCenterY) {
    this.canvas = canvas;
    this.angle = angle;
    this.initialCircleRadius = initialCircleRadius;
    this.concept = conceptData;
    this.color = this.concept.color;
    this.canvasCenterX = canvasCenterX;
    this.canvasCenterY = canvasCenterY;

    this.nodeVisualRadius = 30;
    this.iconSizeMultiplier = 0.9;

    this.waveAmplitude = 15;
    this.waveSpeed = 0.015 + Math.random() * 0.01;
    this.wavePhase = Math.random() * Math.PI * 2;

    this.pulsePhaseNode = Math.random() * Math.PI * 2;
    this.pulseSpeedNode = 0.03;

    const currentDistFromCenter = this.initialCircleRadius + Math.sin(this.wavePhase) * this.waveAmplitude;
    this.x = this.canvasCenterX + Math.cos(this.angle) * currentDistFromCenter;
    this.y = this.canvasCenterY + Math.sin(this.angle) * currentDistFromCenter;
    
    this.connections = [];
    this.isHovered = false;
    this.clickable = true;
    this.rotationAngle = 0;
  }

  update(mouseRef) {
    this.wavePhase += this.waveSpeed;
    this.pulsePhaseNode += this.pulseSpeedNode;
    this.rotationAngle += 0.01;

    const currentDistFromCenter = this.initialCircleRadius + Math.sin(this.wavePhase) * this.waveAmplitude;
    this.x = this.canvasCenterX + Math.cos(this.angle) * currentDistFromCenter;
    this.y = this.canvasCenterY + Math.sin(this.angle) * currentDistFromCenter;

    const currentPulse = Math.sin(this.pulsePhaseNode) * 0.1 + 1;
    const currentActualVisualRadius = this.nodeVisualRadius * currentPulse;

    const mouseDistance = Math.sqrt(
      Math.pow(this.x - mouseRef.current.x, 2) + Math.pow(this.y - mouseRef.current.y, 2)
    );
    this.isHovered = mouseDistance < currentActualVisualRadius + 10;
  }

  draw(ctx) {
    const pulse = Math.sin(this.pulsePhaseNode) * 0.1 + 1;
    const currentVisualRadius = this.nodeVisualRadius * pulse;

    if (this.isHovered) {
      ctx.shadowBlur = 20;
      ctx.shadowColor = this.color;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotationAngle);
      ctx.beginPath();
      ctx.arc(0, 0, currentVisualRadius + 8, 0, Math.PI * 2);
      ctx.strokeStyle = `${this.color}90`;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();
    }

    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentVisualRadius, 0, Math.PI * 2);

    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentVisualRadius);
    gradient.addColorStop(0, `${this.color}50`);
    gradient.addColorStop(0.7, `${this.color}30`);
    gradient.addColorStop(1, `${this.color}15`);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, currentVisualRadius, 0, Math.PI * 2);
    ctx.strokeStyle = this.isHovered ? "#ffffff" : this.color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, currentVisualRadius * 0.75, 0, Math.PI * 2);
    ctx.fillStyle = `${this.color}40`;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, currentVisualRadius * 0.65, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fill();

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = this.isHovered ? "#ffffff" : this.color;
    ctx.font = `${currentVisualRadius * this.iconSizeMultiplier}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.concept.icon, 0, 0);
    ctx.restore();

    if (this.isHovered) {
      ctx.save();
      const textWidth = ctx.measureText(this.concept.name).width;
      ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
      ctx.fillRect(this.x - textWidth / 2 - 5, this.y + currentVisualRadius + 8, textWidth + 10, 20);
      ctx.fillStyle = "#ffffff";
      ctx.font = "11px Arial";
      ctx.textAlign = "center";
      ctx.fillText(this.concept.name, this.x, this.y + currentVisualRadius + 18);
      ctx.restore();
    }
    ctx.shadowBlur = 0;
  }

  drawConnections(ctx) {
    this.connections.forEach((node) => {
      const distance = Math.sqrt(Math.pow(this.x - node.x, 2) + Math.pow(this.y - node.y, 2));
      const maxConnectionDistance = this.initialCircleRadius * Math.sin((2 * Math.PI) / (csConceptsData.length / 2)) * 1.2;

      if (distance < maxConnectionDistance * 1.5) {
        const opacity = Math.max(0, 1 - distance / (maxConnectionDistance * 1.5));

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(node.x, node.y);
        const gradient = ctx.createLinearGradient(this.x, this.y, node.x, node.y);
        gradient.addColorStop(0,`${this.color}${Math.floor(opacity * 150).toString(16).padStart(2, "0")}`);
        gradient.addColorStop(1,`${node.color}${Math.floor(opacity * 150).toString(16).padStart(2, "0")}`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const packetCount = 2;
        for (let i = 0; i < packetCount; i++) {
          const offset = i / packetCount;
          const time = Date.now() * 0.0005 + this.angle * 10;
          const packetProgress = (Math.sin(time + offset * Math.PI * 2 + this.x * 0.01) * 0.45 + 0.5);
          
          const packetX = this.x + (node.x - this.x) * packetProgress;
          const packetY = this.y + (node.y - this.y) * packetProgress;

          ctx.beginPath();
          ctx.arc(packetX, packetY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `black`;    
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    });
  }
}

const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    const initNodes = () => {
      nodesRef.current = [];
      const nodeCount = csConceptsData.length;

      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;
      const baseCircleRadius = Math.min(canvasWidth, canvasHeight) * 0.35;

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const concept = csConceptsData[i];
        const node = new Node(canvas, angle, baseCircleRadius, concept, canvasCenterX, canvasCenterY);
        nodesRef.current.push(node);
      }

      // Setup connections: each node connects to 2 neighbors on each side
      nodesRef.current.forEach((node, i) => {
        node.connections = [];
        const neighborOffsets = [-2, -1, 1, 2];
        
        neighborOffsets.forEach(offset => {
          const neighborIndex = (i + offset + nodeCount) % nodeCount;
          if (i !== neighborIndex) {
            const neighborNode = nodesRef.current[neighborIndex];
            if (!node.connections.includes(neighborNode)) {
              node.connections.push(neighborNode);
            }
          }
        });
      });
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      nodesRef.current.forEach(node => node.update(mouseRef));
      nodesRef.current.forEach(node => node.drawConnections(ctx));
      nodesRef.current.forEach(node => node.draw(ctx));
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      nodesRef.current.forEach((node) => {
        const pulse = Math.sin(node.pulsePhaseNode) * 0.1 + 1;
        const currentClickableRadius = node.nodeVisualRadius * pulse;
        const distance = Math.sqrt(Math.pow(node.x - clickX, 2) + Math.pow(node.y - clickY, 2));

        if (distance < currentClickableRadius + 5 && node.clickable) {
          // Open URL if available
          if (node.concept.url) {
            window.open(node.concept.url, '_blank');
          }

          const ripple = {
            x: node.x,
            y: node.y,
            radius: currentClickableRadius * 0.5,
            maxRadius: currentClickableRadius + 30,
            opacity: 0.8,
            color: node.color,
          };

          const animateRipple = () => {
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            const r = parseInt(ripple.color.slice(1,3),16);
            const g = parseInt(ripple.color.slice(3,5),16);
            const b = parseInt(ripple.color.slice(5,7),16);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${ripple.opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            ripple.radius += 1;
            ripple.opacity -= 0.02;

            if (ripple.opacity > 0 && ripple.radius < ripple.maxRadius) {
              requestAnimationFrame(animateRipple);
            }
          };
          animateRipple();
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen cursor-pointer"
      style={{
        marginTop: "2rem", 
        background: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        pointerEvents: 'auto'
      }}
    />
  );
};

export default NetworkAnimation;

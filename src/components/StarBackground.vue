<template>
  <div class="stars-container">
    <canvas ref="canvasRef" class="stars-canvas"></canvas>
    <div class="nebula nebula-1"></div>
    <div class="nebula nebula-2"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvasRef = ref(null);
let animationFrameId = null;

const STAR_COUNT = 150;
let stars = [];

class Star {
  constructor(width, height) {
    this.reset(width, height, true);
  }

  reset(width, height, initial = false) {
    this.x = Math.random() * width;
    this.y = initial ? Math.random() * height : height + 10;
    this.size = Math.random() * 1.5 + 0.5;
    this.speed = Math.random() * 0.15 + 0.05;
    this.opacity = Math.random() * 0.7 + 0.3;
    this.twinkleSpeed = Math.random() * 0.02 + 0.005;
    this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
  }

  update(width, height) {
    // Slowly drift upwards
    this.y -= this.speed;
    
    // Twinkle effect (change opacity)
    this.opacity += this.twinkleSpeed * this.twinkleDirection;
    if (this.opacity >= 1) {
      this.opacity = 1;
      this.twinkleDirection = -1;
    } else if (this.opacity <= 0.2) {
      this.opacity = 0.2;
      this.twinkleDirection = 1;
    }

    // Reset if it goes off screen
    if (this.y < -10 || this.x < 0 || this.x > width) {
      this.reset(width, height);
    }
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const handleResize = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const animate = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Initialize stars if needed
  if (stars.length === 0) {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }
  }

  // Update and draw stars
  stars.forEach((star) => {
    star.update(canvas.width, canvas.height);
    star.draw(ctx);
  });

  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
.stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
}

.stars-canvas {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* Deep Space Glowing Nebulae */
.nebula {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  pointer-events: none;
}

.nebula-1 {
  top: -10%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
  animation: pulseGlow 15s infinite ease-in-out;
}

.nebula-2 {
  bottom: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%);
  animation: pulseGlow 20s infinite ease-in-out;
}
</style>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="name">{{ t('hero.name') }}</span>
          <span class="role gradient-text-primary">{{ t('hero.role') }}</span>
        </h1>
        <p class="hero-description">
          {{ t('hero.description') }}
        </p>
        
        <div class="hero-cta">
          <a href="#projects" class="btn-primary" @click="scrollToSection($event, 'projects')">
            {{ t('hero.viewProjects') }} <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#contact" class="btn-secondary" @click="scrollToSection($event, 'contact')">
            {{ t('hero.contactMe') }} <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      <!-- Professional Code Window Mockup -->
      <div class="hero-visual">
        <div class="code-window glass-panel">
          <div class="code-header">
            <span class="code-dot red"></span>
            <span class="code-dot yellow"></span>
            <span class="code-dot green"></span>
            <span class="file-name">developer.json</span>
          </div>
          <div class="code-body">
            <pre class="code-content"><code>{
  <span class="code-key">"name"</span>: <span class="code-val">"Nguyễn Việt Anh"</span>,
  <span class="code-key">"role"</span>: <span class="code-val">"Fullstack Developer"</span>,
  <span class="code-key">"experience"</span>: <span class="code-val">"3+ Years"</span>,
  <span class="code-key">"backend"</span>: [
    <span class="code-val">"PHP (Laravel / Yii2)"</span>,
    <span class="code-val">"Node.js (NestJS / Express)"</span>
  ],
  <span class="code-key">"frontend"</span>: [
    <span class="code-val">"VueJS 3"</span>,
    <span class="code-val">"JS / TS"</span>
  ],
  <span class="code-key">"devops"</span>: [
    <span class="code-val">"Docker"</span>,
    <span class="code-val">"Nginx"</span>,
    <span class="code-val">"Linux"</span>
  ],
  <span class="code-key">"availability"</span>: <span class="code-val">"Open to new challenges"</span>
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Dashboard -->
    <div class="stats-container glass-panel">
      <div class="stat-item">
        <span class="stat-num">3+</span>
        <span class="stat-label">{{ t('hero.expYears') }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">8+</span>
        <span class="stat-label">{{ t('hero.completedPrjs') }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">10+</span>
        <span class="stat-label">{{ t('hero.skillsMastered') }}</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-num">99%</span>
        <span class="stat-label">{{ t('hero.sysAvailability') }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();

const scrollToSection = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: 140px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 4rem;
  width: 100%;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.greeting-badge {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hero-title .name {
  color: var(--text-primary);
}

.hero-title .role {
  font-size: 3rem;
  font-weight: 800;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

/* Cosmic Visual Animation */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Code Window Mockup */
.code-window {
  width: 100%;
  max-width: 440px;
  background: rgba(11, 15, 25, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(16, 185, 129, 0.05);
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  transition: var(--transition-smooth);
}

.code-window:hover {
  transform: translateY(-5px) scale(1.02);
  border-color: rgba(6, 182, 212, 0.3);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.6), 0 0 50px rgba(6, 182, 212, 0.15);
}

.code-header {
  background: rgba(3, 7, 18, 0.5);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.code-dot.red { background: #ef4444; }
.code-dot.yellow { background: #f59e0b; }
.code-dot.green { background: #10b981; }

.file-name {
  margin-left: 10px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-family: var(--font-body);
}

.code-body {
  padding: 20px;
  font-size: 0.85rem;
  text-align: left;
  line-height: 1.5;
  overflow-x: auto;
}

.code-content {
  margin: 0;
}

.code-key {
  color: #60a5fa; /* Blue */
}

.code-val {
  color: #34d399; /* Emerald Green */
}

/* Stats Dashboard styling */
.stats-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-top: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-num {
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
}

@keyframes spin {
  from {
    transform: rotate(0deg) rotateX(70deg);
  }
  to {
    transform: rotate(360deg) rotateX(70deg);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero-text {
    align-items: center;
  }
  
  .hero-visual {
    order: -1;
  }
  
  .stats-container {
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .stat-item {
    flex: 1 1 40%;
  }
  
  .stat-divider {
    display: none;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-title .role {
    font-size: 2.2rem;
  }
  
  .hero-cta {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-cta a {
    justify-content: center;
  }
  
  .stat-item {
    flex: 1 1 100%;
  }
}
</style>

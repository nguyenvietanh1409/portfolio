<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-text">
        <span class="greeting-badge">{{ t('hero.greeting') }}</span>
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

      <!-- Cosmic visual animation (glowing planet & orbits) -->
      <div class="hero-visual">
        <div class="cosmic-sphere">
          <div class="planet"></div>
          <div class="orbit orbit-1">
            <div class="satellite sat-1"></div>
          </div>
          <div class="orbit orbit-2">
            <div class="satellite sat-2"></div>
          </div>
          <div class="orbit orbit-3">
            <div class="satellite sat-3"></div>
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

.cosmic-sphere {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.planet {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffffff 0%, #525252 70%, #000000 100%);
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), inset -10px -10px 30px rgba(0, 0, 0, 0.9);
  z-index: 5;
  animation: float 6s infinite ease-in-out;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(75deg);
  transform-style: preserve-3d;
}

.orbit-1 {
  width: 180px;
  height: 180px;
  animation: spin 10s linear infinite;
}

.orbit-2 {
  width: 240px;
  height: 240px;
  animation: spin 15s linear infinite reverse;
}

.orbit-3 {
  width: 320px;
  height: 320px;
  animation: spin 22s linear infinite;
}

.satellite {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translateZ(0);
}

.sat-1 {
  background: #ffffff;
  top: 0;
  box-shadow: 0 0 10px #ffffff;
}

.sat-2 {
  background: #cccccc;
  left: 0;
  box-shadow: 0 0 10px #cccccc;
}

.sat-3 {
  background: #888888;
  right: 0;
  box-shadow: 0 0 10px #888888;
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
  background: linear-gradient(135deg, #ffffff, #a3a3a3);
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

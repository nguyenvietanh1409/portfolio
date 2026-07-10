<template>
  <section id="experience" class="experience-section">
    <div class="section-header">
      <span class="section-tagline">{{ t('experience.tagline') }}</span>
      <h2>{{ t('experience.title') }}</h2>
      <p>{{ t('experience.subtitle') }}</p>
    </div>

    <div class="timeline">
      <div class="timeline-line"></div>
      
      <!-- Experience Item: Unica JSC -->
      <div class="timeline-item left">
        <div class="timeline-dot dot-primary"></div>
        <div class="timeline-content glass-panel">
          <div class="card-header">
            <span class="company"><i class="fa-solid fa-building"></i> {{ t('experience.unica.company') }}</span>
            <span class="duration">02/2024 - {{ t('experience.present') }}</span>
          </div>
          <h3 class="role">{{ t('experience.unica.role') }}</h3>
          <p class="desc">{{ t('experience.unica.desc') }}</p>
          <ul class="duties">
            <li v-for="(duty, idx) in t('experience.unica.duties')" :key="idx">
              {{ duty }}
            </li>
          </ul>
          <div class="tech-stack">
            <span class="badge">NestJS</span>
            <span class="badge">Laravel</span>
            <span class="badge">Yii2</span>
            <span class="badge">VueJS</span>
            <span class="badge">MySQL</span>
            <span class="badge">Redis</span>
            <span class="badge">RabbitMQ</span>
            <span class="badge">Docker</span>
          </div>
        </div>
      </div>

      <!-- Experience Item: MKT Solutions JSC -->
      <div class="timeline-item right">
        <div class="timeline-dot dot-secondary"></div>
        <div class="timeline-content glass-panel">
          <div class="card-header">
            <span class="company"><i class="fa-solid fa-building"></i> {{ t('experience.mkt.company') }}</span>
            <span class="duration">06/2023 - 01/2024</span>
          </div>
          <h3 class="role">{{ t('experience.mkt.role') }}</h3>
          <p class="desc">{{ t('experience.mkt.desc') }}</p>
          <ul class="duties">
            <li v-for="(duty, idx) in t('experience.mkt.duties')" :key="idx">
              {{ duty }}
            </li>
          </ul>
          <div class="tech-stack">
            <span class="badge">Laravel</span>
            <span class="badge">VueJS</span>
            <span class="badge">MySQL</span>
            <span class="badge">Redis</span>
            <span class="badge">RabbitMQ</span>
            <span class="badge">Docker</span>
            <span class="badge">Linux</span>
            <span class="badge">RESTful API</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
</script>

<style scoped>
.experience-section {
  min-height: auto;
  position: relative;
}

.section-tagline {
  display: inline-block;
  color: var(--color-primary);
  font-family: var(--font-title);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

/* Timeline Layout */
.timeline {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-line {
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary), rgba(255,255,255,0));
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 30px;
  margin-bottom: 3.5rem;
  z-index: 2;
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 50%;
}

/* Dots on timeline */
.timeline-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 24px;
  z-index: 3;
}

.left .timeline-dot {
  right: -8px;
}

.right .timeline-dot {
  left: -8px;
}

.dot-primary {
  background: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary);
}

.dot-secondary {
  background: var(--color-secondary);
  box-shadow: 0 0 10px var(--color-secondary);
}

/* Timeline Cards */
.timeline-content {
  padding: 2.2rem;
  position: relative;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.company {
  font-family: var(--font-title);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.right .company {
  color: var(--color-secondary);
}

.duration {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.role {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.duties {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.duties li {
  color: var(--text-secondary);
  font-size: 0.9rem;
  position: relative;
  padding-left: 20px;
  line-height: 1.5;
}

.duties li::before {
  content: '✦';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-primary);
  font-size: 0.8rem;
}

.right .duties li::before {
  color: var(--color-secondary);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline {
    padding: 2rem 0.5rem;
  }

  .timeline-line {
    left: 16px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 36px;
    padding-right: 0.5rem;
  }
  
  .timeline-item.right {
    left: 0;
  }
  
  .timeline-dot {
    left: 0 !important;
  }
  
  .left .timeline-dot {
    right: auto;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 576px) {
  .timeline-content {
    padding: 1.5rem;
  }
  
  .role {
    font-size: 1.2rem;
  }
}
</style>

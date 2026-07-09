<template>
  <section id="skills" class="skills-section">
    <div class="section-header">
      <span class="section-tagline">{{ t('skills.tagline') }}</span>
      <h2>{{ t('skills.title') }}</h2>
      <p>{{ t('skills.subtitle') }}</p>
    </div>

    <!-- Skills Categories Grid -->
    <div class="skills-grid">
      <div 
        v-for="cat in localizedCategories" 
        :key="cat.name" 
        class="skill-card glass-panel"
      >
        <div class="category-header">
          <div class="cat-icon" :style="{ color: cat.color, background: cat.bg }">
            <i :class="cat.icon"></i>
          </div>
          <h3>{{ cat.name }}</h3>
        </div>

        <div class="skills-tags">
          <div 
            v-for="skill in cat.skills" 
            :key="skill" 
            class="skill-tag"
            :style="{
              '--hover-border': cat.color,
              '--hover-glow': 'rgba(' + cat.rgb + ', 0.15)',
              '--hover-text': cat.color
            }"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t, locale } = useI18n();

const localizedCategories = computed(() => {
  const isVi = locale.value === 'vi';
  
  return [
    {
      name: isVi ? 'Lập trình Backend' : 'Backend Development',
      icon: 'fa-solid fa-server',
      color: '#10b981', // Emerald Green
      rgb: '16, 185, 129',
      bg: 'rgba(16, 185, 129, 0.1)',
      skills: [
        'PHP (Laravel / Yii2)',
        'Node.js (NestJS / Express)',
        'RESTful API Design',
        'OOP & MVC Architecture'
      ]
    },
    {
      name: isVi ? 'Lập trình Frontend' : 'Frontend Development',
      icon: 'fa-solid fa-code',
      color: '#06b6d4', // Cyan
      rgb: '6, 182, 212',
      bg: 'rgba(6, 182, 212, 0.1)',
      skills: [
        'Vue.js 3 (Composition API)',
        'JavaScript / TypeScript',
        'HTML5 & CSS3 (Vanilla / Flexbox)',
        'AJAX / JSON / WebSocket'
      ]
    },
    {
      name: isVi ? 'Cơ sở dữ liệu & Caching' : 'Databases & Caching',
      icon: 'fa-solid fa-database',
      color: '#6366f1', // Indigo
      rgb: '99, 102, 241',
      bg: 'rgba(99, 102, 241, 0.1)',
      skills: [
        'MySQL (Query Tuning & Indexes)',
        'MongoDB (NoSQL)',
        'Redis (Caching Layers)',
        'RabbitMQ (Message Queues)'
      ]
    },
    {
      name: isVi ? 'DevOps & Hạ tầng' : 'DevOps & Infrastructure',
      icon: 'fa-solid fa-gears',
      color: '#0ea5e9', // Sky Blue
      rgb: '14, 165, 233',
      bg: 'rgba(14, 165, 233, 0.1)',
      skills: [
        'Git / GitHub / GitLab',
        'Docker Containerization',
        'Linux Server (Ubuntu / Centos)',
        'Nginx Configuration & SSL'
      ]
    }
  ];
});
</script>

<style scoped>
.skills-section {
  min-height: auto;
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

/* Skills Categories Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.skill-card {
  padding: 2.2rem;
  transition: transform 0.4s ease, border-color 0.4s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.1);
}

.skill-card:nth-child(2):hover {
  border-color: rgba(6, 182, 212, 0.3);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.1);
}

.skill-card:nth-child(3):hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
}

.skill-card:nth-child(4):hover {
  border-color: rgba(14, 165, 233, 0.3);
  box-shadow: 0 10px 30px rgba(14, 165, 233, 0.1);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.cat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.category-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
}

/* Skills Tags Cloud */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition-fast);
  cursor: default;
}

.skill-tag:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--hover-text);
  border-color: var(--hover-border);
  box-shadow: 0 4px 20px var(--hover-glow);
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .skill-card {
    padding: 1.5rem;
  }
  
  .category-header {
    margin-bottom: 1.5rem;
  }
  
  .category-header h3 {
    font-size: 1.15rem;
  }
  
  .skills-tags {
    gap: 0.5rem;
  }
  
  .skill-tag {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
}
</style>

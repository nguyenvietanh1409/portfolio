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

        <div class="skills-list">
          <div 
            v-for="skill in cat.skills" 
            :key="skill.name" 
            class="skill-item"
          >
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percentage">{{ skill.level }}%</span>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: skill.level + '%', background: cat.color }"
              ></div>
            </div>
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
      bg: 'rgba(16, 185, 129, 0.1)',
      skills: [
        { name: 'PHP (Laravel / Yii2)', level: 90 },
        { name: 'Node.js (NestJS / Express)', level: 85 },
        { name: 'RESTful API Design', level: 90 },
        { name: 'OOP & MVC Architecture', level: 85 }
      ]
    },
    {
      name: isVi ? 'Lập trình Frontend' : 'Frontend Development',
      icon: 'fa-solid fa-code',
      color: '#06b6d4', // Cyan
      bg: 'rgba(6, 182, 212, 0.1)',
      skills: [
        { name: 'Vue.js 3 (Composition API)', level: 80 },
        { name: 'JavaScript / TypeScript', level: 85 },
        { name: 'HTML5 & CSS3 (Vanilla / Flexbox)', level: 90 },
        { name: 'AJAX / JSON / WebSocket', level: 85 }
      ]
    },
    {
      name: isVi ? 'Cơ sở dữ liệu & Caching' : 'Databases & Caching',
      icon: 'fa-solid fa-database',
      color: '#6366f1', // Indigo
      bg: 'rgba(99, 102, 241, 0.1)',
      skills: [
        { name: 'MySQL (Query Tuning & Indexes)', level: 85 },
        { name: 'MongoDB (NoSQL)', level: 80 },
        { name: 'Redis (Caching Layers)', level: 80 },
        { name: 'RabbitMQ (Message Queues)', level: 75 }
      ]
    },
    {
      name: isVi ? 'DevOps & Hạ tầng' : 'DevOps & Infrastructure',
      icon: 'fa-solid fa-gears',
      color: '#0ea5e9', // Sky Blue
      bg: 'rgba(14, 165, 233, 0.1)',
      skills: [
        { name: 'Git / GitHub / GitLab', level: 90 },
        { name: 'Docker Containerization', level: 75 },
        { name: 'Linux Server (Ubuntu / Centos)', level: 80 },
        { name: 'Nginx Configuration & SSL', level: 80 }
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

/* Skills Lists */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.skill-percentage {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

/* Progress bar container */
.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
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
}
</style>

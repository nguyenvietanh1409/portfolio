<template>
  <section id="projects" class="projects-section">
    <div class="section-header">
      <span class="section-tagline">{{ t('projects.tagline') }}</span>
      <h2>{{ t('projects.title') }}</h2>
      <p>{{ t('projects.subtitle') }}</p>
    </div>

    <!-- Project Filter / Tabs -->
    <div class="project-filters">
      <button 
        v-for="cat in categories" 
        :key="cat.value" 
        class="filter-btn" 
        :class="{ active: currentFilter === cat.value }"
        @click="currentFilter = cat.value"
      >
        {{ t(cat.labelKey) }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id" 
        class="project-card glass-panel"
      >
        <!-- Card Header -->
        <div class="project-header">
          <div class="title-wrap">
            <h3>{{ project.title }}</h3>
            <span class="project-period">{{ project.period }}</span>
          </div>
          <a 
            v-if="project.domain" 
            :href="project.domain" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="domain-link"
            :title="t('projects.visitWeb')"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        <!-- Project Tab Navigation -->
        <div class="card-tabs">
          <button 
            class="tab-btn" 
            :class="{ active: project.activeTab === 'overview' }"
            @click="setTab(project.id, 'overview')"
          >
            {{ t('projects.tabOverview') }}
          </button>
          <button 
            class="tab-btn" 
            :class="{ active: project.activeTab === 'stack' }"
            @click="setTab(project.id, 'stack')"
          >
            {{ t('projects.tabTech') }}
          </button>
          <button 
            class="tab-btn" 
            :class="{ active: project.activeTab === 'duties' }"
            @click="setTab(project.id, 'duties')"
          >
            {{ t('projects.tabDuties') }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content">
          <!-- Overview Tab -->
          <div v-if="project.activeTab === 'overview'" class="tab-pane fade-in">
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-meta">
              <div class="meta-item">
                <span class="meta-label">{{ t('projects.teamSizeLabel') }}</span>
                <span class="meta-val">{{ project.teamSize }} {{ t('projects.teamSizeVal') }}</span>
              </div>
              <div class="meta-item" v-if="project.domain">
                <span class="meta-label">{{ t('projects.webLabel') }}</span>
                <span class="meta-val">
                  <a :href="project.domain" target="_blank" class="text-link">
                    {{ project.domain.replace('https://', '') }}
                  </a>
                </span>
              </div>
            </div>
          </div>

          <!-- Technologies Tab -->
          <div v-if="project.activeTab === 'stack'" class="tab-pane fade-in">
            <div class="tech-badges">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="badge tech-badge"
              >
                {{ tech }}
              </span>
            </div>
            <!-- Technical details representation -->
            <div class="tech-details" v-if="project.techDetails && project.techDetails.length">
              <p class="tech-detail-title">
                <i class="fa-solid fa-circle-info"></i> {{ t('projects.techHighlights') }}
              </p>
              <ul class="tech-detail-list">
                <li v-for="detail in project.techDetails" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>

          <!-- Duties Tab -->
          <div v-if="project.activeTab === 'duties'" class="tab-pane fade-in">
            <ul class="duties-list">
              <li v-for="(duty, idx) in project.duties" :key="idx">
                {{ duty }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t, locale } = useI18n();

const categories = [
  { labelKey: 'projects.filterAll', value: 'all' },
  { labelKey: 'projects.filterEdtech', value: 'edtech' },
  { labelKey: 'projects.filterAffiliate', value: 'affiliate' }
];

const currentFilter = ref('all');

// Reactive active tab state for each project
const activeTabs = ref({
  'affiliate-unica': 'overview',
  'id-quiz': 'overview',
  'edubit-me': 'overview',
  'unica-expert': 'overview',
  'edubit': 'overview',
  'unica-lms': 'overview',
  'mkt-affiliate': 'overview',
  'vshop': 'overview'
});

const setTab = (projectId, tabName) => {
  activeTabs.value[projectId] = tabName;
};

const projectsData = computed(() => {
  const isVi = locale.value === 'vi';
  
  return [
    {
      id: 'affiliate-unica',
      period: isVi ? '10/2025 - Hiện tại' : '10/2025 - Present',
      domain: 'https://affiliate.unica.vn',
      teamSize: 4,
      category: 'affiliate',
      technologies: ['NestJS', 'VueJS', 'MySQL', 'Redis', 'RabbitMQ'],
      activeTab: activeTabs.value['affiliate-unica'],
      title: t('projects.list.affiliateUnica.title'),
      description: t('projects.list.affiliateUnica.description'),
      techDetails: t('projects.list.affiliateUnica.techDetails'),
      duties: t('projects.list.affiliateUnica.duties')
    },
    {
      id: 'id-quiz',
      period: isVi ? '06/2025 - Hiện tại' : '06/2025 - Present',
      domain: 'https://idquiz.vn',
      teamSize: 3,
      category: 'edtech',
      technologies: ['Laravel', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
      activeTab: activeTabs.value['id-quiz'],
      title: t('projects.list.idQuiz.title'),
      description: t('projects.list.idQuiz.description'),
      techDetails: t('projects.list.idQuiz.techDetails'),
      duties: t('projects.list.idQuiz.duties')
    },
    {
      id: 'edubit-me',
      period: '08/2024 - 04/2025',
      domain: 'https://edubit.me',
      teamSize: 5,
      category: 'edtech',
      technologies: ['NestJS', 'WebSocket', 'JavaScript', 'TypeScript', 'MongoDB'],
      activeTab: activeTabs.value['edubit-me'],
      title: t('projects.list.edubitMe.title'),
      description: t('projects.list.edubitMe.description'),
      techDetails: t('projects.list.edubitMe.techDetails'),
      duties: t('projects.list.edubitMe.duties')
    },
    {
      id: 'unica-expert',
      period: '06/2024 - 10/2024',
      domain: 'https://unica.expert',
      teamSize: 6,
      category: 'edtech',
      technologies: ['VueJS', 'NestJS', 'REST API', 'Redis', 'MongoDB'],
      activeTab: activeTabs.value['unica-expert'],
      title: t('projects.list.unicaExpert.title'),
      description: t('projects.list.unicaExpert.description'),
      techDetails: t('projects.list.unicaExpert.techDetails'),
      duties: t('projects.list.unicaExpert.duties')
    },
    {
      id: 'edubit',
      period: '08/2024 - 12/2024',
      domain: 'https://edubit.vn',
      teamSize: 6,
      category: 'edtech',
      technologies: ['PHP', 'XTemplate', 'MongoDB', 'HTML/CSS', 'jQuery'],
      activeTab: activeTabs.value['edubit'],
      title: t('projects.list.edubit.title'),
      description: t('projects.list.edubit.description'),
      techDetails: t('projects.list.edubit.techDetails'),
      duties: t('projects.list.edubit.duties')
    },
    {
      id: 'unica-lms',
      period: isVi ? '02/2024 - Hiện tại' : '02/2024 - Present',
      domain: 'https://unica.vn',
      teamSize: 4,
      category: 'edtech',
      technologies: ['PHP', 'Yii2', 'MySQL', 'HTML/CSS', 'jQuery'],
      activeTab: activeTabs.value['unica-lms'],
      title: t('projects.list.unica.title'),
      description: t('projects.list.unica.description'),
      techDetails: t('projects.list.unica.techDetails'),
      duties: t('projects.list.unica.duties')
    },
    {
      id: 'mkt-affiliate',
      period: '09/2023 - 01/2024',
      domain: '',
      teamSize: 5,
      category: 'affiliate',
      technologies: ['Laravel', 'MySQL', 'Redis', 'RabbitMQ', 'Docker'],
      activeTab: activeTabs.value['mkt-affiliate'],
      title: t('projects.list.mktAffiliate.title'),
      description: t('projects.list.mktAffiliate.description'),
      techDetails: t('projects.list.mktAffiliate.techDetails'),
      duties: t('projects.list.mktAffiliate.duties')
    },
    {
      id: 'vshop',
      period: '06/2023 - 11/2023',
      domain: '',
      teamSize: 6,
      category: 'affiliate',
      technologies: ['Laravel', 'VueJS', 'MySQL', 'Redis', 'Docker'],
      activeTab: activeTabs.value['vshop'],
      title: t('projects.list.vshop.title'),
      description: t('projects.list.vshop.description'),
      techDetails: t('projects.list.vshop.techDetails'),
      duties: t('projects.list.vshop.duties')
    }
  ];
});

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') {
    return projectsData.value;
  }
  return projectsData.value.filter(p => p.category === currentFilter.value);
});
</script>

<style scoped>
.projects-section {
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

/* Category Filters */
.project-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  padding: 10px 22px;
  border-radius: 25px;
  font-family: var(--font-title);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

.filter-btn.active {
  background: linear-gradient(90deg, var(--color-primary), var(--color-tertiary));
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
}

.project-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 380px; /* fixed height for alignment */
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.title-wrap h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
}

.project-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  display: inline-block;
  margin-top: 0.25rem;
}

.domain-link {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: var(--transition-smooth);
}

.domain-link:hover {
  background: var(--color-primary);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
}

/* Card Tabs */
.card-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1.25rem;
  gap: 1rem;
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 8px 4px;
  cursor: pointer;
  position: relative;
  transition: var(--transition-fast);
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: var(--transition-fast);
}

.tab-btn.active {
  color: var(--color-primary);
}

.tab-btn.active::after {
  width: 100%;
}

/* Tab Content */
.tab-content {
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.05) transparent;
}

.tab-content::-webkit-scrollbar {
  width: 4px;
}

.tab-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
}

.tab-pane {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  padding-top: 0.75rem;
  margin-top: auto;
}

.meta-item {
  display: flex;
  gap: 8px;
  font-size: 0.9rem;
}

.meta-label {
  color: var(--text-muted);
  font-weight: 500;
}

.meta-val {
  color: var(--text-primary);
  font-weight: 600;
}

.text-link {
  color: var(--color-primary);
}

.text-link:hover {
  text-decoration: underline;
}

/* Tech Tab content */
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-badge {
  font-size: 0.8rem;
  padding: 4px 10px;
}

.tech-details {
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  padding-top: 0.75rem;
}

.tech-detail-title {
  font-size: 0.85rem;
  color: var(--color-secondary);
  font-weight: 600;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tech-detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.tech-detail-list li {
  font-size: 0.85rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 12px;
  line-height: 1.4;
}

.tech-detail-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--text-muted);
}

/* Duties Tab content */
.duties-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.duties-list li {
  font-size: 0.9rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 18px;
  line-height: 1.5;
}

.duties-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-primary);
}

/* Animations */
.fade-in {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    height: auto;
    min-height: 380px;
  }
}

@media (max-width: 576px) {
  .project-filters {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .filter-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  .project-card {
    padding: 1.25rem;
  }
  
  .title-wrap h3 {
    font-size: 1.15rem;
  }
}
</style>

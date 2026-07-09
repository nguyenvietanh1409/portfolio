<template>
  <section id="about" class="about-section">
    <div class="section-header">
      <span class="section-tagline">{{ t('about.tagline') }}</span>
      <h2>{{ t('about.title') }}</h2>
      <p>{{ t('about.subtitle') }}</p>
    </div>

    <div class="about-content">
      <!-- Biography & Philosophy -->
      <div class="bio-text glass-panel">
        <h3>{{ t('about.whoAmI') }}</h3>
        <p v-html="t('about.bioParagraph1')"></p>
        <p>{{ t('about.bioParagraph2') }}</p>
        
        <div class="philosophy">
          <i class="fa-solid fa-quote-left quote-icon"></i>
          <p class="philosophy-quote">
            "{{ t('about.quote') }}"
          </p>
        </div>
      </div>

      <!-- Quick Profile Details & Education -->
      <div class="profile-details">
        <!-- Personal info -->
        <div class="info-card glass-panel">
          <h3>{{ t('about.personalInfo') }}</h3>
          <div class="info-list">
            <div class="info-item">
              <span class="label"><i class="fa-regular fa-user"></i> {{ t('about.fullNameLabel') }}</span>
              <span class="val">{{ t('hero.name') }}</span>
            </div>
            <div class="info-item">
              <span class="label"><i class="fa-regular fa-envelope"></i> {{ t('about.emailLabel') }}</span>
              <span class="val"><a href="mailto:vietanh20030914@gmail.com">vietanh20030914@gmail.com</a></span>
            </div>
            <div class="info-item">
              <span class="label"><i class="fa-solid fa-phone"></i> {{ t('about.phoneLabel') }}</span>
              <span class="val"><a href="tel:0325174809">0325174809</a></span>
            </div>
            <div class="info-item">
              <span class="label"><i class="fa-solid fa-location-dot"></i> {{ t('about.locationLabel') }}</span>
              <span class="val">{{ t('about.locationVal') }}</span>
            </div>
          </div>
        </div>

        <!-- Education Card -->
        <div class="education-card glass-panel">
          <h3>{{ t('about.education') }}</h3>
          <div class="edu-item">
            <div class="edu-header">
              <span class="school">{{ t('about.school') }}</span>
              <span class="period">2021 - 2023</span>
            </div>
            <p class="major">{{ t('about.major') }}</p>
            <p class="desc">{{ t('about.eduDesc') }}</p>
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
.about-section {
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

.about-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: start;
}

.bio-text {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.bio-text h3 {
  font-size: 1.6rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.bio-text p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
}

.philosophy {
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #ffffff;
  padding: 1.25rem;
  border-radius: 0 12px 12px 0;
  margin-top: 1rem;
}

.quote-icon {
  font-size: 1.5rem;
  color: #ffffff;
  opacity: 0.6;
}

.philosophy-quote {
  font-style: italic;
  font-size: 1rem !important;
  color: var(--text-primary) !important;
  line-height: 1.5 !important;
}

/* Sidebar Profile & Education details */
.profile-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card, .education-card {
  padding: 2rem;
}

.info-card h3, .education-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 0.75rem;
  color: var(--text-primary);
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
}

.info-item .label {
  color: var(--text-secondary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-item .val {
  color: var(--text-primary);
  font-weight: 600;
}

.info-item .val a {
  color: var(--color-primary);
}

.info-item .val a:hover {
  text-decoration: underline;
}

/* Education detail cards */
.edu-item {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.school {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
}

.period {
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 600;
}

.major {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.edu-item .desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 576px) {
  .bio-text {
    padding: 1.5rem;
  }
  
  .info-card, .education-card {
    padding: 1.5rem;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .edu-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>

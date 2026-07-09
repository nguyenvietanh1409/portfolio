<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <a href="#home" class="footer-logo">
          <span class="logo-glow">anhnv</span>.dev
        </a>
        <p class="footer-desc">
          {{ t('footer.desc') }}
        </p>
      </div>
      
      <div class="footer-links">
        <h3>{{ t('footer.quickLinks') }}</h3>
        <ul>
          <li><a href="#home">{{ t('nav.home') }}</a></li>
          <li><a href="#about">{{ t('nav.about') }}</a></li>
          <li><a href="#experience">{{ t('nav.experience') }}</a></li>
          <li><a href="#skills">{{ t('nav.skills') }}</a></li>
          <li><a href="#projects">{{ t('nav.projects') }}</a></li>
        </ul>
      </div>

      <div class="footer-socials">
        <h3>{{ t('footer.contactSocials') }}</h3>
        <div class="social-icons">
          <a href="mailto:vietanh20030914@gmail.com" title="Email" class="social-icon">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:0325174809" title="Phone" class="social-icon">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" class="social-icon">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="social-icon">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Nguyễn Việt Anh. {{ t('footer.rights') }} <i class="fa-solid fa-heart" style="color: var(--color-primary);"></i> for VueJS.</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: rgba(3, 7, 18, 0.9);
  border-top: 1px solid var(--glass-border);
  padding: 4rem 0 2rem 0;
  position: relative;
  z-index: 2;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--text-primary);
}

.logo-glow {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 380px;
  line-height: 1.6;
}

.footer-links h3,
.footer-socials h3 {
  font-family: var(--font-title);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--text-primary);
}

.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--color-primary);
  padding-left: 4px;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: var(--transition-smooth);
}

.social-icon:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>

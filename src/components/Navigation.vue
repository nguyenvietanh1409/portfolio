<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <a href="#home" class="logo">
        <span class="logo-glow">anhnv</span>
        <span class="logo-text">.dev</span>
      </a>

      <!-- Desktop Navigation Menu -->
      <ul class="nav-menu">
        <li v-for="item in menuItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click="scrollToSection($event, item.id)"
          >
            {{ t('nav.' + item.id) }}
          </a>
        </li>
      </ul>

      <!-- Actions (Language Switcher & CV) -->
      <div class="nav-actions">
        <button 
          class="btn-lang" 
          @click="toggleLocale" 
          :title="locale === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'"
        >
          <i class="fa-solid fa-globe"></i> {{ locale === 'vi' ? 'EN' : 'VI' }}
        </button>
        <a href="/cv-nguyen-viet-anh.pdf" download class="btn-cv">
          <i class="fa-solid fa-download"></i> {{ t('nav.downloadCv') }}
        </a>
      </div>

      <!-- Hamburger Menu Button -->
      <button 
        class="mobile-toggle" 
        :class="{ open: isMobileMenuOpen }" 
        @click="toggleMobileMenu"
        aria-label="Toggle Menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Mobile Drawer Menu -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <!-- Glow effect inside menu -->
      <div class="mobile-menu-glow"></div>
      
      <div class="mobile-menu-content">
        <ul class="mobile-nav-list">
          <li v-for="(item, index) in menuItems" :key="item.id" class="mobile-nav-item">
            <a
              :href="`#${item.id}`"
              class="mobile-nav-link"
              :class="{ active: activeSection === item.id }"
              @click="handleMobileLinkClick($event, item.id)"
            >
              <span class="mobile-nav-num">0{{ index + 1 }}</span>
              <span class="mobile-nav-text">{{ t('nav.' + item.id) }}</span>
            </a>
          </li>
        </ul>
        
        <!-- Separator -->
        <div class="mobile-menu-divider"></div>
        
        <!-- Actions & Info -->
        <div class="mobile-menu-actions">
          <button class="btn-lang-mobile" @click="toggleLocale">
            <i class="fa-solid fa-globe"></i> {{ locale === 'vi' ? 'Tiếng Việt (VI)' : 'English (EN)' }}
          </button>
          
          <a href="/cv-nguyen-viet-anh.pdf" download class="btn-cv-mobile">
            <i class="fa-solid fa-download"></i> {{ t('nav.downloadCv') }} (PDF)
          </a>
        </div>
        
        <!-- Socials inside Mobile Menu -->
        <div class="mobile-menu-socials">
          <a href="mailto:vietanh20030914@gmail.com" title="Email" class="social-icon-mobile">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:0325174809" title="Phone" class="social-icon-mobile">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub" class="social-icon-mobile">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="social-icon-mobile">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from '../composables/useI18n';

const { locale, toggleLocale, t } = useI18n();

const menuItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'contact' }
];

const activeSection = ref('home');
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const handleMobileLinkClick = (e, id) => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
  scrollToSection(e, id);
};

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
    activeSection.value = id;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  const scrollPosition = window.scrollY + 120;
  
  for (const item of menuItems) {
    const section = document.getElementById(item.id);
    if (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = item.id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: var(--transition-smooth);
  border-bottom: 1px solid transparent;
}

.navbar-scrolled {
  height: 70px;
  background: rgba(3, 7, 18, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.5px;
  z-index: 1001;
}

.logo-glow {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.logo-glow::after {
  content: 'anhnv';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: blur(8px);
  opacity: 0.7;
}

.logo-text {
  color: var(--text-primary);
}

/* Nav Menu Desktop */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  font-family: var(--font-title);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  position: relative;
  padding: 8px 0;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transition: var(--transition-smooth);
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--color-primary);
  text-shadow: 0 0 10px rgba(6, 182, 212, 0.35);
}

/* Nav Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-lang {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-family: var(--font-title);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition-smooth);
}

.btn-lang:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-cv {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.btn-cv:hover {
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
  transform: translateY(-1px);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.mobile-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition-smooth);
}

/* Hamburger Animations */
.mobile-toggle.open .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-toggle.open .bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.open .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Menu Drawer */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 7, 18, 0.85);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 999;
  padding: 100px 2rem 40px 2rem;
  overflow-y: auto;
}

.mobile-menu.open {
  transform: translateY(0);
}

.mobile-menu-content {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
}

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  width: 100%;
  padding-left: 2rem;
}

.mobile-nav-item {
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu.open .mobile-nav-item {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delay for items */
.mobile-menu.open .mobile-nav-item:nth-child(1) { transition-delay: 0.1s; }
.mobile-menu.open .mobile-nav-item:nth-child(2) { transition-delay: 0.15s; }
.mobile-menu.open .mobile-nav-item:nth-child(3) { transition-delay: 0.2s; }
.mobile-menu.open .mobile-nav-item:nth-child(4) { transition-delay: 0.25s; }
.mobile-menu.open .mobile-nav-item:nth-child(5) { transition-delay: 0.3s; }
.mobile-menu.open .mobile-nav-item:nth-child(6) { transition-delay: 0.35s; }
.mobile-menu.open .mobile-menu-divider { transition-delay: 0.4s; }
.mobile-menu.open .mobile-menu-actions { transition-delay: 0.45s; }
.mobile-menu.open .mobile-menu-socials { transition-delay: 0.5s; }

.mobile-nav-link {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 1.85rem;
  color: var(--text-secondary);
  transition: var(--transition-smooth);
  width: 100%;
  padding: 8px 0;
}

.mobile-nav-num {
  font-size: 0.95rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-body);
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--text-primary);
  transform: translateX(8px);
}

.mobile-nav-link.active .mobile-nav-text {
  background: linear-gradient(90deg, #ffffff, var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mobile-menu-divider {
  width: calc(100% - 4rem);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
  margin: 2rem auto;
  opacity: 0;
  transform: scaleX(0.8);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.mobile-menu.open .mobile-menu-divider {
  opacity: 1;
  transform: scaleX(1);
}

.mobile-menu-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: calc(100% - 4rem);
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.mobile-menu.open .mobile-menu-actions {
  opacity: 1;
  transform: translateY(0);
}

.btn-lang-mobile {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 12px 20px;
  border-radius: 30px;
  font-family: var(--font-title);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: var(--transition-smooth);
}

.btn-lang-mobile:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-secondary);
}

.btn-cv-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: #ffffff;
  padding: 14px 30px;
  border-radius: 30px;
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.25);
  transition: var(--transition-smooth);
}

.btn-cv-mobile:hover {
  box-shadow: 0 12px 32px rgba(6, 182, 212, 0.4);
  transform: translateY(-2px);
}

.mobile-menu-socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.mobile-menu.open .mobile-menu-socials {
  opacity: 1;
  transform: translateY(0);
}

.social-icon-mobile {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: var(--transition-smooth);
}

.social-icon-mobile:hover {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
}

/* Nebula background glow inside mobile menu */
.mobile-menu-glow {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0) 70%);
  filter: blur(50px);
  pointer-events: none;
  z-index: -1;
  animation: pulseGlow 8s ease-in-out infinite alternate;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu,
  .nav-actions {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
}
</style>

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
      <ul class="mobile-nav-list">
        <li v-for="item in menuItems" :key="item.id" class="mobile-nav-item">
          <a
            :href="`#${item.id}`"
            class="mobile-nav-link"
            :class="{ active: activeSection === item.id }"
            @click="handleMobileLinkClick($event, item.id)"
          >
            {{ t('nav.' + item.id) }}
          </a>
        </li>
        <li class="mobile-nav-item mobile-lang-switch">
          <button class="btn-lang-mobile" @click="toggleLocale">
            <i class="fa-solid fa-globe"></i> Ngôn ngữ: {{ locale === 'vi' ? 'Tiếng Anh (EN)' : 'Tiếng Việt (VI)' }}
          </button>
        </li>
        <li class="mobile-nav-item" style="margin-top: 1rem;">
          <a href="/cv-nguyen-viet-anh.pdf" download class="btn-cv-mobile">
            <i class="fa-solid fa-download"></i> {{ t('nav.downloadCv') }} (PDF)
          </a>
        </li>
      </ul>
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
  background: rgba(3, 7, 18, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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

.mobile-nav-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
}

.mobile-nav-link {
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--text-secondary);
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--color-primary);
}

.btn-lang-mobile {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  padding: 10px 20px;
  border-radius: 25px;
  font-family: var(--font-title);
  font-size: 1rem;
  cursor: pointer;
}

.btn-cv-mobile {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 25px;
  font-family: var(--font-title);
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
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

<template>
  <!-- Interactive Space background -->
  <StarBackground />

  <!-- Navbar -->
  <Navigation />

  <!-- Page Main Content -->
  <main class="main-container">
    <HomeSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsGrid />
    <ProjectSection />
    <ContactSection />
  </main>

  <!-- Footer -->
  <Footer />
</template>

<script setup>
import StarBackground from './components/StarBackground.vue';
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

// Section Views
import HomeSection from './views/HomeSection.vue';
import AboutSection from './views/AboutSection.vue';
import ExperienceSection from './views/ExperienceSection.vue';
import SkillsGrid from './views/SkillsGrid.vue';
import ProjectSection from './views/ProjectSection.vue';
import ContactSection from './views/ContactSection.vue';
</script>

<style scoped>
.main-container {
  position: relative;
  z-index: 2;
  width: 100%;
}
</style>

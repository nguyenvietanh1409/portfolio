<template>
  <section id="contact" class="contact-section">
    <div class="section-header">
      <span class="section-tagline">{{ t('contact.tagline') }}</span>
      <h2>{{ t('contact.title') }}</h2>
      <p>{{ t('contact.subtitle') }}</p>
    </div>

    <div class="contact-content">
      <!-- Contact Info Cards -->
      <div class="contact-info">
        <div class="contact-intro">
          <h3>{{ t('contact.ready') }}</h3>
          <p>{{ t('contact.readyDesc') }}</p>
        </div>

        <div class="info-cards">
          <!-- Email Info -->
          <div class="card-info-item glass-panel">
            <div class="info-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="info-details">
              <span>{{ t('contact.sendEmail') }}</span>
              <a href="mailto:vietanh20030914@gmail.com" class="info-link">vietanh20030914@gmail.com</a>
            </div>
            <button 
              @click="copyText('vietanh20030914@gmail.com', 'email')" 
              class="btn-copy" 
              :title="copiedType === 'email' ? (locale === 'vi' ? 'Đã copy!' : 'Copied!') : (locale === 'vi' ? 'Copy email' : 'Copy Email')"
            >
              <i class="fa-regular" :class="copiedType === 'email' ? 'fa-circle-check' : 'fa-copy'"></i>
            </button>
          </div>

          <!-- Phone Info -->
          <div class="card-info-item glass-panel">
            <div class="info-icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="info-details">
              <span>{{ t('contact.callPhone') }}</span>
              <a href="tel:0325174809" class="info-link">0325174809</a>
            </div>
            <button 
              @click="copyText('0325174809', 'phone')" 
              class="btn-copy" 
              :title="copiedType === 'phone' ? (locale === 'vi' ? 'Đã copy!' : 'Copied!') : (locale === 'vi' ? 'Copy SĐT' : 'Copy Phone')"
            >
              <i class="fa-regular" :class="copiedType === 'phone' ? 'fa-circle-check' : 'fa-copy'"></i>
            </button>
          </div>

          <!-- Location Info -->
          <div class="card-info-item glass-panel">
            <div class="info-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="info-details">
              <span>{{ t('contact.location') }}</span>
              <p class="info-text">{{ t('about.locationVal') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-container glass-panel">
        <h3>{{ t('contact.msgMe') }}</h3>
        
        <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">{{ t('contact.formName') }}</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
              :placeholder="t('contact.formNamePlaceholder')"
            />
          </div>
          
          <div class="form-group">
            <label for="email">{{ t('contact.formEmail') }}</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
              :placeholder="t('contact.formEmailPlaceholder')"
            />
          </div>
          
          <div class="form-group">
            <label for="message">{{ t('contact.formMsg') }}</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required 
              rows="5" 
              :placeholder="t('contact.formMsgPlaceholder')"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary btn-submit">
            {{ t('contact.formSubmit') }} <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>

        <!-- Success Message -->
        <div v-else class="success-message">
          <div class="success-icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h4>{{ t('contact.successTitle') }}</h4>
          <p>{{ t('contact.successDesc') }}</p>
          <button @click="resetForm" class="btn-secondary">{{ t('contact.successBtn') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useI18n } from '../composables/useI18n';

const { t, locale } = useI18n();

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitted = ref(false);
const copiedType = ref('');

const copyText = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text);
    copiedType.value = type;
    setTimeout(() => {
      copiedType.value = '';
    }, 2000);
  } catch (err) {
    console.error('Không thể copy: ', err);
  }
};

const handleSubmit = () => {
  setTimeout(() => {
    isSubmitted.value = true;
  }, 800);
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  isSubmitted.value = false;
};
</script>

<style scoped>
.contact-section {
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

.contact-content {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-intro h3 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-intro p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.card-info-item {
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;
}

.info-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.card-info-item:nth-child(2) .info-icon {
  background: rgba(6, 182, 212, 0.1);
  border-color: rgba(6, 182, 212, 0.2);
  color: var(--color-secondary);
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-details span {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
}

.info-link {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.info-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.info-text {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.btn-copy {
  position: absolute;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 1rem;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: var(--transition-fast);
}

.btn-copy:hover {
  color: var(--color-primary);
  background: rgba(255, 255, 255, 0.05);
}

/* Contact Form container */
.contact-form-container {
  padding: 2.5rem;
}

.contact-form-container h3 {
  font-size: 1.4rem;
  margin-bottom: 1.75rem;
  color: var(--text-primary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
}

.btn-submit {
  justify-content: center;
  align-self: flex-start;
  padding: 12px 30px;
}

/* Success Message layout */
.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
  gap: 1.25rem;
}

.success-icon {
  font-size: 3.5rem;
  color: #10b981;
  filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.4));
  animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.success-message h4 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
}

.success-message p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 360px;
  margin-bottom: 0.5rem;
}

@keyframes scaleUp {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 576px) {
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .btn-submit {
    width: 100%;
  }
}
</style>

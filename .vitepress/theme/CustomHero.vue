<script setup>
import { withBase } from 'vitepress'
import heroImg from '/images/01.webp'
</script>

<template>
  <div class="hero-container">
  <section class="custom-hero">
    <div class="hero-content">
      <h1 class="hero-title">Scyllascope</h1>
      <p class="hero-tagline">Oscilloscope with built-in recorder (VST3, AU, LV2)</p>
      <div class="hero-actions">
        <a class="hero-btn brand" :href="withBase('/get-started/introduction.html')">Get Started</a>
        <a class="hero-btn alt" href="https://dsgdnb.com/plugins/scyllascope" target="_blank" rel="noreferrer">Download</a>
      </div>
    </div>
    <div class="hero-image">
      <img :src="heroImg" alt="Scyllascope plugin interface" />
    </div>
  </section>
  </div>
</template>

<style scoped>
.hero-container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
}

.custom-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 48px 0;
  gap: 32px;
}

.hero-content {
  flex-shrink: 0;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  background: linear-gradient(120deg, #00ff88 30%, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}

.hero-tagline {
  font-size: 20px;
  color: var(--vp-c-text-2);
  margin-top: 12px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.hero-btn {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}

.hero-btn.brand {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.hero-btn.brand:hover {
  background: var(--vp-button-brand-hover-bg);
}

.hero-btn.alt {
  background: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
}

.hero-btn.alt:hover {
  background: var(--vp-button-alt-hover-bg);
}

.hero-image {
  flex-shrink: 1;
  min-width: 0;
}

.hero-image img {
  width: 688px;
  max-width: 100%;
  border-radius: 12px;
  display: block;
}

@media (max-width: 959px) {
  .custom-hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image img {
    width: 100%;
  }
}
</style>

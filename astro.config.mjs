// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://youngjae734.github.io/jaeyoungfolio/
// 커스텀 도메인을 연결하면 site를 바꾸고 base를 '/'로 바꾸면 됩니다.
export default defineConfig({
  site: 'https://youngjae734.github.io',
  base: '/jaeyoungfolio',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

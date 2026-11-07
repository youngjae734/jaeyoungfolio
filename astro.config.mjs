// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://youngjae734.github.io/ (저장소 이름: youngjae734.github.io)
// 커스텀 도메인을 연결하면 site만 그 주소로 바꾸면 됩니다.
export default defineConfig({
  site: 'https://youngjae734.github.io',
  base: '/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});

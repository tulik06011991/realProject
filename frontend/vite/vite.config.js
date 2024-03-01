//frontend/vite/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
};

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000, // This is the port which we will use in docker
    watch: {
      usePolling: true, // Add the next lines if you're using windows and hot reload doesn't work
    },
  },
  plugins: [react(), tsconfigPaths()],
})

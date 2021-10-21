import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
		port: 2800, //挂载端口
		proxy: {
			'/api': {
				target: 'https://www.fastmock.site/mock/18f94db5174920c0ad6a1e455bd1a1ca/scui-demo/api',
				changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/')
			}
		}
  },
  plugins: [vue()]
})

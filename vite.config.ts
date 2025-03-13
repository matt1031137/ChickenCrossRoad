import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from "vite";

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (id.includes("three")) return "three"; // 把 Three.js 分成一個 chunk
//             if (id.includes("react")) return "react"; // 把 React 相關模組分成一個 chunk
//             return "vendor"; // 其他第三方套件統一放 vendor
//           }
//         },
//       },
//     },
//   },
// });
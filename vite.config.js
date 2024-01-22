// vite.config.js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // envPrefix:"demo_",//APP_  为自定义开头名
    server: {
        //方式二:设置多个代理
        proxy: {
            //这个路径为http://192.168.1.182:3000/douyu/wgapi/vod/front/vodrank/getTagVideos
            "/dev": {
                //target是代理的目标路径
                target: "http://localhost:8081",
                changeOrigin: true, //必须要开启跨域
                //pathRewrite重写请求的路径,实际请求的路径没有代理标识douyu,需要把斗鱼重置为空字符串
                rewrite: (path) => path.replace(/\/dev/, ""), // 路径重写
            },
        },
    }
})
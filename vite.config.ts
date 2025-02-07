import {defineConfig} from "vite";
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
    plugins:[dtsPlugin()],
    build:{
        lib:{
            entry: "./src/logger.ts",
            name: "logger",
            formats:['cjs','es','umd']
        }
    }
})
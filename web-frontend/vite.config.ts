import dsv from "@rollup/plugin-dsv";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),

        // Enables importing of CSV files
        dsv({ processRow: (row) => Object.values(row) }),
    ],
});

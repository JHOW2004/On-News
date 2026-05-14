import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import vitePrerender from "vite-prerender-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),

      vitePrerender({
        staticDir: "dist",
        routes: ["/"],
      }),

      {
        name: "api-middleware",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url?.startsWith("/api/analyze") && req.method === "POST") {
              let body = "";

              req.on("data", (chunk) => {
                body += chunk.toString();
              });

              req.on("end", async () => {
                try {
                  if (!body) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: "Empty request body" }));
                    return;
                  }

                  const { content } = JSON.parse(body);
                  const apiKey = env.GEMINI_API_KEY;

                  if (!apiKey) {
                    console.error("API Error: GEMINI_API_KEY not found in env");

                    res.statusCode = 500;

                    res.end(
                      JSON.stringify({
                        error: "GEMINI_API_KEY not found",
                      }),
                    );

                    return;
                  }

                  const genAI = new GoogleGenerativeAI(apiKey);

                  const model = genAI.getGenerativeModel({
                    model: "gemini-2.5-flash",

                    generationConfig: {
                      responseMimeType: "application/json",
                    },
                  });

                  const prompt = `
Analise o seguinte conteúdo para uma rede social e verifique se ele fere as diretrizes da comunidade (ódio, violência, pornografia, spam, assédio).

Retorne um JSON com os campos:
- safe (boolean): true se for seguro, false se não for.
- reason (string): explicação curta do motivo se não for seguro.

Conteúdo: "${content}"
`;

                  const result = await model.generateContent(prompt);

                  const response = await result.response;

                  const text = response.text();

                  const jsonResponse = JSON.parse(text);

                  res.setHeader("Content-Type", "application/json");

                  res.end(JSON.stringify(jsonResponse));
                } catch (error: any) {
                  console.error(
                    "API Middleware Error:",
                    error.message || error,
                  );

                  res.statusCode = 500;

                  res.setHeader("Content-Type", "application/json");

                  res.end(
                    JSON.stringify({
                      error: "Internal Server Error",
                      detail: error.message,
                    }),
                  );
                }
              });

              return;
            }

            next();
          });
        },
      },

      VitePWA({
        registerType: "autoUpdate",

        includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],

        workbox: {
          cleanupOutdatedCaches: true,

          clientsClaim: true,

          skipWaiting: true,

          navigateFallbackDenylist: [/^\/sitemap\.xml$/, /^\/robots\.txt$/],

          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.mode === "navigate",

              handler: "NetworkFirst",

              options: {
                cacheName: "html-cache",

                networkTimeoutSeconds: 3,
              },
            },

            {
              urlPattern: ({ url }) => url.pathname.startsWith("/api"),

              handler: "NetworkFirst",

              options: {
                cacheName: "api-cache",
              },
            },

            {
              urlPattern: ({ request }) => request.destination === "image",

              handler: "CacheFirst",

              options: {
                cacheName: "image-cache",

                expiration: {
                  maxEntries: 50,

                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
              },
            },
          ],
        },

        manifest: {
          name: "OnNews",

          short_name: "OnNews",

          description: "A rede social de notícias mais completa do Brasil.",

          theme_color: "#000000",

          background_color: "#000000",

          display: "standalone",

          orientation: "portrait",

          scope: "/",

          start_url: "/",

          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },

            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },

            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],

    optimizeDeps: {
      exclude: ["lucide-react"],
    },

    build: {
      chunkSizeWarningLimit: 1500,

      rollupOptions: {
        output: {
          manualChunks: {
            firebase: ["firebase/app", "firebase/auth", "firebase/firestore"],

            react: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
    },
  };
});

const isDev = process.env.NODE_ENV === "dev";
const config = {
  src: {
    root: "src",
    styles: "src/assets/scss",
    js: "src/assets/js",
    vendors: "src/assets/vendors",
    images: "src/assets/images",
  },
  build: {
    root: "build",
    styles: "build/assets/css",
    js: "build/assets/js",
    vendors: "build/assets/vendors",
    images: "build/assets/images",
  },
  dev: {
    root: ".dev",
    styles: ".dev/assets/css",
    js: ".dev/assets/js",
    vendors: ".dev/assets/vendors",
    images: ".dev/assets/images",
  },
  browserSync: {
    port: process.env.PORT || 8080,
    baseDir: ["src", isDev ? ".dev" : "build"],
  },
};

module.exports = config;

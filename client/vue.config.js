module.exports = {
  pwa: {
    name: 'vue-typescript-admin-template',
  },
  devServer: {
    proxy: {
      '/api': {
        target:
          'http://localhost:9998/api',
        changeOrigin: true,
      },
    },
  },
}

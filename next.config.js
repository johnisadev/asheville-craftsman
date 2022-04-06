module.exports = {
    i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
    },
    images: {
      domains: ["cdn.chec.io", "via.placeholder.com"],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
  
      return config
    },
  };
  
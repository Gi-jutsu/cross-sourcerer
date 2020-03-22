const path = require('path')
require('dotenv').config()

module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  webpack: function (config) {
    const shortcut = {
      core: [
        'components',
        'contexts',
        'hooks',
        'queries',
      ],
    }

    for (const [key, values] of Object.entries(shortcut)) {
      values.forEach(item => {
        config.resolve.alias[`@${key}/${item}`] = path.join(
          __dirname,
          key,
          item,
        )
      })
    }

    return config
  },
}
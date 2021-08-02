module.exports = {
  customeHeadScript: [
    // {
    //   describe: {
    //     type: 'text/javascript',
    //     src: '/assets/javascripts/lib-flexible.js'
    //   },
    //   content: ''
    // }
  ],
  css: () => {
    return {
      loaderOptions: {
        sass: {},
        postcss: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 75,
              unitPrecision: 2,
              propList: ['*'],
              exclude: e => {
                return true
              }
            })
          ]
        }
      }
    }
  }
}

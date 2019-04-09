module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'import',
      {
        libraryName: '@xinghunm/widgets',
        camel2UnderlineComponentName: false,
        camel2DashComponentName: false,
        customName(name) {
          return `@xinghunm/widgets/lib/${name}`;
        }
      },
      'import-fix-@xinghunm/widgets'
    ]
  ]
};

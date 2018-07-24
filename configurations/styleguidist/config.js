const path = require('path');

module.exports = {
  title: 'React Adventure Style Guide',
  theme: {
    baseBackground: '#FFF',
    link: '#3D89F7',
    linkHover: '#034e8e',
    border: '#e0d2de',
    font: [
      '-apple-system',
      'BlinkMacSystemFont',
      'segoe ui',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'apple color emoji',
      'segoe ui emoji',
      'segoe ui symbol',
    ],
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'Get started with React Adventure',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'source/app/components/**/*.jsx',
      exampleMode: 'collapse',
      usageMode: 'expand',
    },
  ],
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath).replace('source/app/', '');
    const name = dir.replace(/\/*components\/v[0-1]*\//g, '')
      .split('/')
      .map(name => name.charAt(0).toUpperCase() + name.slice(1))
      .join('');
    return `import ${name} from '${dir}';`;
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'wrappers/styled-components/ThemeWrapper.jsx'),
  },
  require: [
    path.join(__dirname, 'styles/default.css'),
  ],
};

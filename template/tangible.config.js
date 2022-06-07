const config = {
  build: [
    {
      src: 'src/index.js',
      dest: 'build/index.min.js'
    },
    {
      src: 'src/index.scss',
      dest: 'build/index.min.css'
    },
    {
      src: 'src/**/index.html',
      dest: 'build',
    },
  ],
  format: 'src',
  serve: {
    dir: 'build',
    port: 3000
  }
}

module.exports = config
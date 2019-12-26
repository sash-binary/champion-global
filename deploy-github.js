const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:binary-com/champion-global.git',
  },
  (err) => {
    // eslint-disable-next-line no-console
    if (err) console.log(err)

    // eslint-disable-next-line no-console
    console.log('Deploy complete')
  }
)
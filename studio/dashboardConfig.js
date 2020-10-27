export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f982e4bbbdee6a328ac7900',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-tw-studio',
                  apiId: '9a95c610-c943-498b-bf47-8371bc131f76'
                },
                {
                  buildHookId: '5f982e4b330b59a50d205625',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-tw',
                  apiId: '951cbc05-fb93-41cb-a593-c776bed10ad1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/twd-ivan/sanity-kitchen-sink-tw',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-tw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

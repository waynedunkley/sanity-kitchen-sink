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
                  buildHookId: '60e3c4ab26405e31fa9a2b06',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uphvzswf',
                  apiId: '52fc36f1-8eb5-461e-b129-249e5f260147'
                },
                {
                  buildHookId: '60e3c4abc5f3c147d9b16924',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qyrtc66g',
                  apiId: '652bfb2e-ff19-4096-9bad-3bb29011c9a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/waynedunkley/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qyrtc66g.netlify.app', category: 'apps'}
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

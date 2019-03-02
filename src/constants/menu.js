export default [
  {
    name: 'Home',
    path: '/home',
    icon: 'icon-home'
  },
  {
    name: 'Components',
    icon: 'icon-component',
    children: [
      {
        name: 'Form',
        path: '/form',
        children: [
          {
            name: 'Input',
            path: '/form/input',
          }
        ]
      },
      {
        name: 'Table',
        path: '/table'
      }
    ]
  }
]

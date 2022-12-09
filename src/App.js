import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Layout from './routes/Layout'
import PageNotFound from './routes/Error'
import Users from './routes/Users'
import User from './routes/User'
import Albums from './routes/Albums'
import Album from './routes/Album'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <PageNotFound />,
//     children: [
//       {
//         path: '/',
//         element: <MainPage />,
//         index: true,
//       },
//       {
//         path: 'pageNotFound',
//         element: <PageNotFound />,
//       },
//       {
//         path: 'users/',
//         children: [
//           {
//             path: '',
//             element: <Users />,
//             index: true,
//           },
//           {
//             path: ':id/',
//             element: <User />,
//             errorElement: <PageNotFound />,
//           },
//         ],
//       },
//       {
//         path: 'albums/',
//         children: [
//           {
//             path: '',
//             element: <Albums />,
//             index: true,
//           },
//           {
//             path: ':id/',
//             element: <Album />,
//             errorElement: <PageNotFound />,
//           },
//         ],
//       },
//     ],
//   },
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <User />,
      },
      {
        path: '/albums',

        element: <Albums />,
      },
      {
        path: '/albums/:id',
        element: <Album />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App

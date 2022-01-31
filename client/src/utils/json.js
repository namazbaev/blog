import { Home, Article, Blog, BlogView, Tags } from "../components"
export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/add/article',
        element: <Article />
    },
    {
        path: '/article',
        element: <Blog />
    },
    {
        path: '/blog/:id',
        element: <BlogView />
    },
    {
        path: '/tags',
        element: <Tags />
    }
]
// import { Article, Register, Tags, Login, NotFound, Politics } from "../components"
import Blog from '../pages/Blog/Blog'
import Home from '../pages/Home/Home'
import Tags from '../pages/Tags/Tags'
import Login from '../pages/Login/Login'
import BlogView from '../pages/Blog/BlogView'
import Article from '../pages/Article/Article'
import Register from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound'
const publicRoute = [
    { id: 1, title: 'Home', hidden: false, path: '/home', Element: Home },
    { id: 2, title: 'Articles', hidden: false, path: '/article', Element: Blog },
    { id: 3, title: 'Tags', hidden: false, path: '/tags', Element: Tags },
    { id: 4, title: 'Business', hidden: false, path: '/business', Element: Tags },
    { id: 5, title: '', hidden: false, path: '/:pageName', Element: NotFound },
    { id: 6, title: '', hidden: false, path: '/login', Element: Login },
    { id: 7, title: '', hidden: false, path: '/register', Element: Register },
    { id: 8, title: '', hidden: false, path: '/article/add', Element: Article },
    { id: 9, title: '', hidden: false, path: '/blog/:id', Element: BlogView },
    { id: 10, title: '', hidden: false, path: '/tags', Element: Tags },
]
const navbarRoute = [
    { id: 1, title: 'Home', hidden: false, path: '/home', Element: Home },
    { id: 2, title: 'Articles', hidden: false, path: '/article', Element: Blog },
    { id: 3, title: 'Tags', hidden: false, path: '/tags', Element: Tags },
    { id: 4, title: 'Business', hidden: false, path: '/business', Element: Tags },
]
export { navbarRoute, publicRoute }
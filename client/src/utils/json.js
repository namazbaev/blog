// import { Article, Register, Tags, Login, NotFound, Politics } from "../components"
import Blog from '../pages/Blog/Blog'
import Home from '../pages/Home/Home'
import Tags from '../pages/Tags/Tags'
import Login from '../pages/Login/Login'
import BlogView from '../pages/Blog/BlogView'
import Article from '../pages/Article/Article'
import Register from '../pages/Register/Register'
import NotFound from '../pages/NotFound/NotFound'
import { HOME, ARTICLE, TAGS, NOUTFOUND, LOGIN, REGISTER, ADD_ARTICLE, BLOGVIEW } from './routes'
const publicRoute = [
    { id: 1, title: 'Home', hidden: false, path: HOME, Element: Home },
    { id: 2, title: 'Articles', hidden: false, path: ARTICLE, Element: Blog },
    { id: 3, title: 'Tags', hidden: false, path: TAGS, Element: Tags },
    { id: 5, title: '', hidden: false, path: NOUTFOUND, Element: NotFound },
    { id: 6, title: '', hidden: false, path: LOGIN, Element: Login },
    { id: 7, title: '', hidden: false, path: REGISTER, Element: Register },
    { id: 8, title: '', hidden: false, path: ADD_ARTICLE, Element: Article },
    { id: 9, title: '', hidden: false, path: BLOGVIEW, Element: BlogView },
]
const navbarRoute = [
    { id: 1, title: 'Home', hidden: false, path: HOME, Element: Home },
    { id: 2, title: 'Articles', hidden: false, path: ARTICLE, Element: Blog },
    { id: 3, title: 'Tags', hidden: false, path: TAGS, Element: Tags },
]
export { navbarRoute, publicRoute }
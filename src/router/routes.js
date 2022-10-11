import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";
import Detail from "@/views/Blog/Detail";

export const routes = [
    {name: 'Home', path: '/', component: Home},
    {name: 'About', path: '/about', component: About},
    {name: 'Blog', path: '/article', component: Blog},
    {name: 'CategoryBlog', path: '/article/cate/:categoryId', component: Blog},
    {name: 'BlogDetail', path: '/article/:id', component: Detail},
    {name: 'Project', path: '/project', component: Project},
    {name: 'Message', path: '/message', component: Message}
]

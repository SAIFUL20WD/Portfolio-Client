import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import DashboardHome from "../components/Dashboard/DashboardHome";
import ProjectsPage from "../pages/ProjectsPage";
import BlogsPage from "../pages/BlogsPage";
import ContactPage from "../pages/ContactPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import SkillList from "../components/Dashboard/Skills";
import ProjectList from "../components/Dashboard/Projects";
import BlogList from "../components/Dashboard/Blogs";
import AddBlog from "../components/Dashboard/ManageBlogs/AddBlog";
import EditBlog from "../components/Dashboard/ManageBlogs/EditBlog";
import ProtectedRoute from "../components/ProtectedRoute";
import BlogDetailPage from "../pages/BlogDetailPage";
import AddProject from "../components/Dashboard/ManageProjects/AddProject";
import EditProject from "../components/Dashboard/ManageProjects/EditProject";
import ProjectDetailPage from "../pages/ProjectDetailPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/projects",
				element: <ProjectsPage />,
			},
			{
				path: "/project/:id/",
				element: <ProjectDetailPage />,
			},
			{
				path: "/blogs",
				element: <BlogsPage />,
			},
			{
				path: "/blog/:id/",
				element: <BlogDetailPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardPage />,
		children: [
			{
				path: "",
				element: (
					<ProtectedRoute>
						<DashboardHome />
					</ProtectedRoute>
				),
			},
			{
				path: "skills",
				element: (
					<ProtectedRoute>
						<SkillList />
					</ProtectedRoute>
				),
			},
			{
				path: "projects",
				element: (
					<ProtectedRoute>
						<ProjectList />
					</ProtectedRoute>
				),
			},
			{
				path: "projects/add",
				element: (
					<ProtectedRoute>
						<AddProject />
					</ProtectedRoute>
				),
			},
			{
				path: "projects/edit/:id",
				element: (
					<ProtectedRoute>
						<EditProject />
					</ProtectedRoute>
				),
			},
			{
				path: "blogs",
				element: (
					<ProtectedRoute>
						<BlogList />
					</ProtectedRoute>
				),
			},
			{
				path: "blogs/add",
				element: (
					<ProtectedRoute>
						<AddBlog />
					</ProtectedRoute>
				),
			},
			{
				path: "blogs/edit/:id",
				element: (
					<ProtectedRoute>
						<EditBlog />
					</ProtectedRoute>
				),
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;

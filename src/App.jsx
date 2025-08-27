import { Route, Routes } from "react-router-dom";




import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/public/ContactPage";
import ProjectPage from "./pages/public/ProjectPage";
import WorkExperiencePage from "./pages/admin/WorkExperiencePage";
import EducationPage from "./pages/admin/EducationPage";
import CertificationPage from "./pages/admin/CertificationPage";
import AdminLayout from "./layouts/AdminLayout";
import ProjectsPage from "./pages/admin/ProjectsPage";
import ToolsTechnologyPage from "./pages/admin/ToolsTechnologyPage";


const App = () => {

	return (
		<div>

			<Routes>
					{/* Public Layout */}
				<Route element={<PublicLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path="/about" element={<AboutPage/>} />
					<Route path="/projects" element={<ProjectPage/>} />
					<Route path="/contact" element={<ContactPage/>} />
				</Route>



					{/* Admin Layout */}
				<Route element={<AdminLayout />}>
					<Route path="/admin-panel/projects" element={<ProjectsPage />} />
					<Route path="/admin-panel/tools-technologies" element={<ToolsTechnologyPage />} />
					<Route path="/admin-panel/work-experience" element={<WorkExperiencePage/>} />
					<Route path="/admin-panel/education" element={<EducationPage />} />
					<Route path="/admin-panel/certifications" element={<CertificationPage />} />
				</Route>
				
				{/* catch all routes */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
	
		</div>
	);
}

export default App;

import Project from '@/domain/Project';
import { projectAtom } from '@/store/mainStore';
import { useAtom } from 'jotai';

const ProjectSideMenu = () => {
    const [projects, setProjects] = useAtom(projectAtom);

    const handleAddProject = () => {
        const newProject: Project = {
            id: projects.length + 1,
            name: 'New Project',
            description: 'Description of New Project',

            startDate: new Date().toISOString().split('T')[0],
            endDate: new Date(new Date().setMonth(new Date().getMonth() + 3))
                .toISOString()
                .split('T')[0],
            status: 'Not Started',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        setProjects([...projects, newProject]);
    };
    const handleDeleteProject = (projectId: number) => {
        setProjects((prevProjects) =>
            prevProjects.filter((project) => project.id !== projectId)
        );
    };

    return (
        <div className="flex flex-col w-64 bg-gray-800 text-white">
            <div className="p-4 text-lg font-bold">
                Projects
                <button onClick={handleAddProject}>+</button>
            </div>
            <div className="p-4 text-sm">
                Project List
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-2 hover:bg-gray-700 cursor-pointer"
                    >
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                                <input
                                    type="text"
                                    className="p-2 bg-gray-700 text-white rounded"
                                    value={project.name}
                                    width={100}
                                    style={{
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                    }}
                                />
                                <p className="text-gray-400">
                                    開始日:{project.startDate} ~ 終了日:
                                    {project.endDate}
                                </p>
                            </div>
                            <button
                                onClick={() => handleDeleteProject(project.id)}
                            >
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProjectSideMenu;

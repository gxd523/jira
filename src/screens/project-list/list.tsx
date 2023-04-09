import { User } from "./search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ProjectListProps {
  projectList: Project[];
  users: User[];
}

export const ProjectList = ({ projectList, users }: ProjectListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {projectList.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => {
                return user.id === project.personId;
              })?.name || "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

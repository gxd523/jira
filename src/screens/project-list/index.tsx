import { useEffect, useState } from "react";
import { ProjectList } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useDebounce } from "utils";
import qs from "qs";
import config from "config";

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({ name: "", personId: "" });
  const [projectList, setProjectList] = useState([]);

  const debouncedParam = useDebounce(param, 500);

  useEffect(() => {
    fetch(
      `${config.apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (response) => {
      if (response.ok) setProjectList(await response.json());
    });
  }, [debouncedParam]);

  useEffect(() => {
    fetch(`${config.apiUrl}/users`).then(async (response) => {
      if (response.ok) setUsers(await response.json());
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <ProjectList users={users} projectList={projectList} />
    </div>
  );
};

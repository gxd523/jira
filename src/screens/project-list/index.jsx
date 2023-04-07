import { useEffect, useState } from "react"
import { ProjectList } from "./list"
import { SearchPanel } from "./search-panel"

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({ name: '', personId: '' })
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async response => {
      if (response.ok) setProjectList(await response.json())
    })
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) setUsers(await response.json())
    })
  }, [])

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <ProjectList users={users} projectList={projectList} />
    </div>
  )
}

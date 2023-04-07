export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form action="">
      <input
        type="text" value={param.name}
        onChange={evt => setParam({ ...param, name: evt.target.value })}
      />
      <select
        value={param.personId}
        onChange={evt => setParam({ ...param, personId: evt.target.value })}
      >
        {users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)}
      </select>
    </form>
  )
}

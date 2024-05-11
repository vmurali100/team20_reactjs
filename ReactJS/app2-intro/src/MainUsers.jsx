export const MainUsers = (props) => {
  return (
    <ul>
      {props.users.map((usr) => {
        return <li>{usr}</li>;
      })}
    </ul>
  );
};

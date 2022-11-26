import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = ({ usersList }) => {
  if (usersList)
    return usersList.map((user) => (
      <Card className={classes.users}>
        <ul>
          <li>Name: {user.userName}</li>
          <li>Age: {user.userAge}</li>
        </ul>
      </Card>
    ));
};

export default UsersList;

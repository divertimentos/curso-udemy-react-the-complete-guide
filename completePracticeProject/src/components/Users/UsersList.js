import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = ({ usersList }) => {
  if (usersList)
    return usersList.map((user) => (
      <Card className={classes.users}>
        <ul>
          <li>
            {user.userName} ({user.userAge} years old)
          </li>
        </ul>
      </Card>
    ));
};

export default UsersList;

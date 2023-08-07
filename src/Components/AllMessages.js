import Message from "./Message";
import styles from "./_AllMessages.module.scss";
import { useNotificationsContext } from "../Contexts/NotificationsContext";

const AllMessages = () => {
  const messagesData = useNotificationsContext()

  return (
    <div className={styles.notification}>
      {messagesData.map((obj) => (
        <Message data={obj} key={obj.id} />
      ))}
    </div>
  );
};

export default AllMessages;

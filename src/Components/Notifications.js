import { useNotificationsContext } from "../Contexts/NotificationsContext";
import AllMessages from "./AllMessages";
import styles from "./_Notifications.module.scss";

const Notifications = () => {
  const messagesData = useNotificationsContext();

  function getNumOfUnreadMessages() {
    let result = 0;
    messagesData.forEach((obj) => !obj.isRead && result++);
    return result;
  }

  return (
    <div className="container">
      <div className={styles.notificationsContainer}>
        <header>
          <h3>
            Notifications <span>{getNumOfUnreadMessages()}</span>
          </h3>
          <button type="button">Mark all as read</button>
        </header>

        <AllMessages />
      </div>
    </div>
  );
};

export default Notifications;

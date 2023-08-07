import { useNotificationsContext } from "../Contexts/NotificationsContext";
import AllMessages from "./AllMessages";
import styles from "./_Notifications.module.scss";

const Notifications = () => {
  const {messagesState, setMessagesState} = useNotificationsContext();


  function getNumOfUnreadMessages() {
    let result = 0;
    messagesState.forEach((obj) => !obj.isRead && result++);
    return result;
  }


  function markAllAsRead() {
    const newData = messagesState.map(obj => {
      obj.isRead = true
      return obj
    })
    setMessagesState(newData);
  }


  return (
    <div className="container">
      <div className={styles.notificationsContainer}>
        <header>
          <h3>
            Notifications <span>{getNumOfUnreadMessages()}</span>
          </h3>
          <button type="button" onClick={() => markAllAsRead()}>Mark all as read</button>
        </header>

        <AllMessages />
      </div>
    </div>
  );
};

export default Notifications;

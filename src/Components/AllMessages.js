import { useNotificationsContext } from "../Contexts/NotificationsContext";
import Message from "./Message";

const AllMessages = () => {
  const messagesData = useNotificationsContext();

  return (
    <div>
      {messagesData.messagesState.map((obj) => (
        <Message data={obj} key={obj.id} />
      ))}
    </div>
  );
};

export default AllMessages;

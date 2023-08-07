import styles from "./_Message.module.scss";

const Message = ({ data }) => {
  const {
    img,
    userName,
    state,
    event,
    specialEvent,
    timeRemaining,
    message,
    isRead,
    commentPicture,
  } = data;

  return (
    <div className={`${styles.message} ${isRead ? styles.readMessage : ""}`}>
      <div className={styles.img}>
        <img src={img} alt="avatar" />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.userName}>{userName}</h2>
            <p style={{ marginRight: !event ? "0" : "" }}>{state}</p>
            <h3
              className={`${styles.event} ${
                specialEvent ? styles.specialEvent : ""
              }`}
            >
              {event}
              {!isRead && <span className={styles.dot}></span>}
            </h3>
          </div>

          {commentPicture && (
            <div className={styles.commentPictureHolder}>
              <img src={commentPicture} alt="girl playing chess" />
            </div>
          )}
        </div>

        <span className={styles.timeRemaining}>{timeRemaining}</span>

        {message && <div className={styles.messageContent}>{message}</div>}
      </div>
    </div>
  );
};

export default Message;

import { createContext, useContext } from "react";

export const NotificationsContext = createContext();

export const useNotificationsContext = () => useContext(NotificationsContext);

import { createContext } from "react";

type applicationContext = { isMobile?: boolean };
const defaultApplicationContext = { isMobile: false } as applicationContext;

const ApplicationContext = createContext<applicationContext>(
  defaultApplicationContext
);

export default ApplicationContext;

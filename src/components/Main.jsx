import List from "./List";
import Form from "./Form";

export default function Main({ children }) {
  return <main>{children}</main>;
}

Main.List = List;
Main.Form = Form;

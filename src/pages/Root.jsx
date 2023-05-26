import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
const Root = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default Root;

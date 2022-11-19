import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <>
      <SEO title="Home" description="Home Page - KM Clothing" />
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;

import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Home - KM Clothing"
        description="Clothing store for all you needs"
      />
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;

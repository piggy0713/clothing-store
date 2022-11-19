import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="clothing-store-lovat.vercel.app" />
        <meta name="description" content="Home page" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home page" />
        <meta property="og:url" content="clothing-store-lovat.vercel.app" />
        <meta
          property="og:image"
          content="clothing-store-lovat.vercel.app/km.png"
        />
      </Helmet>
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;

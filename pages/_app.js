import { useRouter } from "next/router";
import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import ReactGA from "react-ga";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // Track route changes
    // const handleRouteChange = (url) => {
    //   ReactGA.pageview(url);
    // };
    const handleRouteChange = (url) => {
      window.gtag("config", "G-WWE3LG0ZZG", {
        page_path: url,
      });
    };

    // Add a listener for route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* tracking Id is using  from uswa account */}

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WWE3LG0ZZG"
      ></Script>
      <Script id="google-rerode">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WWE3LG0ZZG',{
        page_path: window.location.pathname,
    });
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

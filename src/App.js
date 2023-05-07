import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styles from "./App.module.css";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";
import Root from "src/pages/Root";
import { LanguageProvider } from "src/context/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <section className={styles["avenue-messenger"]}>
          <RouterProvider router={router} />
        </section>
      </LanguageProvider>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default App;

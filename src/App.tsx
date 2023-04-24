import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import lightTheme from "./styles/LightTheme.ts";
import darkTheme from "./styles/DarkTheme.ts";
import Home from "./components/pages/Home.tsx";
import Login from "./components/pages/Login.tsx";
import Test from "./components/pages/Test.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>Page not found</h1>,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <h1>Page not found</h1>,
  },
]);

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        toggleTheme: () => {
          setTheme((prev) => (prev.id === "light" ? darkTheme : lightTheme));
        },
      }}
    >
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

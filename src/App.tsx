import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StartPageLayout } from "./components/StartPageLayout/StartPageLayout";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpForm } from "./pages/SignUpForm/SignUpForm";
import { HomePage } from "./pages/HomePage/HomePage";
import RouteGuard from "./components/RouteGuard/RouteGuard";
import { FriendsList } from "./pages/FriendsList/FriendsList";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <StartPageLayout children={<SignInPage />} />,
  },
  {
    path: "/sign-up",
    element: <StartPageLayout children={<SignUpForm />} />,
  },
  {
    path: "/",
    element: <RouteGuard children={<HomePage />} />,
  },
  {
    path: "/friends",
    element: <RouteGuard children={<FriendsList />} />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

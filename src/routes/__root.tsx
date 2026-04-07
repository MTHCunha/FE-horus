import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RootComponent() {
  return (
    <React.Fragment>
      <Link to="/">Main Page</Link>
      <Link to="/login">Login Page</Link>
      <Outlet />
    </React.Fragment>
  );
}

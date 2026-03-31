import {
  Navigate,
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { CartProvider } from "./context/CartContext";
import { AboutPage } from "./pages/AboutPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";

function RootLayout() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => <Navigate to="/" />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/categories",
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  component: CategoriesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$",
  component: () => <Navigate to="/" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  categoriesRoute,
  aboutRoute,
  contactRoute,
  catchAllRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

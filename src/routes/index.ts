import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import authRoutes from "./auth.routes";

const routes = (app: any) => {
  userRoutes(app);
  productRoutes(app);
  authRoutes(app);
};

export default routes;

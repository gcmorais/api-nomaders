import userRoutes from "./user.routes";
import productRoutes from "./product.routes";

const routes = (app: any) => {
  userRoutes(app);
  productRoutes(app);
};

export default routes;

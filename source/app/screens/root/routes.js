//Application Routes
import Error404Route from '../errors/not-found/route';
import LoginRoute from '../login/route';
import HomeRoute from '../home/route';

//Concatening routes
const routes = Array.concat(LoginRoute, HomeRoute);
const errorRoutes = Array.concat(Error404Route);

export default Array.concat(routes, errorRoutes);

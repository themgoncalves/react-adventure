/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

// Application Routes
import Error404Route from '../errors/not-found/route';
import LoginRoute from '../login/route';
import HomeRoute from '../home/route';
import RestrictedAreaRoute from '../restricted/route';

// Concatening routes
const routes = Array.concat(LoginRoute, RestrictedAreaRoute, HomeRoute);
const errorRoutes = Array.concat(Error404Route);

export default Array.concat(routes, errorRoutes);

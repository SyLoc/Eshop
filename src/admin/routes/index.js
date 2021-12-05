import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES_ADMIN } from './constants';
import AdminRoute from '../hocs/adminRoute';
import DashBoard from '../containers/DashBoard';
import ProductManagement from '../containers/ProductManagement';
import CustomerManagement from '../containers/CustomerManagement';
import Order from '../containers/Order';
import Error from 'page/Error';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <AdminRoute exact path={ROUTES_ADMIN.ADMIN} component={DashBoard} title="" />
            <AdminRoute exact path={ROUTES_ADMIN.DASHBOARD} component={DashBoard} title="" />
            <AdminRoute exact path={ROUTES_ADMIN.PRODUCT_MANAGEMENT} component={ProductManagement} title="" />
            <AdminRoute exact path={ROUTES_ADMIN.CUSTOMER_MANAGEMENT} component={CustomerManagement} title="" />
            <AdminRoute exact path={ROUTES_ADMIN.ORDER} component={Order} title="" />

            <Route path='*'>
              <Error path='/admin'/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;
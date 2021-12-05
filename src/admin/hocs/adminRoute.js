import React, {Suspense} from 'react'
import { Route } from 'react-router-dom';
import AdminLayout from '../components/Layout';

export default function AdminRoute({ component: Component, title, ...rest }) {
    return (
        <Route {...rest}>
            <AdminLayout title={title}>
                <Suspense fallback={<div>loading...</div>}>
                    <Component />
                </Suspense>
            </AdminLayout>
        </Route>
    )
}

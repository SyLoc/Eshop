import React, {useState, useMemo, useEffect} from 'react';
import * as S from './styled';
import { Switch, Image } from 'antd';
import { getListOfOrders } from 'admin/services/apis/orderManagement';
import { getListOfUsers_1 } from 'admin/services/apis/customerManagement';
import { getListOfproducts_1 } from 'admin/services/apis/productsManagement';
import { useDispatch, useSelector } from 'react-redux';


export default function Index() {
    const dispatch = useDispatch();
    const orderRes = useSelector((state) => state.adminOrders.orders)
    const productsRes = useSelector(state => state.adminProducts.products_1)
    const UsersRes = useSelector(state => state.adminUsers.users_1)
    const loading = false;
    const [order, setOrder] = useState([])


    useEffect(() => {
        dispatch(getListOfOrders(1))
        dispatch(getListOfUsers_1())
        dispatch(getListOfproducts_1())
    }, [dispatch])

    useMemo(
        () =>{
            if(productsRes.length > 0 && UsersRes.length > 0 && orderRes.length > 0){
                setOrder(
                    orderRes?.map((order, index) => {
                        const user = UsersRes.find((user) => user.id === order.idUser)
                        const product = productsRes.find((product) => product.id === order.idProduct)
                        return {
                            index: index + 1,
                            ...order,
                            img_product: product?.image,
                            name_product: product?.name,
                            total: 14352,
                            name_customer: user?.name,
                            phone: user?.phone,
                            address: `${user?.ward?.label}, ${user?.district?.label}, ${user?.province?.label}`,
                            address_details: user?.address_details,
                        }
                    })
                )} else{
                    return [];
                }
            }
        , [orderRes, productsRes, UsersRes])

    const handleChange = () =>{

    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            key: 'index',
            align: 'center',
            width:'70px',
        },
        {
            title: 'Tên',
            dataIndex: 'name_product',
            key: 'name_product',
            render: (name_product) => <S.TextName>{name_product}</S.TextName>
        },
        {
            title: 'Ảnh',
            dataIndex: 'img_product',
            key: 'img_product',
            align: 'center',
            render: (img_product) => <Image width={70} src={img_product} />
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'center',
            width:'250px',
        },
        {
            title: 'Số tiền',
            dataIndex: 'total',
            key: 'total',
            align: 'center',
            width: '200px',
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'name_customer',
            key: 'name_customer',
            align: 'center',
            width:'250px',
        },
        {
            title: 'SĐT',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center',
            width:'250px',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
            width:'250px',
        },
        {
            title: 'Địa chỉ chi tiết',
            dataIndex: 'address_details',
            key: 'address_details',
            align: 'center',
            width:'250px',
        },
        {
            title:'Trạng thái',
            dataIndex: 'idAdmin',
            key: 'idAdmin',
            align: 'center',
            width:'50px',
            render: () => (<Switch defaultChecked onChange={handleChange} />)
        }
    ]

    return (
        <S.OrderWrap>
            <S.TableWrap>
                <S.TableCustom scroll={{ x: 1300 }} loading={loading} columns={columns} dataSource={order} bordered={false} />
            </S.TableWrap>
        </S.OrderWrap>
    )
}

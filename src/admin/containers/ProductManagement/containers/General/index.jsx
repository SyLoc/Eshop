import React, { useEffect,useState, useMemo } from 'react';
import * as S from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getListOfproducts, removeProductApi } from 'admin/services/apis/productsManagement';
import { Image, Row, Col, Switch } from 'antd';
import { useRequest } from 'ahooks'; 
import Pagination from 'admin/components/common/pagination'
import Modal from 'admin/components/common/Modal';
import Button from 'admin/components/common/Button';

import { ReactComponent as Delete } from 'assets/images/icons/delete.svg';
import { ReactComponent as Edit } from 'assets/images/icons/edit.svg';

export default function Index({onUpdateId}) {
    const dispatch = useDispatch()
    const productsRes = useSelector(state => state.adminProducts.products)
    const loading = useSelector(state => state.adminProducts.loading)
    const pagination = useSelector(state => state.adminProducts.pagination)
    const [products, setProducts] = useState([])
    const [isShowModalDelete, setIsShowModalDelete] = useState(false) 
    const [removeId, setRemoveId] = useState('')


    const {run: removeProduct } = useRequest((id) => removeProductApi(id), {
        manual: true,
        onSuccess: (data) => {
            dispatch(getListOfproducts(1))
            setIsShowModalDelete(false)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const handleDeleteId = (id) =>{
        setRemoveId(id)
        setIsShowModalDelete(true)
    }

    const handleConfirm = () =>{
        removeProduct(removeId)
    }

    const handleCancel = () =>{
        setRemoveId('')
        setIsShowModalDelete(false)
    }

    const onChangeDisable = (checked) =>{

    }
    

    useMemo(
        () =>
        setProducts(
            productsRes?.map((product, index) => {
                return {
                    index: (index + 1), 
                    id: product?.idproduct || product?.id,
                    name: product?.name,
                    img: product?.image,
                    price_old: product?.priceOld || new Intl.NumberFormat('de-DE').format(product?.price_old),
                    price_current: product?.priceCurrent || new Intl.NumberFormat('de-DE').format(product?.price_current),
                    description: product?.description,
                    category: product?.category?.label || product?.category,
                }
            })
        ), [productsRes])

    useEffect(() => {
        dispatch(getListOfproducts(1))
    }, [dispatch])


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
            dataIndex: 'name',
            key: 'name',
            render: (name) => <S.TextName>{name}</S.TextName>
        },
        {
            title: 'Ảnh',
            dataIndex: 'img',
            key: 'img',
            align: 'center',
            render: (img) => <Image width={70} src={img} />
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            key: 'category',
            align: 'center',
            width:'200px',
        },
        {
            title: 'giá cũ',
            dataIndex: 'price_old',
            key: 'price_old',
            align: 'center',
            width:'200px',
            render: (price_old) => <div>{price_old}đ</div>
        },
        {
            title: 'giá',
            dataIndex: 'price_current',
            key: 'price_current',
            align: 'center',
            width:'200px',
            render: (price_current) => <div>{price_current}đ</div>
        },
        {
            title:'mô tả',
            dataIndex: 'description',
            key: 'description',
            align: 'center',
            width:'300px',
        },
        {
            title:'Hết hàng',
            dataIndex: 'disable',
            key: 'disable',
            align: 'center',
            width:'50px',
            render: () => (<Switch onChange={onChangeDisable} />)
        },
        {
            title: 'action',
            dataIndex: 'id',
            key: 'action',
            align: 'center',
            render: (id) => (
                <S.Actions>
                    <button onClick={() => onUpdateId(id)}><Edit/></button>
                    <button onClick={() => handleDeleteId(id)}><Delete/></button>
                </S.Actions>
            )
        },
    ]

    const handlePageChange = (page) => {
        dispatch(getListOfproducts(page))
    };

    return (
        <>
            <S.TableWrap>
                <S.TableCustom scroll={{ x: 1300 }} loading={loading} columns={columns} dataSource={products} bordered={false} />
            </S.TableWrap>
            <Pagination  total={pagination?._totalRows} current={pagination?._page} onChange={handlePageChange} />
            {
                Modal && 
                ( <Modal title="xác nhận xóa" visible={isShowModalDelete} onCancel={() => setIsShowModalDelete(false)}>
                    <Row gutter={[8, 0]}>
                        <Col span={12}>
                            <Button
                                width="100%"
                                buttonType="primary"
                                padding="10px 0"
                                borderRadius="5px"
                                type="button"
                                margin="20px 0 0"
                                onClick={handleConfirm}
                            >
                                xác nhận
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                width="100%"
                                buttonType="gray"
                                padding="10px 0"
                                borderRadius="5px"
                                type="button"
                                margin="20px 0 0"
                                onClick={handleCancel}
                            >
                                hủy
                            </Button>
                        </Col>
                    </Row>
                </Modal>)
            }
        </>
    )
}

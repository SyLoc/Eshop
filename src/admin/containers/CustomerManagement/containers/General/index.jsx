import React, { useEffect,useState, useMemo } from 'react';
import * as S from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getListOfUsers, removeUserApi } from 'admin/services/apis/customerManagement';
import { Image, Row, Col, Switch  } from 'antd';
import { useRequest } from 'ahooks'; 
import Pagination from 'admin/components/common/pagination'
import Modal from 'admin/components/common/Modal';
import Button from 'admin/components/common/Button';

import { ReactComponent as Delete } from 'assets/images/icons/delete.svg';
import { ReactComponent as Edit } from 'assets/images/icons/edit.svg';

export default function Index({onUpdateId}) {
    const dispatch = useDispatch()
    const UsersRes = useSelector(state => state.adminUsers.users)
    const loading = useSelector(state => state.adminUsers.loading)
    const pagination = useSelector(state => state.adminUsers.pagination)
    const [users, setUsers] = useState([])
    const [isShowModalDelete, setIsShowModalDelete] = useState(false) 
    const [removeId, setRemoveId] = useState('')


    const {run: removeUser } = useRequest((id) => removeUserApi(id), {
        manual: true,
        onSuccess: (data) => {
            dispatch(getListOfUsers(1))
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
        removeUser(removeId)
    }

    const handleCancel = () =>{
        setRemoveId('')
        setIsShowModalDelete(false)
    }

    const onChangeAdmin = (checked) =>{
        // console.log(checked)
    }

    useMemo(
        () =>
        setUsers(
            UsersRes?.map((user, index) => {
                return {
                    index: (index + 1), 
                    id: user?.idUser || user?.id,
                    name: user?.name,
                    email: user?.email,
                    img: user?.img,
                    address: `${user?.ward?.label}, ${user?.district?.label}, ${user?.province?.label}`,
                    address_details: user?.address_details,
                    number_phone: user?.phone,
                    note: user?.note,
                }
            })
        ), [UsersRes])

    useEffect(() => {
        dispatch(getListOfUsers(1))
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
            title: 'Số điện thoại',
            dataIndex: 'number_phone',
            key: 'number_phone',
            align: 'center',
            width: '200px',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          align: 'left',
          width:'200px',
        },
        {
            title:'ghi chú',
            dataIndex: 'note',
            key: 'note',
            align: 'center',
            width:'150px',
        },
        {
            title:'admin',
            dataIndex: 'idAdmin',
            key: 'idAdmin',
            align: 'center',
            width:'50px',
            render: () => (<Switch defaultChecked onChange={onChangeAdmin} />)
        },
        {
            title: 'Thao tác',
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
        dispatch(getListOfUsers(page))
    };

    return (
        <>
            <S.TableWrap>
                <S.TableCustom scroll={{ x: 1300 }} loading={loading} columns={columns} dataSource={users} bordered={false} />
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

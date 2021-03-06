import React, { useEffect, useState, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import {Row, Col, Progress, Spin} from 'antd';
import FormMode from 'admin/components/common/FormMode';
import { useForm, useWatch } from 'react-hook-form';
import { useRequest } from 'ahooks'; 
import { getUserDetailsApi, createUserApi, updateUserApi } from 'admin/services/apis/customerManagement';
import { getListOfProvincesApi, getListOfDistrictsApi, getListOfWardsApi } from 'admin/services/apis/address';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from './constants'
import * as S from './styled';
import Button from 'admin/components/common/Button';


export default function Index({ updateId, onSetPageActive, onSetUpdateId }) {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [users, setUsers] = useState({})
    const [resSuccess, setSuccess] = useState('')

    const { 
        register, 
        handleSubmit, 
        setValue, 
        reset,
        control, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(Schema),
        defaultValues: {}
    })

    const handleReset = () => {
        reset();
        setValue('province', {label:"", value:""})
        setValue('district', {label:"", value:""})
        setValue('ward', {label:"", value:""})
        setDistricts([]);
        setWards([]);
    }

    const { loading: getListOfProvincesLoading, run: getListOfProvinces } = useRequest(() => getListOfProvincesApi(), {
        manual: true,
        onSuccess: (data) => {
            setProvinces(data?.data?.LtsItem)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const { loading: getListOfDistrictsLoading,  run: getListOfDistricts } = useRequest((id) => getListOfDistrictsApi(id), {
        manual: true,
        onSuccess: (data) => {
            setDistricts(data?.data)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const { loading: getListOfWardsLoading, run: getListOfWards } = useRequest((id) => getListOfWardsApi(id), {
        manual: true,
        onSuccess: (data) => {
            setWards(data?.data)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const {loading: getUserDetailsLoading,  run: getUserDetails } = useRequest((id) => getUserDetailsApi(id), {
        manual: true,
        onSuccess: (data) => {
            const value = data?.data
            setUsers(value)
            setValue('name', value?.name)
            setValue('email', value?.email)
            setValue('phone', value?.phone)
            setValue('address_details', value?.address_details)
            setValue('province', value?.province)
            setValue('district', value?.district)
            setValue('ward', value?.ward)
            setValue('note', value?.note)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const { run: createUser } = useRequest((data) => createUserApi(data), {
        manual: true,
        onSuccess: (data) => {
            handleReset()
            setSuccess('Th??m m???i th??nh c??ng');
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const { run: updateUser } = useRequest((id, data) => updateUserApi(id, data), {
        manual: true,
        onSuccess: (data) => {
            handleReset()
            setSuccess('c???p nh???t th??nh c??ng');
            onSetUpdateId('')
            onSetPageActive(1)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

// =================== HANDEL SELECTED ===========================

    const [citySelected] = useWatch({
        control,
        name: ['province'],
    });

    const [DistrictSelected] = useWatch({
        control,
        name: ['district'],
    });

    useEffect(() => {
        if(citySelected?.value){
            setValue('district', {value:"", label:""})
            setValue('ward', {value:"", label:""})
            getListOfDistricts(citySelected?.value)
        }
    }, [citySelected])

    useEffect(() => {
        if(DistrictSelected?.value){
            getListOfWards(DistrictSelected?.value)
        }
    }, [DistrictSelected])

    useEffect(() => {
        if(updateId){
            getUserDetails(updateId)
        }
        getListOfProvinces()
    }, [])


    const provincesOption = useMemo(
        () =>
            provinces?.map((province) => {
                return {
                    label: province?.Title,
                    value: province?.ID
                }
            }), [provinces])


    const districtsOption = useMemo(
        () =>
            districts?.map((province) => {
                return {
                    label: province?.Title,
                    value: province?.ID
                }
            }), [districts])

    const wardsOption = useMemo(
        () =>
            wards?.map((province) => {
                return {
                    label: province?.Title,
                    value: province?.ID
                }
            }), [wards])

    const onSubmit = (data) =>{

        if(updateId) {
            const value = {
                ...users,
                email: data?.email,
                name: data?.name,
                phone: data?.phone,
                province: data?.province,
                district: data?.district,
                ward: data?.ward,
                address_details: data?.address_details,
                note: data?.note,
            }
            updateUser(updateId, value)

        }else{
            const value = {
                id: String(new Date().getTime()),
                email: data?.email,
                password: '',
                full_name:'',
                name: data?.name,
                phone: data?.phone,
                province: data?.province,
                district: data?.district,
                ward: data?.ward,
                address_details: data?.address_details,
                isAdmin: false,
                img: 'https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-personalpersonalizationprofileuser-abstract-circle-backgro-png-image_1489146.jpg',
                note: data?.note,
                googleId: '',
                facebookId: '',
            }
            createUser(value)
        }
    }

    return (
        <>
            {
                getUserDetailsLoading ? <center><Spin size='large'/></center> : 
                (<form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={[8,0]}>
                        <Col span={8}>
                            <FormMode.InputText
                                width="100%"
                                height="50px"
                                label={'T??n'}
                                isRequired
                                placeholder={'nh???p t??n'}
                                inputName="name"
                                register={register}
                                marginBot="25px"
                                errorMessage={errors?.name?.message}
                            />
                        </Col>
                        <Col span={8}>
                            <FormMode.InputText
                                width="100%"
                                height="50px"
                                label={'email'}
                                isRequired
                                placeholder={'nh???p email'}
                                inputName="email"
                                register={register}
                                marginBot="25px"
                                errorMessage={errors?.email?.message}
                            />
                        </Col>
                        <Col span={8}>
                            {/* <NumberFormat
                                // suffix=" h"
                                label={'SDT'}
                                customInput={FormMode.InputText}
                                placeholder="Nh???p s??? ??i???n tho???i"
                                width="100%"
                                height="50px"
                                inputName="phone"
                                register={register}
                                mask="_"
                                // format="+84 ###-###-###" mask="_"
                                onValueChange={(v) => {
                                    setValue("phone",v.floatValue);
                                }}
                                errorMessage={errors?.phone?.message}
                            /> */}

                            <FormMode.InputText
                                width="100%"
                                height="50px"
                                label={'S??T'}
                                isRequired
                                placeholder={'Nh???p s??? ??i???n tho???i'}
                                inputName="phone"
                                register={register}
                                marginBot="25px"
                                type="number"
                                errorMessage={errors?.phone?.message}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 0]}>
                        <Col span={8}>
                            <FormMode.SelectInput
                                width="100%"
                                height="50px"
                                label={'Ch???n T???nh/Th??nh ph???'}
                                isRequired
                                data={provincesOption}
                                placeholder={provincesOption.length > 0 ? 'Ch???n T???nh/Th??nh ph???': ''}
                                name="province"
                                register={register}
                                control={control}
                                marginBot="25px"
                                errorMessage={errors?.province?.message}
                                isDisabled={getListOfProvincesLoading}
                            />
                        </Col>
                        <Col span={8}>
                            <FormMode.SelectInput
                                width="100%"
                                height="50px"
                                label={'Ch???n Qu???n/Huy???n'}
                                isRequired
                                data={districtsOption}
                                placeholder={districtsOption.length > 0 ? 'Ch???n Qu???n/Huy???n': ''}
                                name="district"
                                register={register}
                                control={control}
                                marginBot="25px"
                                errorMessage=""
                                isDisabled={districtsOption.length === 0 ||getListOfDistrictsLoading}
                            />
                        </Col>
                        <Col span={8}>
                            <FormMode.SelectInput
                                width="100%"
                                height="50px"
                                label={'Ch???n X??/Ph?????ng'}
                                isRequired
                                data={wardsOption}
                                placeholder={wardsOption.length > 0 ? 'Ch???n X??/Ph?????ng': ''}
                                name="ward"
                                register={register}
                                control={control}
                                marginBot="25px"
                                errorMessage=""
                                isDisabled={wardsOption.length === 0 || getListOfWardsLoading}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 0]} style={{marginTop: '25px'}}>
                        <Col span={8}>
                            <FormMode.InputText
                                width="100%"
                                height="50px"
                                label={'?????a ch??? chi ti???t'}
                                isRequired
                                placeholder={'Nh???p ?????a ch??? chi ti???t'}
                                inputName="address_details"
                                register={register}
                                marginBot="25px"
                                errorMessage={errors?.address_details?.message}
                            />
                        </Col>
                        <Col span={16}>
                            <FormMode.InputText
                                width="100%"
                                height="50px"
                                label={'Ghi ch??'}
                                isRequired
                                placeholder={'Nh???p ghi ch??'}
                                inputName="note"
                                register={register}
                                marginBot="25px"
                                errorMessage={errors?.note?.message}
                            />
                        </Col>
                    </Row>
                    <Row gutter={[8, 0]}>
                        <Col span={4}>
                            <Button
                                width="100%"
                                buttonType="primary"
                                padding="10px 0"
                                borderRadius="5px"
                                type="submit"
                                margin="20px 0 0"
                            >
                                {updateId ? 'L??u' : 'T???o'}
                            </Button>
                        </Col>

                        <Col span={4}>
                            <Button
                                width="100%"
                                buttonType="gray"
                                padding="10px 0"
                                borderRadius="5px"
                                type="button"
                                margin="20px 0 0"
                                onClick={handleReset}
                            >
                                reset
                            </Button>
                        </Col>
                    </Row>
                    {
                        resSuccess && (<S.resMessage>{resSuccess}</S.resMessage>)
                    }
                </form>)
            }
        </>
    )
}

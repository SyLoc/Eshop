import React, { useEffect, useState, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import {Row, Col, Progress, Spin} from 'antd';
import FormMode from 'admin/components/common/FormMode';
import { useForm, useWatch } from 'react-hook-form';
import { useRequest } from 'ahooks'; 
import { getCategoriesApi, createProductApi, getProductDetailsApi, updateProductApi } from 'admin/services/apis/productsManagement';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from './constants'
import * as S from './styled';
import Button from 'admin/components/common/Button';
import IconOfButton from 'admin/components/common/Button/Icon';
import {ReactComponent as UploadIcon} from 'assets/images/icons/icon-upload.svg';
import { discount_data } from './mock-data';


export default function Index({ updateId, onSetPageActive, onSetUpdateId }) {
    const [resSuccess, setSuccess] = useState('')
    const [categories, setCategories] = useState([])
    const [image, setImage] = useState('')
    const [productInfo, setProductInfo] = useState({})

    const { 
        register, 
        handleSubmit, 
        setValue, 
        reset,
        watch,
        control, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(Schema),
        defaultValues: {}
    })

    const {run: getCategories } = useRequest((id) => getCategoriesApi(id), {
        manual: true,
        onSuccess: (data) => {
            setCategories(data?.data)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const {loading: getProductDetailsLoading, run: getProductDetails } = useRequest((id) => getProductDetailsApi(id), {
        manual: true,
        onSuccess: (data) => {
            const value = data?.data;
            setProductInfo(value)
            setValue('category', value?.category)
            setValue('description', value?.description)
            setValue('image', value?.image)
            setImage(value?.image)
            setValue('name', value?.name)
            setValue('price_current', value?.price_current)
            setValue('price_old', value?.price_old)
            setValue('discount', value?.discount)
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const { run: createProduct } = useRequest((data) => createProductApi(data), {
        manual: true,
        onSuccess: (data) => {
            handleReset()
            setSuccess('Th??m m???i th??nh c??ng');
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const { run: updateProduct } = useRequest((id, data) => updateProductApi(id, data), {
        manual: true,
        onSuccess: (data) => {
            onSetUpdateId('')
            handleReset()
            setSuccess('C???p nh???t th??nh c??ng');
        },
        onError: (error) => {
            console.log('response error',error)
        },
    });

    const imageChange = watch('image') 

    useEffect(() => {
        if(imageChange){
            setImage(imageChange)
        }
    }, [imageChange])

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        if(updateId){
            getProductDetails(updateId)
        }
    }, [updateId])

    const handleReset = () => {
        reset();
        setImage('')
        setValue('category', {value:"", label:""})
        setValue('discount', {value:"", label:""})
    }

    const onSubmit = (data) =>{

        if(updateId){
            const value = {
                ...productInfo,
                ...data,
            }
            updateProduct(productInfo?.id, value)
        }else{
            const value = {
                id: String(new Date().getTime()),
                disable: false,
                starRating: 0,
                ...data
            }
            createProduct(value)
        }
    }

    return (
        <>
            {
                getProductDetailsLoading ? <center><Spin size='large'/></center> : 
                (<form onSubmit={handleSubmit(onSubmit)}>
                    <Row gutter={[20, 0]}>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <FormMode.InputText
                                        width="100%"
                                        height="50px"
                                        label={'T??n SP'}
                                        isRequired
                                        placeholder={'Nh???p t??n s???n ph???m'}
                                        inputName="name"
                                        register={register}
                                        marginBot="25px"
                                        errorMessage={errors?.name?.message}
                                    />
                                </Col>
                            </Row>
                            <Row gutter={[8,0]}>
                                <Col span={12}>
                                    <FormMode.SelectInput
                                        width="100%"
                                        height="50px"
                                        label={'Danh m???c SP'}
                                        isRequired
                                        data={categories}
                                        placeholder={'Ch???n danh m???c SP'}
                                        name="category"
                                        register={register}
                                        control={control}
                                        marginBot="25px"
                                        errorMessage={errors?.category?.message}
                                    />
                                </Col>

                                <Col span={12}>
                                    <FormMode.SelectInput
                                        width="100%"
                                        height="50px"
                                        label={'Gi???m gi??'}
                                        isRequired
                                        data={discount_data}
                                        placeholder={'Nh???p s??? ph???n tr??m'}
                                        name="discount"
                                        register={register}
                                        control={control}
                                        marginBot="25px"
                                        errorMessage={errors?.discount?.message}
                                    />  
                                </Col>
                            </Row>

                            <Row style={{marginTop:"20px"}}>
                                <Col span={24}>
                                    <FormMode.InputText
                                        width="100%"
                                        height="50px"
                                        label={'???nh'}
                                        isRequired
                                        placeholder={'Nh???p ?????a ch??? h??nh ???nh'}
                                        inputName="image"
                                        register={register}
                                        // onChange={(e) => setImage(e.target.value)}
                                        marginBot="25px"
                                        errorMessage={errors?.image?.message}
                                    />
                                </Col>
                            </Row>

                            {
                                image && (
                                    <Row>
                                        <S.Image src={image} alt="" />
                                    </Row>
                                )
                            }

                            <Row>
                                <Col span={8}>
                                    <S.BtnCustom type="button">
                                        <IconOfButton Icon={UploadIcon} left>
                                            t???i ???nh l??n
                                        </IconOfButton>
                                    </S.BtnCustom>
                                </Col>
                            </Row>

                            <Row gutter={[8, 0]}>
                                <Col span={8}>
                                    <Button
                                        width="100%"
                                        buttonType="primary"
                                        padding="10px 0"
                                        borderRadius="5px"
                                        type="submit"
                                        margin="20px 0 0"
                                    >
                                        {updateId ? 'L??u' : 'T???o m???i'}
                                    </Button>
                                </Col>

                                <Col span={8}>
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
                        </Col>
                        <Col span={12}>
                            <Row gutter={[8,0]}>
                                <Col span={12}>
                                    <NumberFormat
                                        suffix="??"
                                        thousandSeparator
                                        label={'Gi??'}
                                        customInput={FormMode.InputText}
                                        placeholder="Nh???p gi??"
                                        width="100%"
                                        height="50px"
                                        inputName="price_current"
                                        register={register}
                                        onValueChange={(v) => {
                                            setValue("price_current",v.floatValue);
                                        }}
                                        errorMessage={errors?.price_current?.message}
                                    />
                                </Col>
                                <Col span={12}>
                                    <NumberFormat
                                        suffix="??"
                                        thousandSeparator
                                        label={'Gi?? c??'}
                                        customInput={FormMode.InputText}
                                        placeholder="Nh???p gi?? c??"
                                        width="100%"
                                        height="50px"
                                        inputName="price_old"
                                        register={register}
                                        onValueChange={(v) => {
                                            setValue("price_old",v.floatValue);
                                        }}
                                        errorMessage={errors?.price_old?.message}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <S.NoteWrap>
                                    <label>M?? t??? s???n ph???m</label>
                                    <textarea 
                                        name="description" 
                                        {...register("description")}
                                        onChange={(e) =>  setValue("description", e.target.value)}
                                        id="" cols="30" rows="5" />
                                </S.NoteWrap>
                            </Row>
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

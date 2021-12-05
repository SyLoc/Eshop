import React from 'react'
import * as S from './styled';

export default function Layout({ data=[], defaultActiveKey="1", onChange, ...rest }) {

    return (
        <>
            <S.TabsCustom 
                defaultActiveKey={defaultActiveKey} 
                onChange={onChange} 
                { ...rest }>
                {
                    data.map((item) =>(
                        <S.TabPaneCustom tab={item?.title} key={item?.id}>
                            {item?.component}
                        </S.TabPaneCustom>
                    ))
                }
            </S.TabsCustom>
        </>
    )
}

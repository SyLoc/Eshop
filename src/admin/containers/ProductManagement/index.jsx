import React, {useState} from 'react';
import * as S from './styled';
import Manager from './containers/Manager';
import General from './containers/General';

export default function Index() {
    const [pageActive, setPageActive] = useState(1);
    const [updateId, setUpdateId] = useState('');
    
    const handleUpdateId = (id) =>{
        if(id) {
            setPageActive(2) 
            setUpdateId(id)
        }
    }   

    const data = [
        {
            id: 1,
            title:'Danh sách',
            component: <General 
                        onUpdateId={handleUpdateId} 
                        />,
        },
        {
            id: 2,
            title:'Quản lý',
            component: <Manager 
                            updateId={updateId} 
                            // onSetPageActive={setPageActive} 
                            onSetUpdateId={setUpdateId}
                        />,
        }
    ]

    const handleOpenTab = (number) =>{
        if(data.length > 0){
            const result = data.find((item) => item.id === number);
            return result?.component;
        }
    }

    return (
        <>
        <S.Layout>
                <S.Tabs>
                    {
                        data?.map((item)=>(
                            <S.Item key={item?.id}
                                 active={item?.id === pageActive}
                                 onClick={() => setPageActive(item.id)}
                                 >
                                <h2>{item?.title}</h2>
                            </S.Item>
                        ))
                    }
                </S.Tabs>
                <S.Content>
                    {
                        handleOpenTab(pageActive)
                    }
                </S.Content>
            </S.Layout>
        </>
    )
}

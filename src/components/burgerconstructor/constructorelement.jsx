import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import constructor__scroll from './constructorelement.css'




function Constructorelement() {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
            <div className='constructor__scroll custom-scroll'>

            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
                       <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
                       <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
                       <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
                       <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
                       <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
                       <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
            </div>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
          </div>
        )
      }

export default Constructorelement


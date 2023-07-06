import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import constructor__scroll from './constructorelement.css'
import { data } from '../../utils/data';

const bun = data.find((item) => item._id === '60666c42cc7b410027a1a9b1');

const ingredients = data.filter((item) => item.type !== 'bun');




function Constructorelement() {

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + '(верх)'}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
            <div className='constructor__scroll custom-scroll'>

            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />

            </div>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name + '(низ)'}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          </div>
        )
      }

export default Constructorelement


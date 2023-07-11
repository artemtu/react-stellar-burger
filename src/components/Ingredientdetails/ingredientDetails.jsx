import React from 'react'
import styles from './ingredientDetails.module.css'

function ingredientDetails() {
  return (
    <div>
        <div className={styles.picture}>
        <img src="https://code.s3.yandex.net/react/code/meat-01-large.png" alt=" " />
        <p className='text text_type_main-medium mt-4'>Биокотлета из Марсианской магнолии</p> 
        </div>
        <div className={`${styles.rows} mb-15`}>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Калории ккал</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Белки, г</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Жиры, г</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        <div className={styles.calories}>
            <p className='text text_type_main-small mt-8'>Углеводы, г</p>
            <p className='text text_type_main-small'>244,4</p>
        </div>
        </div>
    </div>
  )
}

export default ingredientDetails
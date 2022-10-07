import React from 'react';
import transfers_classes from'./transfersItem.module.scss';

export const TransfersItem = ({isChecked, caption, onChange}) => {

  return (
    <label className={transfers_classes['checkbox']}>
      <input type="checkbox" checked={isChecked} className={transfers_classes['checkbox-input']} onChange={onChange}/>
      <span className={transfers_classes['checkbox-custom']}></span>
      <span className={transfers_classes['checkbox-title']}>{ caption }</span>
    </label>
  )
}
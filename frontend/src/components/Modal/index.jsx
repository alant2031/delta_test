import { useCallback, useEffect, useState } from 'react'
import * as S from "./styled"

export const Modal = ({show, setShow, studentId, handle, disabled}) => {
  
  const onClick = useCallback(async() => {
    await handle()
    setShow(false)
  }, [handle])
  if (show) {
    return (
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Title>
              Remove Student ID: {studentId}
            </S.Title>
          </S.Header> 
          <S.Body>
            Are you sure you want to delete this item? This action cannot be undone.
          </S.Body>
          <S.Footer>
            <button disabled={disabled} type='button' onClick={() => setShow(false)}>
              Cancel
            </button>
            <button disabled={disabled} type='button' onClick={onClick}>
              OK
            </button>
          </S.Footer>
        </S.Content>      
      </S.Container>
    )
  }
  return null;
}

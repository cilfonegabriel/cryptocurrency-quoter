import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`

const useSelectCoin = (label) => {
    
    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
        </>
    )

    return [SelectCoins]
}

export default useSelectCoin

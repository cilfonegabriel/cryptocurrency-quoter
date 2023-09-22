import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`

const useSelectCoin = (label, options) => {
    
    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Select</option>

                {options.map(option => (
                    <option
                        key={option.id}
                        value={option.id}
                    >{option.name}</option>
                ))}
            </select>
        </>
    )

    return [SelectCoins]
}

export default useSelectCoin

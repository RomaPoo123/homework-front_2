import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: "147px",
                marginRight: "12px"
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />

    )
}

export default SuperRange

import React from 'react'

const Input = ({lblName, inputType, inputPlaceHolder, inputName, onChange}) => {
    return (
        <div className='flex flex-col gap-y-1'>
            <label htmlFor="name" className="text-normal text-txt_desc_color">
                {lblName}
            </label>
            <input
                type={inputType}
                placeholder={inputPlaceHolder}
                name={inputName}
                onChange={onChange}
                className="bg-transparent border-txt_desc_color border-[1px] px-2 py-2 rounded-lg focus:outline-none"
            />
        </div>
    )
}

export default Input

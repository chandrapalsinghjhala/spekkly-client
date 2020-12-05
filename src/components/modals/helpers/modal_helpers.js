import {useEffect} from "react";

export const closeModalFromClick = (e, closeModal) => {
    if (closeModal) {
        if (e.target === e.currentTarget) {
            e.preventDefault()
            closeModal()
        }
    }
}

export const useDisableScroll = () => {
    useEffect(() => {
        document.getElementById('html').style.overflow = 'hidden'
        return () => document.getElementById('html').style.overflow = 'scroll'
    })
}
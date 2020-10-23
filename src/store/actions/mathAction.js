const updateOperation = (btnName) => {
    return {
        type: 'CALCULATE',
        content: btnName,
    }
}

export default updateOperation

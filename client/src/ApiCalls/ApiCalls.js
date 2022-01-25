export const updateDev = async (
    language,
    tech,
    setErrorMsg,
    axios,
    formValues,
    clearInputs,
    setUpdated,
    handleClose,
    editDevData
) => {
    if (!language.length || !tech.length)
        setErrorMsg('Please choose your native language and Technology!');
    else {
        try {
            const res = await axios.put(
                `/developers/${editDevData._id}`,
                formValues
            );
            console.log(res.data.newDev);
            clearInputs();
            setUpdated((prevValue) => !prevValue);
            setErrorMsg('');
            handleClose();
        } catch (error) {
            console.log(error);
            setErrorMsg('');
        }
    }
};

export const deleteDev = async (devData, axios, setUpdated) => {
    try {
        await axios.delete(`/developers/${devData._id}`);
        setUpdated((prevValue) => !prevValue);
    } catch (error) {
        console.log(error);
    }
};

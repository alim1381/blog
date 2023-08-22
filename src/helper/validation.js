const commentValidation = (data) => {
    const datas = data
    const errors = {}
    if (!data.name.trim()) {
        errors.name = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.name
    }

    if (!data.email) {
        errors.email = "* این فیلد نباید خالی باشد"
    } else if (!data.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        errors.email = "* لطفا ایمیلی معتبر وارد نمایید"
    } else {
        delete errors.email
    }

    if (!data.text) {
        errors.text = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.text
    }

    return errors
}

export { commentValidation }
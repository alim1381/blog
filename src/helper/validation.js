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
const loginValidation = (data) => {
    const datas = data
    const errors = {}
    if (!data.username) {
        errors.username = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.username
    }
    return errors
}

const postValidation = (data) => {
    const datas = data
    const errors = {}
    if (!data.title) {
        errors.title = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.title
    }

    if (!data.content) {
        errors.content = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.content
    }
    return errors
}

const signinValidation = (data) => {
    const datas = data
    const errors = {}
    
    if (!data.username) {
        errors.username = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.username
    }
    if (data.username && !(!!data.username.match(/^[A-Za-z][A-Za-z0-9]*$/g))) {
        errors.username = "* باید با حروف انگلیسی و اعداد تشکیل شود"
    } else if (data.username) {
        delete errors.username
    }

    if (!data.name) {
        errors.name = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.name
    }

    if (!data.field) {
        errors.field = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.field
    }

    if (!data.description) {
        errors.description = "* این فیلد نباید خالی باشد"
    } else {
        delete errors.description
    }


    return errors
}

export { commentValidation , loginValidation , postValidation , signinValidation }
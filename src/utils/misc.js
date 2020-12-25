export const chunk = (array, size) => {
    const chunked_arr = []
    for (let i = 0; i < array.length; i++) {
        const last = chunked_arr[chunked_arr.length - 1]
        if (!last || last.length === size) {
            chunked_arr.push([array[i]])
        }
        else {
            last.push(array[i])
        }
    }
    return chunked_arr
}

export const toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join("_")

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
export const generateUUID = () => s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()

export const validMimeTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "application/msexcel",
    "application/x-msexcel",
    "application/x-ms-excel",
    "application/x-excel",
    "application/x-dos_ms_excel",
    "application/xls",
    "application/x-xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
]
export const range = (start, end, acc = []) => start === end ? acc.concat(start) : range(start + 1, end, acc.concat(start))

export const acceptedCreditCards = {
    format: {
        "VISA": /^4[0-9]{12}(?:[0-9]{3})?$/,
        "MASTERCARD": /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
        "AMEX": /^3[47][0-9]{13}$/,
        "DISCOVER": /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
        "DINERS": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        "JCB": /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
    },
    message: "pages/direct-booking:payment.card_number_invalid_message"
}

export const acceptedCVC = {
    format: {
        AMEX: /^\d{4}$/,
        others: /^\d{3}$/
    },
    message: "pages/direct-booking:payment.cv2_invalid_message"
}


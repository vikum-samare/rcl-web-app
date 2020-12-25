import { format } from "validate.js"

const paymentDetailsRules = {
    paymentDetailsCardHolderName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:payment.card_holder_name_required_message"
        }
    },
    paymentDetailsCardNumber: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:payment.card_number_required_message"
        }
    },
    paymentDetailsCardExp: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:payment.card_expiry_date_required_message"
        }
    },
    paymentDetailsCardCVC: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:payment.cv2_field_required_message"
        },
        format: {
            pattern: /^[0-9]{3,4}$/,
            flags: "i",
            message: "^pages/direct-booking:payment.cv2_invalid_message"
        }
    }
}

export default paymentDetailsRules

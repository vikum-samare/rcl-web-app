import { generateUUID } from "./misc"

export const deconstructBooking = (booking) => {
    const { rooms, additionalEmail, ...withoutRooms } = booking
    const withOptionalFields = { additionalEmail: { value: additionalEmail || "", error: "" }, guestComment: "", ...withoutRooms }
    return rooms.reduce((acc, room) => {
        const { guests, childCountInMainBeds, ...roomInfo } = room
        const roomId = generateUUID()
        const newGuestsById = guests.reduce((guestAcc, guest) => ({
            ...guestAcc,
            [generateUUID()]: {
                roomId,
                ...guest,
                isChild: false
            }
        }), {})
        const newChildrenById = Array(childCountInMainBeds || 0).fill().reduce((childAcc) => ({
            ...childAcc,
            [generateUUID()]: {
                roomId,
                firstName: "",
                lastName: "",
                isChild: true
            }
        }), {})
        return {
            ...acc,
            roomsById: {
                ...acc.roomsById,
                [roomId]: roomInfo
            },
            guestsById: {
                ...acc.guestsById,
                ...newGuestsById,
                ...newChildrenById
            }
        }
    }, { bookingInfo: withOptionalFields, roomsById: {}, guestsById: {}})
}

const removeEmailIfEmpty = (bookingInfo) => {
    if (bookingInfo.additionalEmail && bookingInfo.additionalEmail.value) return { ...bookingInfo, additionalEmail: bookingInfo.additionalEmail.value }
    else {
        const { additionalEmail, ...withoutEmail } = bookingInfo
        return withoutEmail
    }
}

export const assembleBooking = (bookingInfo, roomsById, guestsById) => {
    const withoutEmail = removeEmailIfEmpty(bookingInfo)
    const allGuests = Object.keys(guestsById).map(id => guestsById[id])
    const rooms = Object.keys(roomsById).reduce((acc, id) => {
        const room = roomsById[id]
        const guestInRooms = allGuests.filter(_ => _.roomId === id)
        const childCountInMainBeds = guestInRooms.reduce((ac, n) => n.isChild ? ac + 1 : ac, 0)
        const guests = guestInRooms.filter(_ => !_.isChild).map(guest => {
            const { roomId, isChild, ...withoutRoomId } = guest
            return withoutRoomId
        })
        return acc.concat({ ...room, guests, childCountInMainBeds })
    }, [])
    return { ...withoutEmail, rooms }
}

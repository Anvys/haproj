export type TResponseWithDetails = {
    detail: string
}
/**
 * API TYPES
 */
export type TWithSessionId = {
    sessionid: string
}
export type TAuthRequest = {
    user: string
    password: string
}
export type TAuthResponse = TWithSessionId & TResponseWithDetails

export type TPingResponse = string

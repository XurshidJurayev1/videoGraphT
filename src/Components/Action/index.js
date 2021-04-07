export const selectPic = (picture) => {
    return{
        type: 'SELECT_PICTURE',
        payload: picture
    }
}
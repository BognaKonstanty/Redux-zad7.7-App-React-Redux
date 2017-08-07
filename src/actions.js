import uuid from 'uuid';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text:'My first comment !',
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text:'My second comment !',
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function ThumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id
	}
}

function ThumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
}

//export addComment;
//export editComment;
//export removeComment;
//export ThumbUpComment;
//export ThumbDownComment;
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
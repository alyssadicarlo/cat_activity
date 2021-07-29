export const ACTION_SET_NAME = 'set_name';
export const ACTION_SET_ACTIVITY = 'set_activity';

export function actionSetName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: name
    }
}

export function actionSetActivity(activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: activity
    }
}
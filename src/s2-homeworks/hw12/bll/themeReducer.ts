type initialStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): initialStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number
}
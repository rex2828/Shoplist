import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { formIsVisible: true, modal: { modalIsVisible: false, id: '' } },
    reducers: {
        toggle(state) {
            state.formIsVisible = !state.formIsVisible
        },
        modalVisible(state, action) {
            state.modal.id = action.payload
            state.modal.modalIsVisible = !state.modal.modalIsVisible
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;
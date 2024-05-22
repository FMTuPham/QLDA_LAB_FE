import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AppState = {
  titlePage: string
  selectedKey: string
}

const initialState = {
  titlePage: 'Trang chủ hệ thống',
  selectedKey: '1'
} as AppState

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetApp: () => initialState,
    setTitlePage: (state, action: PayloadAction<string>) => {
      state.titlePage = action.payload
    },
    setSelectedKey: (state, action: PayloadAction<string>) => {
      state.selectedKey = action.payload
    }
  }
})

export const { setTitlePage, setSelectedKey, resetApp } = appSlice.actions
export default appSlice.reducer

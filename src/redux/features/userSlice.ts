import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  loggedIn: boolean | null
  role: string | null
  accessToken: string | null
  userID?: string
  userData: {
    fullName: string | null
    email: string | null
    role: number
    status: boolean | null
  }
}

const initialState = {
  loggedIn: false,
  role: '',
  accessToken: '',
  userID: '',
  userData: {
    fullName: '',
    email: '',
    role: 0,
    status: null
  },
  statusInThesisStu: false
} as UserState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload
    },
    setRoleUser: (state, action: PayloadAction<string>) => {
      state.role = action.payload
    },
    setUserData: (state, action: PayloadAction<UserState['userData']>) => {
      state.userData = action.payload
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    setUserID: (state, action: PayloadAction<string>) => {
      state.userID = action.payload
    }
  }
})

export const { setLoggedIn, setRoleUser, setUserData, setAccessToken, setUserID, resetUser } =
  userSlice.actions
export default userSlice.reducer

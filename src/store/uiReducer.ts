import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
	isLoading: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any;
}

const initialState: InitialState = {
	isLoading: false,
	error: null,
};

export const uiSlice = createSlice({
	name: 'uiState',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<InitialState['isLoading']>) => {
			state.isLoading = action.payload;
		},
		setError: (state, action: PayloadAction<InitialState['error']>) => {
			state.error = action.payload;
		},
		clearError: state => {
			state.error = null;
		},
	},
});

export const { setLoading, setError } = uiSlice.actions;

export default uiSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const toggleTheme = (updatedTheme: boolean) => {
	localStorage.setItem('isDarkMode', JSON.stringify(updatedTheme));
};

const prefersDark =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;

const isDarkModeLocalStorage = localStorage.getItem('isDarkMode');

const isDarkMode = prefersDark
	? prefersDark
	: JSON.parse(isDarkModeLocalStorage as string);

interface InitialState {
	isDarkMode: boolean;
	isLoading: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	error: any;
}

const initialState: InitialState = {
	isLoading: false,
	error: null,
	isDarkMode,
};

export const uiSlice = createSlice({
	name: 'uiState',
	initialState,
	reducers: {
		toggleDarkMode: state => {
			toggleTheme(!state.isDarkMode);
			state.isDarkMode = !state.isDarkMode;
		},
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

export const { toggleDarkMode, setLoading, setError } = uiSlice.actions;

export default uiSlice.reducer;

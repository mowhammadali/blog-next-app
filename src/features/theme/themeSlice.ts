import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    theme: "emerald" | "night";
}

const initialState: StateType = {
    theme: "emerald",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.theme = "night";
        },
        setLightMode: (state) => {
            state.theme = "emerald";
        },
    },
});

export const { setDarkMode, setLightMode } = themeSlice.actions;

export default themeSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            //state, action: optional
            state.value += 1;
        },
        decrement: (state) => {
            //sama seperti counter/decrement -> counter ini dari store
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            //{value: number}
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("incrementAsync.pending");
            })
            .addCase(
                incrementAsync.fulfilled,
                (state, action: PayloadAction<number>) => {
                    // fulfilled ini maksudnya apa bila sudah selesai , jalankan fungsi berikut
                    state.value += action.payload;
                }
            );
    },
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync", //harus menamai sendiri
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

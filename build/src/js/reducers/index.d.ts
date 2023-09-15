declare const reducer: {
    common: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./common/types").CommonCounterState>;
    framework: import("@reduxjs/toolkit/dist/createReducer").ReducerWithInitialState<import("./framework/types").FrameworkCounterState>;
};
export default reducer;

const initialState = {
  value: 0,
  params: "0",
  operator: null,
};

const ACTIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
  CLEAR: "CLEAR",
  EQUAL: "EQUAL",
  PARAMS: "PARAMS",
};

const calculation = (total, params, operator) => {
  switch (operator) {
    case ACTIONS.ADD:
      return total + params;
    case ACTIONS.SUBTRACT:
      return total - params;
    case ACTIONS.DIVIDE:
      return total / params;
    case ACTIONS.MULTIPLY:
      return total * params;
  }
};

const reducer = (action, params) => {
  switch (action) {
    case ACTIONS.ADD:
      if (!state.operator) {
        state = {
          ...state,
          operator: ACTIONS.ADD,
          value: calculation(state.value, Number(state.params) ?? 0, action),
          params: "0",
        };
      } else {
        state = {
          ...state,
          value: calculation(state.value, Number(state.params) ?? 0, action),
          params: "0",
        };
      }
      break;
    case ACTIONS.SUBTRACT:
      if (!state.operator) {
        state = {
          ...state,
          operator: ACTIONS.SUBTRACT,
          value: calculation(state.value, Number(state.params) ?? 0, action),
          params: "0",
        };
      } else {
        state = {
          ...state,
          value: calculation(state.value, Number(state.params) ?? 0, action),
          operator: null,
          params: "0",
        };
      }
      break;

    case ACTIONS.DIVIDE:
      if (!state.operator) {
        state = {
          ...state,
          operator: ACTIONS.DIVIDE,
          value: calculation(
            state.value || 1,
            Number(state.params) ?? 1,
            action
          ),
          params: "0",
        };
      } else {
        state = {
          ...state,
          value: calculation(
            state.value || 1,
            Number(state.params) ?? 1,
            action
          ),
          operator: null,
          params: "0",
        };
      }
      break;

    case ACTIONS.MULTIPLY:
      if (!state.operator) {
        state = {
          ...state,
          operator: ACTIONS.MULTIPLY,
          value: calculation(
            state.value || 1,
            Number(state.params) ?? 1,
            action
          ),
          params: "0",
        };
      } else {
        state = {
          ...state,
          value: calculation(state.value, Number(state.params) ?? 1, action),
          operator: null,
          params: "0",
        };
      }
      break;

    case ACTIONS.CLEAR:
      state = {
        ...initialState,
      };
      break;
    case ACTIONS.EQUAL:
      state = {
        ...state,
        value: calculation(
          state.value,
          Number(state.params) ?? 0,
          state.operator
        ),
        params: "0",
        operator: null,
      };
      break;
    case ACTIONS.PARAMS:
      state = {
        ...state,
        params: params && state.params === "0" ? params : state.params + params,
      };
      break;
  }
  updateDisplay();
};

const dispatch = (action, params) => reducer(action, params);

const onAdd = () => dispatch(ACTIONS.ADD);
const onSubtract = () => dispatch(ACTIONS.SUBTRACT);
const onMultiple = () => dispatch(ACTIONS.MULTIPLY);
const onDivide = () => dispatch(ACTIONS.DIVIDE);
const onClear = () => dispatch(ACTIONS.CLEAR);
const onParams = (params) => dispatch(ACTIONS.PARAMS, params);
const onEqual = () => dispatch(ACTIONS.EQUAL);
const reset = () => dispatch(ACTIONS.CLEAR);

const updateDisplay = () => {
  totalDiv.innerText = state.value;
  paramsDiv.innerText = state.params;
};

let state = {
  ...initialState,
};

const totalDiv = document.getElementById("value");
totalDiv.innerText = state.value;

const paramsDiv = document.getElementById("params");
paramsDiv.innerText = state.params;

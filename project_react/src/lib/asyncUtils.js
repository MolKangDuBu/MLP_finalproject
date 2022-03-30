export const fetchDataThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return param => async dispatch => {
    dispatch({ type });
    try {
      const payload = await promiseCreator(param); // API 호출
      dispatch({ type: SUCCESS, payload }); // 호출 성공
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 호출 실패
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: data => ({
    loading: false,
    data,
    error: null,
  }),
  error: error => ({
    loading: false,
    data: null,
    error,
  }),
};

// type 은 액션의 타입, key 는 상태의 key (예: posts, post) 입니다.
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  if (!key)
    return (state, action) => {
      switch (action.type) {
        case type:
          return reducerUtils.loading();
        case SUCCESS:
          return reducerUtils.success(action.payload);
        case ERROR:
          return reducerUtils.error(action.payload);
        default:
          return state;
      }
    };
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

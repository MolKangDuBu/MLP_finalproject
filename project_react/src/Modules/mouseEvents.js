const HOVER_HOME = 'mouseEvents/HOVER_HOME';
const BLUR_HOME = 'mouseEvents/BLUR_HOME';

export const hoverHome = homeId => ({ type: HOVER_HOME, homeId });
export const blurHome = () => ({ type: BLUR_HOME });

const initialState = {
  hoveredHome: null,
};

const mouseEvents = (state = initialState, action) => {
  switch (action.type) {
    case HOVER_HOME:
      return {
        ...state,
        hoveredHome: action.homeId,
      };
    case BLUR_HOME:
      return {
        ...state,
        hoveredHome: null,
      };
    default:
      return state;
  }
};

export default mouseEvents;

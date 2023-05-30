import { Users } from './scripts';

interface State {
  supplierList: Users[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  supplierList: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        supplierList: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_USERS_FAILURE':
      return {
        ...state,
        supplierList: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

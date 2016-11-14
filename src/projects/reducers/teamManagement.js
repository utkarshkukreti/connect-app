
import {
  ADD_PROJECT_MEMBER_INTENT,
} from '../../config/constants'

const initialState = {
  isAddingTeamMember: false
}

export const teamManagement = function (state=initialState, action) {

  switch (action.type) {
  case ADD_PROJECT_MEMBER_INTENT:
    return Object.assign({}, state, {
      isAddingTeamMember: action.payload
    })

  default:
    return state
  }
}

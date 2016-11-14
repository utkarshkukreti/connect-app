import { ADD_PROJECT_MEMBER_INTENT } from '../../config/constants'

export function addTeamMemberIntent(isAddingTeamMember) {
  return {
    type: ADD_PROJECT_MEMBER_INTENT,
    payload: isAddingTeamMember
  }
}
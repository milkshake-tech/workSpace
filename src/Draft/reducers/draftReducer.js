import constants from '../constants/constants'

var initialState = {
  draft: {},
  drafts: [],
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch(action.type){
    case constants.FILTER_DRAFTS:
      newState['drafts'] = action.payload
      return newState

    case constants.RECEIVED_DRAFT:
      newState['draft'] = action.draft
      return newState

    case constants.RECEIVED_FEATURED_DRAFTS:
      newState['drafts'] = action.payload
      return newState

    case constants.CREATED_DRAFT:
      newState['draft'] = action.payload
      return newState

    default:
      return state
  }
}

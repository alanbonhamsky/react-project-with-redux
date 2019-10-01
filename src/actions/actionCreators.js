import * as types from './types'

const changePage = value => {
  const page =
    ['form', 'confirm', 'success', 'error'].indexOf(value) !== -1
      ? value
      : 'form'
  return {
    type: types.CHANGE_PAGE,
    value: page
  }
}

const confirmationPending = () => {
  return { type: types.CONFIRMATION_PENDING }
}

const confirmationSuccess = value => {
  return {
    type: types.CONFIRMATION_SUCCESS,
    value
  }
}

const confirmationFailure = value => {
  return {
    type: types.CONFIRMATION_FAILURE,
    value
  }
}

const selectCoolOffDuration = value => {
  return {
    type: types.SELECT_COOL_OFF_DURATION,
    value
  }
}

const submissionPending = () => {
  return { type: types.SUBMISSION_PENDING }
}

const submissionSuccess = value => {
  return {
    type: types.SUBMISSION_SUCCESS,
    value
  }
}

const submissionFailure = value => {
  return {
    type: types.SUBMISSION_FAILURE,
    value
  }
}

const updateContext = value => {
  return {
    type: types.UPDATE_CONTEXT,
    value
  }
}

export {
  changePage,
  confirmationPending,
  confirmationSuccess,
  confirmationFailure,
  selectCoolOffDuration,
  submissionPending,
  submissionSuccess,
  submissionFailure,
  updateContext
}

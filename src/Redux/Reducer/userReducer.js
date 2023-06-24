const inital = {
  loading: true,
  user: [],
  admin: [],
  allUsers: [],
  allAdmins: [],
  updateUsers: [],
  deleteUser: [],
  deleteAdmin: [],
};
const userReducer = (state = inital, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;

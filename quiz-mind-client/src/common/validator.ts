export const userNameValidate = (username: string): boolean => {
  //   let aa = username.match(/^.{6,20}$/);
  if (username.match(/^.{6,20}$/)) {
    return true;
  }
  return false;
};
export const nameValidate = (name: string): boolean => {
  //   let aa = username.match(/^.{6,20}$/);
  if (name.length > 7) {
    return true;
  }
  return false;
};

export const passwordValidate = (name: string): boolean => {
  //   let aa = username.match(/^.{6,20}$/);
  if (name.match(/^.{6,}$/)) {
    return true;
  }
  return false;
};

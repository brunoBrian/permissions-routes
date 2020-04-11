export const getProfileRequiredRoute = profileName => {

  const profiles = {
    owner: ['owner'],
    admin: ['admin', 'owner'],
    manager: ['admin', 'owner', 'manager'],
  };

  return profiles[profileName];
};
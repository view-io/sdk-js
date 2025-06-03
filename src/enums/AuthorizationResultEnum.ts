const AuthorizationResultEnum = Object.freeze({
  Permitted: 'Permitted',
  DeniedImplicit: 'DeniedImplicit',
  DeniedExplicit: 'DeniedExplicit',
  NotFound: 'NotFound',
  Conflict: 'Conflict',
});

export default AuthorizationResultEnum;

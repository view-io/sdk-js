/**
 * Enum for Authorization result.
 * @readonly
 * @enum {string}
 */
export enum AuthorizationResultEnum {
  Permitted = 'Permitted',
  DeniedImplicit = 'DeniedImplicit',
  DeniedExplicit = 'DeniedExplicit',
  NotFound = 'NotFound',
  Conflict = 'Conflict',
}
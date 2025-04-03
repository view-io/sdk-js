import { ApiErrorEnum } from '../enums/ApiErrorEnum';

/**
 * Class representing an API error response.
 */
export default class ApiErrorResponse {
  /**
   * Create an API error response.
   *
   * @param {ApiErrorEnum} error - The error code.
   * @param {Object} [context=null] - Additional contextual information.
   * @param {string} [message=null] - Message of the error.
   * @param {string} [description=null] - Description of the error.
   */
  constructor(error = ApiErrorEnum.AuthenticationFailed, context = null, message = null, description = null) {
    this.error = error;
    this.context = context;
    this.message = message;
    this.description = description;
  }

  /**
   * Get the HTTP status code corresponding to the error.
   *
   * @returns {number} - The HTTP status code for the current error.
   */
  get statusCode() {
    switch (this.error) {
      case ApiErrorEnum.AuthenticationFailed:
        return 401;
      case ApiErrorEnum.AuthorizationFailed:
        return 403;
      case ApiErrorEnum.BadRequest:
        return 400;
      case ApiErrorEnum.Conflict:
        return 409;
      case ApiErrorEnum.DeserializationError:
        return 400;
      case ApiErrorEnum.Inactive:
        return 401;
      case ApiErrorEnum.InternalError:
        return 500;
      case ApiErrorEnum.InvalidRange:
        return 400;
      case ApiErrorEnum.InUse:
        return 409;
      case ApiErrorEnum.NotEmpty:
        return 400;
      case ApiErrorEnum.NotFound:
        return 404;
      case ApiErrorEnum.TooLarge:
        return 413;
      // Add more cases based on ApiErrorEnum...
      default:
        return 500;
    }
  }
}

import HttpError from "./HttpError.js";

export const validateId = (id) => {
  if (id.length !== 24) {
    throw HttpError(
      400,
      "ID must be a 24 character hex string, 12 byte Uint8Array, or an integer"
    );
  }
};

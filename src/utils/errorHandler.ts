import { ErrorResponse } from "../types";

export function handleError(response: ErrorResponse): never {
    const errorMessage = `Error: ${response.code} - ${response.message}`;
    throw new Error(errorMessage);
}

import { VALID_DURATIONS } from "../constants/duration.js";
import ValidationError from "../errors/validation.error.js";

export default function validateDuration(duration: string) {
  if (!VALID_DURATIONS.includes(duration)) {
    throw new ValidationError(
      `Invalid duration: ${duration}. Valid options are: ${VALID_DURATIONS.join(", ")}`,
    );
  }
}

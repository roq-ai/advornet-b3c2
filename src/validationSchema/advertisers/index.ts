import * as yup from 'yup';
import { placementValidationSchema } from 'validationSchema/placements';

export const advertiserValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  placement: yup.array().of(placementValidationSchema),
});

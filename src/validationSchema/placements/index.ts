import * as yup from 'yup';

export const placementValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  advertiser_id: yup.string().nullable().required(),
});

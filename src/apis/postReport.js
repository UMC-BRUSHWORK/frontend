import { POST } from './api';

export const postReport = async ({
  status,
  reporterId,
  reporteeId,
  context,
}) => {
  const body = {
    status,
    reporterId,
    reporteeId,
    context,
  };

  const { data } = await POST(`/report/receive`, body);
  return data;
};

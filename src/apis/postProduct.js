// import { POST } from './api';

export const postProduct = async ({
  fomrData: images,
  title,
  authorId,
  authorNickname,
  delivery,
  price,
  details,
  hashtag,
  category,
}) => {
  const body = {
    images,
    title,
    authorId,
    authorNickname,
    delivery,
    price,
    details,
    hashtag,
    category,
  };
  //   const config = {
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //   };
  console.log(body);
  //   const { data } = await POST(`/product/register`, body, config);
  //   return data;
};

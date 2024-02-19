import { GET } from './api';

export const getChatBuyerList = async ({ AID, PID }) => {
    const { data } = await GET(`/chat/product-list/${AID}?productId=${PID}`)
    return data;
}
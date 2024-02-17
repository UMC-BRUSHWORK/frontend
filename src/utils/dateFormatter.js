export const dateFormat = (date) => {
 const createdAtDate = new Date(date);
    const hours = createdAtDate.getHours();
    const minutes = createdAtDate.getMinutes();

    const meridiem = hours >= 12 ? '오후' : '오전';
    const hours12 = hours % 12 || 12; // 0시일 경우 12로 표시

    const formattedTime = `${meridiem} ${hours12}:${
      minutes < 10 ? '0' : ''
    }${minutes}`;
  
  return formattedTime;
}
const mobilePhone = (phone: string) => {
  const clean = phone.replace(/[^0-9]+/g, "");
  const phoneLength = 11;

  return clean.length !== phoneLength;
};

export default mobilePhone;

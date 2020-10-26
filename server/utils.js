// remove line breaks & whitespaces
export const minifyText = (text) => {
  return text.replace(/(\r\n|\n|\r)/gm, "").replace(/\s/g, "");
};

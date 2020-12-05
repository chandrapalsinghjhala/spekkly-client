import last from "array-last";

export const handleFileChange = (
  e,
  results,
  setImageArray,
  setError,
  options = {}
) => {
  const type = last(results)[1].type;
  if (type === "image/jpeg" || type === "image/png") {
    if (options.operation === "add") {
      setImageArray([
        ...options.attachedImages,
        last(results)[0].target.result,
      ]);
    } else {
      setImageArray(last(results)[0].target.result);
    }
  } else {
    setError("Please upload a jpg or png image");
  }
};

import axios from "../../../../../axios";
import Jimp from "jimp";
import { getAuthHeader } from "../../../../../services/auth_header_services";

export const uploadCompressedImage = async (compressedImage) => {
  let {
    data: { success, url },
  } = await axios.get("/users/signed_url_profile_image", getAuthHeader());
  if (success) {
    await axios.put(url, compressedImage, {
      headers: { "Content-Type": Jimp.MIME_JPEG },
    });
  } else {
    throw new Error();
  }
};

export const compressImage = async (imageData) => {
  const imageRead = await Jimp.read(imageData);
  return await imageRead
    .resize(500, 500)
    .quality(60)
    .getBufferAsync(Jimp.MIME_JPEG);
};

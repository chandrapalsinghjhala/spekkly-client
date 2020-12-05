import imageDataURI from "image-data-uri";
import axios from "../../../../axios";
import Jimp from "jimp/es";
import isURL from "validator/es/lib/isURL";
import { getAuthHeader } from "../../../../services/auth_header_services";

export const formatText = (text, images) => {
  if (text) {
    return text;
  } else {
    return `You sent ${images.length} photo${images.length === 1 ? "" : "s"}`;
  }
};

export const compressImages = async (attachedImages) => {
  let compressedImages = [];

  for (const image of attachedImages) {
    const { dataBuffer } = imageDataURI.decode(
      isURL(image) ? await imageDataURI.encodeFromURL(image) : image
    );
    const jimpImage = await Jimp.read(dataBuffer);
    jimpImage.quality(60);
    if (jimpImage.bitmap.width > 1000 || jimpImage.bitmap.height > 1000) {
      compressedImages.push(
        await (await jimpImage.scaleToFit(1000, 1000)).getBufferAsync(
          Jimp.MIME_JPEG
        )
      );
    } else {
      compressedImages.push(await jimpImage.getBufferAsync(Jimp.MIME_JPEG));
    }
  }

  return compressedImages;
};

export const postImages = async (uploadReadyImages) => {
  const writeUrls = await Promise.all(
    uploadReadyImages.map(() =>
      axios.get("/conversations/signed_write_url", getAuthHeader())
    )
  );

  await Promise.all(
    writeUrls.map(({ data }, index) =>
      axios.put(data.url, uploadReadyImages[index], {
        headers: { "Content-Type": Jimp.MIME_JPEG },
      })
    )
  );

  return writeUrls.map((item) => item.data.fileName);
};

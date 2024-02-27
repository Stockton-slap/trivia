import React from "react";
import Image from "../../common/Image";
import AudioPlayer from "../../Audio/AudioPlayer";

export default function Categories({ questionItem, withAnswer }) {
  const { quote, img1, img2, category, mp3, songName } = questionItem;

  const url = `/media/mp3/ost/${mp3}.mp3`;
  const coverDefaultImage = `/images/ost/${withAnswer ? mp3 : "default"}.jpeg`;

  const renderCategory = (() => {
    switch (category) {
      case "quotes":
      case "trivia":
        return (
          <p
            className={`mt-[8px] font-semibold italic ${
              withAnswer ? "text-xs" : "text-sm"
            }`}
          >
            {quote && `"${quote}"`}
          </p>
        );
      case "screenshots":
        const screenshotImagePath1 = `/images/screenshots/${img1}.jpeg`;
        const screenshotImagePat2 = `/images/screenshots/${img2}.jpeg`;

        return (
          <div
            className={`mt-[20px]  ${
              withAnswer
                ? "flex-center gap-[16px]"
                : "p-[20px] bg-grey rounded-[10px]"
            }`}
          >
            <Image
              imagePath={screenshotImagePath1}
              className={`w-[600px] h-[300px] ${
                withAnswer ? "object-cover" : ""
              }`}
            />
            {withAnswer && (
              <Image
                imagePath={screenshotImagePat2}
                className="w-[600px] h-[300px] object-cover"
              />
            )}
          </div>
        );

      case "ost":
        return (
          <AudioPlayer
            url={url}
            songName={songName}
            coverDefaultImage={coverDefaultImage}
          />
        );

      default:
        break;
    }
  })();

  return renderCategory;
}

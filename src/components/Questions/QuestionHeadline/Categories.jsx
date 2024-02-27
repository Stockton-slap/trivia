import React from "react";
import Image from "../../common/Image";
import MediaPlayer from "../../Audio/MediaPlayer";

export default function Categories({ questionItem, withAnswer }) {
  const { quote, img1, img2, category, media, songName } = questionItem;

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

      case "excerpts":
      case "ost":
        const coverImage = `/images/${
          withAnswer ? `ost/${media}` : "defaultAudioImage"
        }.jpeg`;
        const videoUrl = `/media/video/excerpts/${media}.mp4`;
        let songUrl;
        if (questionItem && media) {
          if (category === "ost") {
            songUrl = `/media/mp3/ost/${media}.mp3`;
          }
          if (category === "excerpts") {
            songUrl = `/media/mp3/excerpts/${media}.mp3`;
          }
        }

        return (
          <MediaPlayer
            songUrl={songUrl}
            songName={songName}
            coverImage={coverImage}
            videoUrl={videoUrl}
            withAnswer={withAnswer}
          />
        );

      default:
        break;
    }
  })();

  return renderCategory;
}

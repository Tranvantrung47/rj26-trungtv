import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./style.css";
import watingforyou from "./ItemMusic/WaitingForYou-MONOOnionn-7733882.mp3";
import tongphu from "./ItemMusic/TongPhu-KeyoVietNam-7802406.mp3";
import emnendunglai from "./ItemMusic/EmNenDungLai-KhangViet-7583852.mp3";
import vimeanhbatchiatay from "./ItemMusic/ViMeAnhBatChiaTay-MiuLe-7503053.mp3";
import aichungtinhduocmai from "./ItemMusic/AiChungTinhDuocMaiCover-ThuongVo-7211055.mp3";
export default function ContentMp3() {
  const musicTracks = [ 
    {
      name: "Watting for you",
      src: watingforyou 
    },
    {
      name: "Tòng Phu",
      src: tongphu
    },
    {
      name: "Em nên dừng lại",
      src: emnendunglai
    },
    {
      name: "Vì mẹ anh bắt chia tay",
      src: vimeanhbatchiatay
    },
    {
      name: "Ai chung tình được mãi",
      src: aichungtinhduocmai
    },
   
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="ContentMp3">
      <div className="song">
        <img src="https://cdn.pixabay.com/photo/2022/10/27/17/51/woman-7551415__340.jpg" alt="" />
      </div>
      <AudioPlayer
        style={{ borderRadius: "1rem" }}
        autoPlay
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}


import styles from "./Video.module.css";


export const VideoComponent = ({ video_link }) => {
    const videoId = getYouTubeId(video_link);
    console.log(videoId)
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className={styles.videoContainer}>
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    )
};

function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
  
    return (match && match[2].length === 11) ? match[2] : null;
  }
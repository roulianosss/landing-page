import LogoSocialNetwork from './components/logo-social-network';
import styles from './video-container.module.css'


type videoProps = {
    url: string;
};

const VideoContainer = ({url} : videoProps) => {
    return (
      <div className={styles.videoContainer}>
        <h3>On vous en dit plus en vidéo </h3>
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.video}
        ></iframe>
        <div className={styles.socialLinksContainer}>
          <div className={styles.socialTextContainer}>
            <p>Vous aimez nos talents d’acteurs ? </p>
            <b>Retrouvez nous sur Youtube et Instagram </b>
          </div>
          <div className={styles.socialLogoContainer}>
            <LogoSocialNetwork
              url="https://www.instagram.com/nojykoff/?hl=fr"
              srcImg="/assets/logos/instagram.svg"
              size={46}
              altImg="logo instagram"
            />
            <LogoSocialNetwork
              url="https://www.facebook.com/NOJYK/"
              srcImg="/assets/logos/facebook.png"
              size={46}
              altImg="logo facebook"
            />
            <LogoSocialNetwork
              url="https://www.tiktok.com/@nojykoff/"
              srcImg="/assets/logos/tiktok.png"
              size={46}
              altImg="logo tiktok"
            />
            <LogoSocialNetwork
              url="https://twitter.com/Nojykoff"
              srcImg="/assets/logos/twitter.png"
              size={46}
              altImg="logo twitter"
            />
            <LogoSocialNetwork
              url="https://www.youtube.com/channel/UCeF2gfs9PR2PeA6--5ruryg"
              srcImg="/assets/logos/youtube.svg"
              size={46}
              altImg="logo youtube"
            />
            <LogoSocialNetwork
              url="ttps://fr.linkedin.com/company/nojyk"
              srcImg="/assets/logos/linkedin.png"
              size={46}
              altImg="logo linkedin"
            />
          </div>
        </div>
      </div>
    );
  }

export default VideoContainer;


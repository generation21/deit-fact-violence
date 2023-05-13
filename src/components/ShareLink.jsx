import styles from "./ShareLink.module.css";
import FaceBookLink from "./ShareLink/FaceBookLink";
import KakaoLink from "./ShareLink/KakaoLink";
import LinkCopy from "./ShareLink/LinkCopy";
import Twiter from "./ShareLink/Twiter";

export default function ShareLink() {
  return (
    <div className={styles.container}>
      <KakaoLink />
      <FaceBookLink />
      <Twiter />
      <LinkCopy />
    </div>
  );
}

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaBook,
  FaRegSmileBeam,
  FaHeart,
  FaBlog,
} from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { GiHumanEar } from "react-icons/gi";

import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        {/* Introduce */}
        <div className={`section ${styles.main}`}>
          <div>
            <motion.div {...headTextAnimation}>
              <h1 className={`${archivoBlack.className} ${styles.name}`}>
                Airi Narita
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <h2 className={styles.title}>~Nothing impossible!!!~</h2>
              <p className={styles.description}>
                学習の中で、今まで継続していることとして
                <br />
                自分の知識定着や、周りの学習者のためにも学んだことを
                <br />
                毎日アウトプットを行なっています。
                <br />
                <strong>&quot;アウトプットこそ最大の学び &quot;</strong>
                <br />
                ぜひ以下のリンクからご覧ください！
              </p>
            </motion.div>
            <motion.div {...headContentAnimation} className={styles.sns}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.snsItem}
              >
                <a href="https://twitter.com/aaaairinkiyowo" target="_blank">
                  <FaTwitter size={"1.6rem"} />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.snsItem}
              >
                <a href="https://github.com/airinarita" target="_blank">
                  <FaGithub size={"1.6rem"}></FaGithub>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.snsItem}
              >
                <a href="https://zenn.dev/airiswim" target="_blank">
                  <SiZenn size={"1.6rem"} />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.snsItem}
              >
                <a href="https://airin.hatenablog.jp/archive" target="_blank">
                  <FaBlog size={"1.6rem"} />
                </a>
              </motion.div>
              
              
            </motion.div>
          </div>
          <motion.div {...headImageAnimation}>
            <div className={styles.selfImage}>
              <img className={styles.selfImage} src="/airi.jpg" />
            </div>
          </motion.div>
        </div>
        {/* P */}
        <div className={`section ${styles.personal}`}>
          <h2 className="sectionTitle">Personal</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={styles.personalInner}
          >
            <motion.div variants={item} className={styles.personalCard}>
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                className={styles.personalIcon}
              >
                <FaHeart size={"3rem"} />
              </motion.div>
              <p>
                <strong>興味と好奇心の塊です</strong>
                <br />
                興味関心を持ったものは、やらない以外にない！そしてやるときめたら最後までとことん知りたい！経験したい！という性格です。
                ページトップにも書いた通り、不可能なことはないと考えています。
                <strong>
                  人間は努力次第で自分の想像を超えられるし、その先にまた新しい可能性が待っている
                </strong>
                と思っています。
              </p>
            </motion.div>
            <motion.div variants={item} className={styles.personalCard}>
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                className={styles.personalIcon}
              >
                <FaBook size={"3rem"} />
              </motion.div>
              <p>
                <strong>勉強すること、新しい刺激が好きです</strong>
                <br />
                私が勉強で心掛けている3点は...
                <br />【 <strong>1. 絶対に１日１つアウトプット</strong>】<br />
                いいインプットがあってこそアウトプットができるし、アウトプットできてこそ定着!
                <br />【 <strong>2. 理論の理解</strong>】<br />
                &quot;<strong>なぜ、何のために??</strong>&quot;
                なんでこの言語が生まれたのか？<strong>意味や経緯、歴史</strong>
                を探っていくことで適切なコードをかけるようになると思うし、応用できる知識にするためにも、必須だと思っています。他の言語学ぶ時も入ってきやすいです。
                <br />【 <strong>3. なんでもやってみる！</strong>】<br />
                失敗してこそ学びが大きい!
                <strong>やってみてこそわかることの情報量が多い！</strong>
                やってみない理由なんてある？❤︎
              </p>
            </motion.div>
            <motion.div variants={item} className={styles.personalCard}>
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                className={styles.personalIcon}
              >
                <FaRegSmileBeam size={"3rem"} />
              </motion.div>
              <p>
                <strong>コミュニケーションが好きです</strong>
                <br />
                前職は<strong>鍼灸師</strong>
                をしており、常に相手のニーズを探りながら背景を踏まえてベストな答えを出すことを心がけておりました。
                <br />
                開発も好きですが、やはり人とお話しすることがとても好きです。
                <strong>
                  様々な人の考えや、経験に触れながら協力することでこそ、学びも発想も人生も！より深まる
                </strong>
                と考えているので、ぜひ一緒に頑張りましょう！
              </p>
            </motion.div>
          </motion.div>
          <h3>
            ■ Personality:{" "}
            <a
              href="https://www.16personalities.com/estp-personality"
              target="_blank"
            >
              {" "}
              ESTP
            </a>
          </h3>
        </div>
        {/* S */}
        <div className={`section ${styles.skill}`}>
          <h2 className="sectionTitle">Skill</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={styles.skillInner}
          >
            <motion.div variants={item} className={styles.skillCard}>
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                className={styles.skillIcon}
              >
                <h4
                  className={`${archivoBlack.className} ${styles.skillCardTitle}`}
                >
                  BACKEND
                </h4>
              </motion.div>
              <p>
                <strong>■ Ruby</strong>
                <br />
                <strong>■ Ruby on Rails</strong>
                <br />
                <br />
                以下で表示しているポートフォリオ
                <br />
                &quot;Together&quot;は
                <br />
                Ruby on Railsで製作いたしました。
                <br />
                今後はJAVAに挑戦していきたい!
              </p>
            </motion.div>
            <motion.div variants={item} className={styles.skillCard}>
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                className={styles.skillIcon}
              >
                <h4
                  className={`${archivoBlack.className} ${styles.skillCardTitle}`}
                >
                  FRONTEND
                </h4>
              </motion.div>
              <p>
                <strong>■ JavaScript</strong>
                <br />
                <strong>■ REACT</strong> -学習中
                <br />
                <strong>■ Next.js</strong> -学習中
                <br />
                <strong>■ Vue.js</strong> -学習中
                <br />
                <strong>■ HTML,CSS</strong>
                <br />
                <strong>■ Sass(Scss)</strong>
                <br />
                <br />
                このページはREACTとNext.jsで製作しています。
                学習に伴い改良を重ねていきます！
                <br />
                &quot;Together&quot;のデザインはJavaScriptとScSSを用いました。
              </p>
            </motion.div>
            <motion.div variants={item} className={styles.skillCard}>
              <motion.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                className={styles.skillIcon}
              >
                <h4
                  className={`${archivoBlack.className} ${styles.skillCardTitle}`}
                >
                  INFRA
                </h4>
              </motion.div>
              <p>
                <strong>■ AWS</strong>
                <br />
                <br />
                基本的なVPC, EC2, IAM, AMI, S3, RDS...
                <br />
                などです。
                <br />
                まだまだインフラ部分の知識は疎いので努力します！
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Slider */}
        <div className={`section ${styles.slider}`}>
          <div className={styles.sliderInner}>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/pc.png" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/daigaku.jpg" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/ww.jpg" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/study.jpg" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/aws.jpg" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/fes.jpg" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/dmm.png" />
            </div>
            <div className={styles.sliderItem}>
              <img className={styles.sliderItem} src="/image.jpg" />
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <div className={`section ${styles.portfolio}`}>
          <h2 className="sectionTitle">Portfolio</h2>
          <div className={styles.portfolioInner}>
            <div className={styles.portfolioCard}>
              <img className={styles.portfolioImage} src="/together.gif" />
              <div className={styles.portfolioContent}>
                <div className={styles.portfolioHeader}>
                  <h4 className={styles.portfolioTitle}>
                    <a href="https://narita-airi.com/" target="_blank">
                      Together
                    </a>
                  </h4>
                  <br />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://github.com/AiriNarita/together"
                      target="_blank"
                    >
                      <FaGithub size={"1.6rem"}></FaGithub>
                    </a>
                  </motion.div>
                </div>
                <p className={styles.portfolioDescription}>
                  <strong>技術ブログ＆学習イベント投稿サイト</strong>
                  <br />
                  <strong>
                    &quot;If You Want To Go Far, Go Together&quot;
                    (遠くへ行きたいならみんなで行け)
                  </strong>
                  <p>※現在停止中...</p>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

const headImageAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

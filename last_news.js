import Last_news_items from "./last_news_items";

const Last_news = (props) => {
  return (
    <div className="last_news">
      <ul>
        <Last_news_items
          title="What can the latest Java innovations do for your business?"
          text="Join Oracle Java leaders Georges Saab and Donald Smith on a May 17
                webinar to explore innovations in the world's leading application
                development platform."
          imgs="./imgs/img01.png"
          url="#none"
          content="Register now"
        />
        <Last_news_items
          title="Oracle Autonomous Data Warehouse breaks through boundaries"
          text="New innovations simplify data access and sharing across
                organizations and clouds at significantly reduced costs."
          imgs="./imgs/img02.png"
          url="#none"
          content="Learn more"
        />
        <Last_news_items
          title="Try OCI Free Tier"
          text="Oracle Cloud Free Tier lets anyone build, test, and deploy
                applications on Oracle Cloud—for free. Sign up once, get access to
                two free offers."
          imgs="./imgs/img03.png"
          url="#none"
          content="Start your trial today"
        />
      </ul>
    </div>
  );
};
export default Last_news;

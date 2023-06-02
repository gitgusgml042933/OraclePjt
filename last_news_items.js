const Last_news_items = (props) => {
  return (
    <li>
      <div className="title">{props.title}</div>
      <div className="text">{props.text}</div>
      <div className="thum">
        <img src={props.imgs} />
      </div>
      <div className="go_btn">
        <a href={props.url}>{props.content}</a>
      </div>
    </li>
  );
};
export default Last_news_items;

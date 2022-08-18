import {Content, Title} from "./index";
// import Title from "./Title";
// import Content from "./Content";

const Article = (props) => {
  return(
    <div>
      <Title title={props.title}/>
      <Content content={props.content}/>
    </div>
  );
};

export default Article;
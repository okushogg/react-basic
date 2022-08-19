import {useState} from "react";
import {Title, Content, PublishButton} from "./index";

const Article = (props) => {
  const[isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }
  // console.log(isPublished)
  return (
    <div>
      <Title title={props.title}/>
      <Content content={props.content}/>
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  );
};

export default Article;
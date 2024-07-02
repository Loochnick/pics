import "./ImageList.css";
import ImageShow from "./ImageShow";
import DefaultImages from "./DefaultImages";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });

  return (
    renderedImages.length ?
    <div className="image-list">{renderedImages}</div> :
    <DefaultImages />
  )
}

export default ImageList;
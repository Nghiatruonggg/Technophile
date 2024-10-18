import { Button, Card } from "react-bootstrap";
import styles from "./PostsCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../../reducers/postsCRUDSlice";
import ToastPopup from "../../../popups/ToastPopup";

const PostsCard = ({ post }) => {
  const dispatch = useDispatch();

  const deleteData = {
    id: post.id,
    post: post,
  };

  const removePost = async () => {
    try {
      const result = await dispatch(deletePost(deleteData));
      if (deletePost.fulfilled.match(result)) {
        ToastPopup({ message: "Delete Success!", type: "success" });
      }
      if (deletePost.rejected.match(result)) {
        const errorMessage = result.payload.message || "Please Try again later";
        ToastPopup({ message: `${errorMessage}`, type: "error" });
      }
    } catch (error) {
      const errorMessage = error.message || "Please Try again later";
      ToastPopup({ message: `${errorMessage}`, type: "error" });
    }
  };

  return (
    <div className={styles.cardWrap}>
      <Card>
        <Card.Img src={post.post_thumbnail} />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{post.title}</Card.Title>
          <Card.Text className={styles.textDescription}>
            {post.post_description}
          </Card.Text>
        </Card.Body>

        <div className={styles.wrapButton}>
          <Link to={`/dashboard/posts/edit/${post.slug}`}>
            <Button className={styles.editButton}>Edit</Button>
          </Link>

          <Link>
            <Button className={styles.deleteButton} onClick={removePost}>
              Delete
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default PostsCard;

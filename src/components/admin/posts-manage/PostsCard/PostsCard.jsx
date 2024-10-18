import { Button, Card } from "react-bootstrap";
import styles from "./PostsCard.module.css";

const PostsCard = ({ post }) => {
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

        <Button className={styles.editButton}>Edit</Button>
      </Card>
    </div>
  );
};

export default PostsCard;

import { Col, Row } from 'react-bootstrap'
import PostsTable from '../../components/admin/posts-manage/PostsTable'
import { Link } from 'react-router-dom'

const PostManage = () => {
  return (
    <Row>
        <Col>
            <div className='common-listing'>
                <div className='listing-header'>
                    <p className='chart-title'>Post Management</p>
                    <Link to="/dashboard/posts/add">
                        <button className='add-product'>Add New Post</button>
                    </Link>
                </div>

                <div className='post-manage'>
                    <PostsTable/>
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default PostManage
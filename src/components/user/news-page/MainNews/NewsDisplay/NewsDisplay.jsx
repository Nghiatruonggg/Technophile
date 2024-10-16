import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsDisplay = ({styles}) => {
  return (
    <Col xs={12} sm={12} md={8}>
    <div className={styles.newsDisplay}>
      <Link className={styles.newsCard}>
        <img
          src="https://www.reuters.com/resizer/v2/HC4KL53Z5NOSLCFYE2PWPKJYAM.jpg?auth=c0245a098d9aafc4226fb5d40e837182e0993efbbfd8859095773dfa73bfca0a&width=1200&quality=80"
          alt=""
        />

        <div className={styles.newsText}>
          <h2>10 tips for decentralizing</h2>
          <p>
            Donec metus lorem, vulputate at sapien sit amet, auctor
            iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
            velit.Aliquam tristique libero at dui sodales, et placerat
            orci lobortis. Maecenas ipsum neque, elementum id dignissim
            et, imperdiet vitae mauris.
          </p>
          <Button>Read More</Button>
        </div>
      </Link>
    </div>

    <div className={styles.newsDisplay}>
      <Link className={styles.newsCard}>
        <img
          src="https://www.reuters.com/resizer/v2/HC4KL53Z5NOSLCFYE2PWPKJYAM.jpg?auth=c0245a098d9aafc4226fb5d40e837182e0993efbbfd8859095773dfa73bfca0a&width=1200&quality=80"
          alt=""
        />

        <div className={styles.newsText}>
          <h2>10 tips for decentralizing</h2>
          <p>
            Donec metus lorem, vulputate at sapien sit amet, auctor
            iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
            velit.Aliquam tristique libero at dui sodales, et placerat
            orci lobortis. Maecenas ipsum neque, elementum id dignissim
            et, imperdiet vitae mauris.
          </p>
          <Button>Read More</Button>
        </div>
      </Link>
    </div>

    <div className={styles.newsDisplay}>
      <Link className={styles.newsCard}>
        <img
          src="https://www.reuters.com/resizer/v2/HC4KL53Z5NOSLCFYE2PWPKJYAM.jpg?auth=c0245a098d9aafc4226fb5d40e837182e0993efbbfd8859095773dfa73bfca0a&width=1200&quality=80"
          alt=""
        />

        <div className={styles.newsText}>
          <h2>10 tips for decentralizing</h2>
          <p>
            Donec metus lorem, vulputate at sapien sit amet, auctor
            iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus
            velit.Aliquam tristique libero at dui sodales, et placerat
            orci lobortis. Maecenas ipsum neque, elementum id dignissim
            et, imperdiet vitae mauris.
          </p>
          <Button>Read More</Button>
        </div>
      </Link>
    </div>
  </Col>
  )
}

export default NewsDisplay
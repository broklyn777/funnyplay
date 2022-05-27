/* eslint-disable prettier/prettier */
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import { data } from 'autoprefixer'

export default function einar({ posts }) {
  return (
    <div className="mt-5">
      {posts.map((postx, index) => (
        <Link href={'/blog/' + postx.slug} passHref key={index}>
          <div className="card pointer mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{postx.frontMatter.title}</h5>
                  <p className="card-text">{postx.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{postx.frontMatter.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                {/* <Image
                                    src={data.frontMatter.images}
                                    className="img-fluid mt-1 rounded-start"
                                    alt="thumbnail"
                                    width={500}
                                    height={400}
                                    objectFit="cover"
                                /> */}
              </div>
            </div>
          </div>
        </Link>
      ))}{' '}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('data'))

  const posts = files.map((filename) => {
    const markDownWithMeta = fs.readFileSync(path.join('data', filename))

    const { data: frontMatter } = matter(markDownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })
  return {
    props: {
      posts,
    },
  }
}

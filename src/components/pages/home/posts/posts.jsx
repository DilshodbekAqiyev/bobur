import { Heading3, Heading5 } from '../../../common'
import { Post } from './post'
import { posts } from '../../../../data/posts'

export const Posts = () => {
  return (
    <div className="text-center my-[100px]">
      <Heading3 styles="text-9">Our Blog Posts</Heading3>
      <Heading5 styles="my-[35px]">
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </Heading5>
      <div className="flex items-center gap-[44px]">
        {posts.map((post) => (
          <Post key={post.id} type={post.name} img={post.imgUrl} />
        ))}
      </div>
    </div>
  )
}

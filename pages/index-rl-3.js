import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import projectsData from '@/data/projectsData'
// import Link from '@/components/Link'
import Card2 from '@/components/Card2'

const MAX_DISPLAY = 2
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-green-400 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-6xl md:leading-14">
            RoligLek
          </h1>
          {/* -----------------------HERO -------- */}
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className=" container py-12">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-3xl font-semibold">Hitta lekar enkelt med Roliglek.se</h3>
              <ul className="... list-inside bg-rose-200"></ul>
              <div className="pt-4">
                <ul>
                  <li className="">
                    <div className="flex items-center">
                      <div className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#34D399"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-lg text-gray-500">
                        Sök lekar utifrån ett visst tillfälle, ålder och antal deltagare.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div>
              <img className="" src="/static/images/kids-backyard.png" alt="Hoppa rep" />
            </div> */}
          </div>
        </div>

        {/* -------------------GRID AREA-------------------------------- */}

        <div className=" grid grid-cols-1 gap-4 py-6 lg:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((d) => (
            <Card2
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>

        {/* <div className="container py-12">
          <div className="grid grid-cols-3 gap-2">
            {projectsData.map((d) => (
              <Card2
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className=" bg-red-200 p-3 rounded">1</div>
          <div className=" bg-red-200 p-3 rounded">2</div>
          <div className=" bg-red-200 p-3 rounded">3</div>
          <div className=" bg-red-200 p-3 rounded">4</div>
          <div className=" bg-red-200 p-3 rounded">5</div>
          <div className=" bg-red-200 p-3 rounded">6</div>
          <div className=" bg-red-200 p-3 rounded">7</div>
          <div className=" bg-red-200 p-3 rounded">8</div>
          <div className=" bg-red-200 p-3 rounded">9</div>
        </div> */}
      </div>
    </>
  )
}

import Link from 'next/link';
import dbConnect from '../lib/dbConnect'
import Demo from '../models/Demo'

const Index = ({ demos }) => (
  <>
    {demos.map((demo) => (
      <div key={demo._id}>
        <div className="card">
          <img src={demo.image_url} />
          <div className="main-content">
            <p> {demo.fileBody}</p>
            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${demo._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${demo._id}`}>
                <button className="btn view">View</button>
              </Link>
              <br />
            </div>
          </div>
        </div>
        
      </div>
    ))}
  </>
)

export async function getServerSideProps() {
  
  await dbConnect()
  
  const result = await Demo.find({})
  const demos = result.map((doc) => {
    const demo = doc.toObject()
    demo._id = demo._id.toString()
    return demo
  })

  return { props: { demos: demos } }
}

export default Index

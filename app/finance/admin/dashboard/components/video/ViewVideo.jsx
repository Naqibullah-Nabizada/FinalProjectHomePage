import React from 'react'
import Dashboard from '../../Dashboard'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../context/context'
import { useEffect } from 'react'

const ViewVideo = () => {
  const {getAllVideo,allVideo,deleteVideo} = useContext(AuthContext)
  
  useEffect(()=> {
    getAllVideo()
  }, [])
  return (
   <Dashboard >
      
      <div className="is-flex is-justify-content-end">
        <Link to="/add-video" className="button px-6 is-success mb-6">
          افزودن ویدیو
        </Link>
      </div>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>شماره</th>
            <th>ویدیو</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
            {
              allVideo && allVideo.map((video, index)=> (
                <tr key={video.id}>
                <td>{index + 1}</td>
                <td>
                  <video src={video.url} width="200" controls></video>
                </td>
                <td>
                  <button className='button is-danger' onClick={()=> deleteVideo(video.id)}>حذف</button>
                </td>
              </tr>
              ))
            }
        </tbody>
      </table>
   </Dashboard>
  )
}

export default ViewVideo
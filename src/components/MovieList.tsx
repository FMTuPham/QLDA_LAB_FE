
import { useEffect, useState } from "react"
import Movie from "../types/movie.type"
import { Table, TableColumnsType } from "antd"
import { getMovieList } from "../Api/service/movie.service"
function MovieList() {
  const [dataSource, setDataSource] = useState<Movie[]>([])
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const fetchData = async () => {
    const movieRes = await getMovieList()
    console.log(movieRes)
    if (movieRes.status) {
      const movieData = movieRes.data
      const listOfMovie = movieData.map((item: Movie, index: number) => {
        return {
          serial: index + 1,
          ...item
        }
      })
      setDataSource(listOfMovie)
    }
  }
  const columns: TableColumnsType<Movie>= [
    {
      title: 'STT',
      width: '4%',
      dataIndex: 'serial',
      key: 'serial',
      align: 'center'
    },
    {
      title: 'Tên',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: 'Thể loại',
      dataIndex: 'genre',
      key: 'genre',
      align: 'center'
    },
    {
      title: 'Đạo diễn',
      dataIndex: 'director',
      key: 'director',
      align: 'center'
    },
    {
      title: 'Năm phát hành',
      dataIndex: 'releaseYear',
      key: 'releaseYear',
      align: 'center'
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      align: 'center'
    }
  ]
  
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      bordered
    />
  )
}

export default MovieList
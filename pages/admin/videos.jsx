import React from "react";
import Sidebar from "./index";
const videos = () => {
  return <Sidebar></Sidebar>;
};
const VideosTable = () => {
  const [videos, setVideos] = useState([]);
  console.log(videos);
  const getAllUsers = () => {
    return axios
      .get("http://localhost:3000/api/videos")
      .then((res) => res.data.videos);
  };
  useEffect(() => {
    getAllUsers().then((data) => {
      setVideos(data);
    });
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Thumbnail</Th>
            <Th>CreatedBy</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {videos
            ? videos.map((course) => (
                <Tr>
                  <Td>{course.title}</Td>
                  <Td>
                    <Image width={100} src={course.thumbnail} />
                  </Td>
                  <Td>
                    {course.createdBy ? course.createdBy.name : "User Deleted"}
                  </Td>
                  <Td>{course.isFree ? "FREE" : "PAID"}</Td>
                </Tr>
              ))
            : "No videos found"}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default videos;

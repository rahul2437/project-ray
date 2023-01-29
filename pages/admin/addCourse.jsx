import { Text, VStack } from "@chakra-ui/react";
import Sidebar from "./index";
import { useSelector } from "react-redux";
import Link from "next/link";
import AddForm from "../../components/Admin/AddCourseForm";
const initState = {
  title: "",
  slug: "",
  description: "",
  thumbnail: "",
  isFree: true,
};

export default function AddCourseCard() {
  const { isAuth, user } = useSelector((store) => store.AuthReducer);
  return (
    <Sidebar>
      {isAuth && user?.role !== "student" ? (
        <AddForm />
      ) : (
        <VStack bg={"#efefef"} p={"1rem"} boxShadow={"2xl"} align={"center"}>
          <Text fontSize={"3xl"} bg={"#efefef"} p={"1rem"} align={"center"}>
            Please Login
          </Text>
          <Link href={"/login"}>
            <Text color={"blue.300"}>Login</Text>
          </Link>
        </VStack>
      )}
    </Sidebar>
  );
}

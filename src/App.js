import "./App.css";
import { Admin, EditGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Users } from "./users";
import { Posts } from "./posts";
import { EditPost } from "./posts/EditPost";
import { CreatePost } from "./posts/CreatePost";
import UsersIcon from "@mui/icons-material/Group";
import PostsIcon from "@mui/icons-material/LibraryBooks";
import { Dashboard } from "./components/Dashboard";
import authProvider from "./authProvider";

function App() {
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  );
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        icon={PostsIcon}
        list={Posts}
        edit={EditPost}
        create={CreatePost}
      />
      <Resource
        name="users"
        icon={UsersIcon}
        list={Users}
        recordRepresentation="name"
      />
    </Admin>
  );
}

export default App;

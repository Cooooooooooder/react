import Post from "./post.jsx";
import Button from "./button.jsx";
import "./body.css";

export default function Body() {
  const posts = [
    {
      id: 1,
      content: "this is the content 1",
      children: (
        <>
          <h2>20</h2>
          <h2>Hamoksha Academy</h2>
        </>
      ),
    },
    {
      id: 2,
      content: "this is the content 2",
      children: <h2>Hello World</h2>,
    },
    {
      id: 3,
      content: "this is the content 3",
      children: <h2>Post 3</h2>,
    },
    {
      id: 4,
      content: "this is the content 4",
      children: <h2>Post 4</h2>,
    },
    {
      id: 5,
      content: "this is the content 5",
      children: <h2>Post 5</h2>,
    },
  ];

  const buttons = [
    {
      id: 1,
      title: "add",
      children: <p>💝💝💝</p>,
    },
    {
      id: 2,
      title: "more",
      children: (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/070/876/172/small/a-sunset-over-a-field-with-a-crescent-moon-photo.jpeg"
          alt="image"
        />
      ),
    },
    {
      id: 3,
      title: "nore",
      children: <p>🔥🔥🔥</p>,
    },
    {
      id: 4,
      title: "save",
      children: <p>✅✅✅</p>,
    },
    {
      id: 5,
      title: "delete",
      children: <p>❌❌❌</p>,
    },
  ];

  var main_content = posts.map((post) => (
    <Post key={post.id} content={post.content}>
      {post.children}
    </Post>
  ));

  var sidebar_content = buttons.map((button) => (
    <Button key={button.id} title={button.title}>
      {button.children}
    </Button>
  ));
  
  return (
    <div className="body">
      <div className="main-content">{main_content}</div>

      <div className="sidebar">{sidebar_content}</div>
    </div>
  );
}

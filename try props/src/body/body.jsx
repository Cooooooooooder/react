import Post from "./post.jsx";
import Button from "./button.jsx";
import "./body.css";

export default function Body() {
  return (
    <div class="body">
      <div className="main-content">
        <Post content="this is the content 1">
          <h2 >20</h2>
          <h2>Hamoksha Academy</h2>
        </Post>
        <Post content="this is the content 2">
          <h2>Hello world</h2>
        </Post>
        <Post content="this is the content 3">
          <h2>Post 3</h2>
        </Post>
      </div>

      <div className="sidebar">
        <Button title="add" >
          <p>💝💝💝</p>
        </Button>
        <Button title="more" >
          <img src="https://static.vecteezy.com/system/resources/thumbnails/070/876/172/small/a-sunset-over-a-field-with-a-crescent-moon-photo.jpeg"/>
        </Button>
        <Button title="nore" >
            <p>💝💝💝</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx1QhrplP5aGESP-JfE34WKVF_YMokoU1e_Ui-2FRx4S9OeLZ6HqfdC0&s=10" alt="image"/>

        </Button>
        
      </div>
    </div>
  );
}

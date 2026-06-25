import Post from "./post.jsx";
import Button from "./button.jsx";
import "./body.css";
import "./button.css";

export default function Body() {
  return (
    <div class="body">
      <div className="main-content">
        <Post />
        <Post />
        <Post />
      </div>

      <div className="sidebar">
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
    </div>
  );
}

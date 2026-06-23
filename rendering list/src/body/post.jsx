import "./post.css";


export default function Post({children , content}) {
  return (
    <div class="post-card">
      <h2 class="post-title">{children}</h2>
      <hr></hr>
      <p class="post-body">{content}</p>
    </div>
  );
}

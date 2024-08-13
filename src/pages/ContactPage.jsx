// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="principal"> 
      <form method="POST" action="destinationURL">
        <div>
          <label for="usernameInput">Name</label>
          <input type="text" name="usernameInput"/>
        </div>
        <div>
          <label for="titleInput">Tittle</label>
          <input type="text" name="titleInput"/>
        </div>
        <div>
          <label for="contentInput">Content</label>
          <textarea name="contentInput" id="contentInput"  rows="5"></textarea>
        </div>
          <button id="user-submit">Submit</button>
      </form>
    </div>
  );
}

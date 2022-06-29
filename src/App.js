import CommentDetails from "./CommentDetails";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";
import "./App.css";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>Are you sure you want to proceed?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="rizavia"
          time="Today at 6:00 PM"
          comment="Nice post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="faraz"
          time="Today at 10:00 AM"
          comment="Keep it up!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="rameez"
          time="Yesterday at 11:30 PM"
          comment="Excellent"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="rehan"
          time="20/7/22 at 1:00 PM"
          comment="Could have been way better"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="arbaz"
          time="20/7/22 at 6:00 PM"
          comment="I like it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;

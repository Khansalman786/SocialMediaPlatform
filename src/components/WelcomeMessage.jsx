const WelcomeMessage = ({ postList}) => {
  return (
    <div className="welcomeMessage">
      {postList.length === 0 && (
        <div>
          <h2>
            There is no Post.
          </h2>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;

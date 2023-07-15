import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className=" w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi
        maxime quaerat iure exercitationem cum, enim impedit aperiam? Dolores,
        ex?
      </p>
      {/* // Feed */}
      <Feed />
    </section>
  );
};

export default Home;

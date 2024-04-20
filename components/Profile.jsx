import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete, isCurrentUser }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="text-blue-900">
          {isCurrentUser ? "My Profile" : `${name}'s Profile`}
        </span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data && Array.isArray(data) ? (
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
};

export default Profile;

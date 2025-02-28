export default function FriendCard({ name, avatar, description, url }) {
  return (
    <a href={url} target="_blank" rel="noopener" className="grid bg-background-secondary dark:bg-background-secondary-dark rounded-lg p-4 hover:shadow-lg transition duration-300 transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={`${name}的头像`} className="w-16 h-16 rounded-full object-cover border-2 border-primary dark:border-primary-dark" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary dark:text-primary-dark">{name}</h3>
          <p className="text-text-secondary dark:text-text-secondary-dark text-sm mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
}

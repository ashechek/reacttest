const ArticlesList = ({articles}) => {
    return <ul>
        <h2>Resoults</h2>
        {articles.map(item =>
            <li key={item.objectID}>
                <a href={item.url} target="_blank">{item.title}</a>
            </li>)}
    </ul>
};
export default ArticlesList;
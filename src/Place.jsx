export default function Place({ item }) {
    return (
        <article className="place">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
        </article>
    );
}
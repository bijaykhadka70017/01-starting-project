export default function Section({ title, children, ...props }) {
    return (
        // 2. Unpacking those props onto the native element
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
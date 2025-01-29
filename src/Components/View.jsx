export default function View({ counter, color, size }) {
    return (
        <h2 style={{color, fontSize: size + 'px'}}>{counter}</h2>
    );
}
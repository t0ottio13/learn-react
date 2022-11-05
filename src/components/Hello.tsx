
const Hello = () => {
    const onClick = () => {
        alert('hello')
    }

    const text = 'Hello, React'

    return(
        <div onClick={onClick}>
            {text}
        </div>
    )
}

// 外部から読み込めるようにエクスポート
export default Hello